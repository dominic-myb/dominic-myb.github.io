import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("/contact", async (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `
      <div style="padding: 24px; background-color: #f9f9f9; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 6px rgba(0,0,0,0.1);">
          <h2 style="margin-top: 0;">You’ve got a new message!</h2>
          <p><strong>From:</strong> ${email}</p>
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
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

export default router;
