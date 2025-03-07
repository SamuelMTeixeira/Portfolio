import EmailTemplate from '@/components/email/template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const { subject, email, name } = await req.json()

  if (!subject || !email) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const OWNER_CONTACT_NAME = process.env.OWNER_CONTACT_NAME
  const OWNER_CONTACT_EMAIL = process.env.OWNER_CONTACT_EMAIL

  if (!OWNER_CONTACT_NAME || !OWNER_CONTACT_EMAIL) {
    return NextResponse.json(
      { error: 'Resource is not configured yet' },
      { status: 500 },
    )
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `${OWNER_CONTACT_NAME} <${OWNER_CONTACT_EMAIL}>`,
      to: OWNER_CONTACT_EMAIL,
      subject,
      react: EmailTemplate({ email, subject, recipientName: name }),
    })

    if (error) {
      return NextResponse.json(
        { message: 'Email sending failed', error },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send email', error },
      { status: 500 },
    )
  }
}
