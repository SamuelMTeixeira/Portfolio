export interface EmailProps {
  email: string
  message: string
  name: string
}

export async function sendEmail({ email, name, message }: EmailProps) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      subject: message,
      name,
    }),
  }

  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact/send-email`, options)
}
