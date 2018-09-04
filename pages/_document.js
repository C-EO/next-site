import Document, { Head, Main, NextScript } from 'next/document'
import { transparentize } from 'polished'

export default class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    let theme = ctx.query.theme || 'FF4954'

    return { ...initialProps, theme }
  }

  render () {
    const { theme } = this.props
    const themeColor = '#' + theme

    return (
      <html lang="en">
        <style>{`
          :root {
            --theme-color: ${themeColor};
            --theme-color-transparent: ${transparentize(0.39, themeColor)};
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