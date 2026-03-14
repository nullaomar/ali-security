import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}
const TO_EMAIL = process.env.NOTIFY_EMAIL || "info@caprasecurity.ca";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const position = formData.get("position") as string;
    const license = formData.get("license") as string;
    const experience = formData.get("experience") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email || !phone || !position) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build attachments array if resume exists
    const attachments: { filename: string; content: Buffer }[] = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    await getResend().emails.send({
      from: "Capra Security <notifications@caprasecurity.ca>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Application - ${position} - ${name}`,
      attachments,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f1b2d; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #d4a017; margin: 0; font-size: 20px;">New Job Application</h1>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">City / Region</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;">${city || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Position</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #8b6914;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">License #</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;">${license || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Resume</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;">${resumeFile && resumeFile.size > 0 ? `Attached (${resumeFile.name})` : "Not provided"}</td>
              </tr>
            </table>
            ${experience ? `
            <div style="margin-top: 20px;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Experience & Qualifications</p>
              <div style="background: #f9fafb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #374151;">
                ${experience.replace(/\n/g, "<br>")}
              </div>
            </div>
            ` : ""}
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f3f4f6; font-size: 11px; color: #9ca3af;">
              Sent from caprasecurity.ca application form
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
