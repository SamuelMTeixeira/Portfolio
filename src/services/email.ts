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

  return await fetch('/api/contact/send-email', options)
}
