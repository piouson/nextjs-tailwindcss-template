import { Html, Head, Main, NextScript } from 'next/document'
import { ProvideFeedback } from 'src/components'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white dark:bg-gray-900">
        <ProvideFeedback />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
