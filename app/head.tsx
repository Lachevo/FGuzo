export default function Head() {
  return (
    <>
      <title>FastGuzo</title>
      <meta name="description" content="FastGuzo is a trusted immigration consultancy — visas, applications, and end-to-end immigration support." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f172a" />
      <link rel="canonical" href="https://fastguzo.com/" />

      {/* Favicons and touch icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Social / sharing metadata hints */}
      <meta property="og:title" content="FastGuzo" />
      <meta property="og:description" content="Trusted immigration consultancy — visas, applications, and end-to-end immigration support." />
      <meta property="og:image" content="/images/favicon.png" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Organization structured data to help Google show logo in results */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FastGuzo",
          "url": "https://fastguzo.com",
          "logo": "https://fastguzo.com/images/primary-logo-colored.png"
        }`}
      </script>
    </>
  )
}
