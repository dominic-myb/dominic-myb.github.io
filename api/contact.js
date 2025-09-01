import nodemailer from "nodemailer";
import validator from "validator";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not Allowed" });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email address" });
  }

  if (subject.length > 150 || message.length > 2000) {
    return res
      .status(400)
      .json({ success: false, message: "Message too long" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return res.status(200).json({ success: true, id: info.messageId });
  } catch (err) {
    console.error("SendMail error:", err);
    return res.status(500).json({ success: false, message: "Email failed" });
  }
}
