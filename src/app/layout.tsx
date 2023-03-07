import './globals.css'

export const metadata = {
  title: 'Personal Portfoilio',
  description: 'Personal portfolio using next js with typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
