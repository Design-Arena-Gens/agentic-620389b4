import './globals.css'

export const metadata = {
  title: '3D Mechanical Watch',
  description: 'Interactive 3D mechanical watch mechanism',
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
