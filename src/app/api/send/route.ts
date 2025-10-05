import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email: recipientEmail, fileUrl, replyEmail } = await req.json();

    if (!recipientEmail || !fileUrl || !replyEmail) {
      return NextResponse.json(
        { error: "Missing email, replyEmail, or file URL" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
      ...(process.env.NODE_ENV === "development" && {
        tls: { rejectUnauthorized: false }, 
      }),
    });

    const mailOptions = {
      from: `"FileShare App" <${process.env.EMAIL_USER}>`, 
      to: recipientEmail, 
      replyTo: replyEmail, // reply goes to sender input
      subject: "📎 A file has been shared with you!",
      html: `
        <h2>File Shared via FileShare</h2>
        <p>Someone has shared a file with you. Click below to access it:</p>
        <a href="${fileUrl}" target="_blank"
          style="color:#1a73e8;text-decoration:none;font-weight:bold;">
          👉 View / Download File
        </a>
        <br/><br/>
        <p>If you have any questions, simply reply to this email — it’ll go directly to the sender.</p>
        <hr/>
        <p style="font-size:12px;color:gray;">Sent via FileShare</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);

    return NextResponse.json({ success: true, id: info.messageId });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}






