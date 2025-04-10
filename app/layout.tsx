import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PetSync - Smart Pet Health Monitoring',
  description: 'AI-powered health monitoring for your beloved pets',
  icons: {
    icon: '/favicon.ico',
  },
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
