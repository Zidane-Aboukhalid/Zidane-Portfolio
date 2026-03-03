import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ─── SMTP transporter ─────────────────────────────────────────────────────────
function createTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465;
  // SMTP_SECURE=true for port 465 (SSL), false for port 587 (STARTTLS)
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      // Support both SMTP_PASSWORD and SMTP_PASS
      pass: process.env.SMTP_PASSWORD ?? process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // allow self-signed certs on shared hosting
    },
  });
}

// ─── Email templates ──────────────────────────────────────────────────────────

/** Email YOU receive when someone contacts you */
function ownerEmailHtml(data: { name: string; email: string; subject: string; message: string }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#0f1117;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#a855f7,#3b82f6,#06b6d4);padding:2px;border-radius:16px 16px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#131620;border-radius:14px 14px 0 0;padding:32px 36px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">
                            Zidane<span style="color:#06b6d4;">.</span>
                          </div>
                          <div style="color:#94a3b8;font-size:13px;margin-top:4px;">Portfolio Contact System</div>
                        </td>
                        <td align="right">
                          <div style="background:rgba(168,85,247,0.15);border:1px solid rgba(168,85,247,0.3);border-radius:20px;padding:6px 14px;color:#a855f7;font-size:12px;font-weight:700;">
                            📩 New Message
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:linear-gradient(135deg,#a855f7,#3b82f6,#06b6d4);padding:0 2px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1a1f2e;padding:36px;">

                    <p style="color:#e2e8f0;font-size:16px;font-weight:700;margin:0 0 24px;">
                      You received a new message from your portfolio contact form! 🎉
                    </p>

                    <!-- Sender info cards -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                      <tr>
                        <td width="48%" style="background:#0f1117;border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:16px 18px;vertical-align:top;">
                          <div style="color:#6366f1;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;">👤 Full Name</div>
                          <div style="color:#f1f5f9;font-size:15px;font-weight:600;">${data.name}</div>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="background:#0f1117;border:1px solid rgba(6,182,212,0.2);border-radius:10px;padding:16px 18px;vertical-align:top;">
                          <div style="color:#06b6d4;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;">📧 Email</div>
                          <div style="color:#f1f5f9;font-size:15px;font-weight:600;">
                            <a href="mailto:${data.email}" style="color:#06b6d4;text-decoration:none;">${data.email}</a>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- Subject -->
                    <div style="background:#0f1117;border:1px solid rgba(168,85,247,0.2);border-left:3px solid #a855f7;border-radius:10px;padding:16px 18px;margin-bottom:24px;">
                      <div style="color:#a855f7;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;">📌 Subject</div>
                      <div style="color:#f1f5f9;font-size:15px;font-weight:600;">${data.subject}</div>
                    </div>

                    <!-- Message -->
                    <div style="background:#0f1117;border:1px solid rgba(59,130,246,0.2);border-radius:10px;padding:20px 22px;margin-bottom:28px;">
                      <div style="color:#3b82f6;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">💬 Message</div>
                      <div style="color:#cbd5e1;font-size:14px;line-height:1.8;white-space:pre-wrap;">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                    </div>

                    <!-- Reply CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}"
                             style="display:inline-block;background:linear-gradient(135deg,#a855f7,#3b82f6);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:50px;font-weight:700;font-size:15px;">
                            ↩ Reply to ${data.name}
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#a855f7,#3b82f6,#06b6d4);padding:0 2px 2px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#131620;border-radius:0 0 14px 14px;padding:20px 36px;text-align:center;">
                    <p style="color:#475569;font-size:12px;margin:0;">
                      Sent from your portfolio at <a href="https://aboukhalid-zidane.com" style="color:#06b6d4;text-decoration:none;">aboukhalid-zidane.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Confirmation email sent to the CLIENT who contacted you */
function clientConfirmationHtml(data: { name: string; subject: string }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Message Received – Zidane Aboukhalid</title>
</head>
<body style="margin:0;padding:0;background:#0f1117;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#06b6d4,#3b82f6,#a855f7);padding:2px;border-radius:16px 16px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#131620;border-radius:14px 14px 0 0;padding:32px 36px;text-align:center;">
                    <div style="font-size:40px;margin-bottom:12px;">✅</div>
                    <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">
                      Zidane<span style="color:#06b6d4;">.</span>
                    </div>
                    <div style="color:#94a3b8;font-size:13px;margin-top:6px;">Full Stack Developer · .NET & React</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:linear-gradient(135deg,#06b6d4,#3b82f6,#a855f7);padding:0 2px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1a1f2e;padding:36px;text-align:center;">

                    <h1 style="color:#f1f5f9;font-size:22px;font-weight:800;margin:0 0 16px;">
                      Thank you, ${data.name}! 🙌
                    </h1>
                    <p style="color:#94a3b8;font-size:15px;line-height:1.8;margin:0 0 28px;">
                      I have received your message and will get back to you within <strong style="color:#06b6d4;">24 hours</strong>.<br/>
                      I look forward to learning more about your project!
                    </p>

                    <!-- Subject recap -->
                    <div style="background:#0f1117;border:1px solid rgba(6,182,212,0.2);border-radius:10px;padding:16px 20px;margin-bottom:28px;text-align:left;">
                      <div style="color:#06b6d4;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;">Your inquiry</div>
                      <div style="color:#e2e8f0;font-size:14px;font-weight:600;">${data.subject}</div>
                    </div>

                    <!-- Quick links -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                      <tr>
                        <td align="center" style="padding:4px;">
                          <a href="https://linkedin.com/in/zidane-aboukhalid" style="display:inline-block;background:rgba(10,102,194,0.15);border:1px solid rgba(10,102,194,0.3);color:#60a5fa;text-decoration:none;padding:10px 20px;border-radius:50px;font-size:13px;font-weight:600;">
                            🔗 LinkedIn
                          </a>
                        </td>
                        <td align="center" style="padding:4px;">
                          <a href="https://github.com/Zidane-Aboukhalid" style="display:inline-block;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e2e8f0;text-decoration:none;padding:10px 20px;border-radius:50px;font-size:13px;font-weight:600;">
                            💻 GitHub
                          </a>
                        </td>
                        <td align="center" style="padding:4px;">
                          <a href="https://aboukhalid-zidane.com/projects" style="display:inline-block;background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.25);color:#c084fc;text-decoration:none;padding:10px 20px;border-radius:50px;font-size:13px;font-weight:600;">
                            🚀 Projects
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="color:#64748b;font-size:13px;margin:0;">
                      If urgent, reach me directly at<br/>
                      <a href="mailto:contact@aboukhalid-zidane.com" style="color:#06b6d4;text-decoration:none;">contact@aboukhalid-zidane.com</a>
                    </p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#06b6d4,#3b82f6,#a855f7);padding:0 2px 2px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#131620;border-radius:0 0 14px 14px;padding:20px 36px;text-align:center;">
                    <p style="color:#475569;font-size:12px;margin:0 0 4px;">
                      Zidane Aboukhalid — Full Stack Developer · Casablanca, Maroc
                    </p>
                    <p style="color:#334155;font-size:11px;margin:0;">
                      You received this email because you submitted a contact form at
                      <a href="https://aboukhalid-zidane.com" style="color:#475569;text-decoration:none;">aboukhalid-zidane.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── API Route ────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string; email: string; subject: string; message: string;
    };

    // Basic validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: 'Message is too short.' }, { status: 400 });
    }

    // ── Dev mode: skip SMTP, just log to terminal ─────────────────────────
    if (process.env.NODE_ENV !== 'production') {
      console.log('\n========================================');
      console.log('📧 [DEV] Contact form submission (not sent via SMTP):');
      console.log(`   From   : ${name} <${email}>`);
      console.log(`   Subject: ${subject}`);
      console.log(`   Message: ${message}`);
      console.log('========================================\n');
      return NextResponse.json({ success: true });
    }

    // ── Production: send via real SMTP ────────────────────────────────────
    const transporter = createTransporter();
    await transporter.verify();

    // Use bare address as From to match SMTP auth user exactly (avoids spoofing flags)
    const smtpUser = process.env.SMTP_USER!;
    const fromField = `Zidane Aboukhalid <${smtpUser}>`;
    const toField = process.env.SMTP_TO ?? process.env.CONTACT_TO ?? smtpUser;

    // 1️⃣  Notify YOU — plain-text + HTML for best deliverability
    await transporter.sendMail({
      envelope: { from: smtpUser, to: toField }, // Return-Path = From (no mismatch)
      from: fromField,
      to: toField,
      replyTo: `${name} <${email}>`,             // Reply goes to the sender
      subject: `New contact from ${name}: ${subject}`,
      // Plain-text version (required to avoid spam — never send HTML-only)
      text: [
        `New message from your portfolio contact form`,
        ``,
        `Name   : ${name}`,
        `Email  : ${email}`,
        `Subject: ${subject}`,
        ``,
        `Message:`,
        message,
        ``,
        `---`,
        `Sent from aboukhalid-zidane.com`,
      ].join('\n'),
      html: ownerEmailHtml({ name, email, subject, message }),
    });

    // 2️⃣  Confirm to CLIENT — plain-text + HTML
    await transporter.sendMail({
      envelope: { from: smtpUser, to: email },
      from: fromField,
      to: `${name} <${email}>`,
      subject: `I received your message — talk soon! | Zidane Aboukhalid`,
      text: [
        `Hi ${name},`,
        ``,
        `Thank you for reaching out! I received your message about:`,
        `"${subject}"`,
        ``,
        `I will get back to you within 24 hours.`,
        ``,
        `In the meantime, feel free to connect with me on LinkedIn:`,
        `https://linkedin.com/in/zidane-aboukhalid`,
        ``,
        `Best regards,`,
        `Zidane Aboukhalid`,
        `Full Stack Developer`,
        `contact@aboukhalid-zidane.com`,
        `https://aboukhalid-zidane.com`,
      ].join('\n'),
      html: clientConfirmationHtml({ name, subject }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route] SMTP error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email me directly.' },
      { status: 500 }
    );
  }
}

