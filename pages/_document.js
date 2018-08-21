import Document, { Head, Main, NextScript } from 'next/document'

// for CSS resets, refer to https://necolas.github.io/normalize.css/8.0.0/normalize.css

export default class Doc extends Document {
  render () {
    return (
      <html lang="en">
        <style>{`
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            height: 100%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            text-rendering: optimizeLegibility;
            font-weight: 300;
            font-size: 13px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          .narrow {
            max-width: 1000px;
            margin: 0 auto;
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