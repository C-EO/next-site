import Document, { Head, Main, NextScript } from 'next/document'

// for CSS resets, refer to https://necolas.github.io/normalize.css/8.0.0/normalize.css

export default class Doc extends Document {
  render () {
    return (
      <html lang="en">
        <style jsx>{`
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
          }
          body {
            margin: 0;
          }
        `}</style>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Next.js is a lightweight framework for static and server-rendered applications" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}