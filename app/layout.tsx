import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <title>Tutku Uçan | Full-Stack Developer</title>
        <meta name="description" content="Tutku Uçan was improve himself about Software Development since 4 years about Web Development, DevOps, Databases and Programming Basics. Now he is professional Software Developer. He worked at eQuota GmbH as Frontend Developer on beginning his career. Now he is Freelancer and developing own Full-Stack Web Projects." />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:title' content='Tutku Uçan | Full-Stack Developer' />
        <meta name='og:description' content='Tutku Uçan was improve himself about Software Development since 4 years about Web Development, DevOps, Databases and Programming Basics. Now he is professional Software Developer. He worked at eQuota GmbH as Frontend Developer on beginning his career. Now he is Freelancer and developing own Full-Stack Web Projects.' />
        <meta name='og:image' content='https://tutku.space/og-image.jpg' />
        <meta name='og:site_name' content='Tutku Uçan | Full-Stack Developer' />
        <meta name='og:type' content='profile' />
      </head>

      <body>{children}</body>
    </html>
  )
}
