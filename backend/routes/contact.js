import express from "express";
import nodemailer from "nodemailer";
import validator from "validator";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { email, subject, message } = req.body;

  // Validate required fields
  // Required field checks
  if (!email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  // Email validation
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email address." });
  }

  // Length limits
  if (subject.length > 150 || message.length > 2000) {
    return res
      .status(400)
      .json({ success: false, message: "Subject or message too long." });
  }

  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing environment variables:", {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
    });
    return res.status(500).json({
      success: false,
      message: "Server configuration error",
    });
  }

  const cleanEmail = validator.normalizeEmail(email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: cleanEmail,
      subject: `Portfolio Contact: ${subject}`,
      html: `
      <div style="padding: 24px; background-color: #f9f9f9; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 6px rgba(0,0,0,0.1);">
          <h2 style="margin-top: 0;">You’ve got a new message!</h2>
          <p><strong>From:</strong> ${cleanEmail}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr>
          <p>${message}</p>
          <hr>
          <p style="font-size: 12px; color: #888;">Sent via your portfolio website.</p>
        </div>
      </div>
      `,
    });
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
});

export default router;
