import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

interface EmailProps {
  recipientName: string
  email: string
  subject: string
}

export default function EmailTemplate({
  recipientName,
  subject,
  email,
}: EmailProps) {
  const previewText = `Read ${recipientName}'s message`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={heading}>
                Here&apos;s what {recipientName} ({email}) wrote
              </Text>
              <Text style={review}>{subject}</Text>
              <Link style={button} href={`mailto:${email}`}>
                Reply {recipientName}
              </Link>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={footer}>Coded with 🧡 and ☕ by SamuelMTeixeira</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
}

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
}

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
}

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
}

const button = {
  backgroundColor: '#ff5a5f',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '18px',
  paddingTop: '19px',
  paddingBottom: '19px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
  textAlign: 'center' as const,
}
