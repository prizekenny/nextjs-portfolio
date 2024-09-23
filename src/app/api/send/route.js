import { NextResponse } from "next/server";
import { Resend } from "resend";
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "onboarding@resend.dev"; //process.env.FROM_EMAIL;
const toEmail = "prizekenny@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      react: (
        <>
          <h1>From: {email}</h1>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
