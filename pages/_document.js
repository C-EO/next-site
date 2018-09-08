import Document, { Head, Main, NextScript } from 'next/document'
import { transparentize, lighten, modularScale } from 'polished'

export default class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    let theme = ctx.query.theme || 'FF2A37' // || 'FF4954'

    return { ...initialProps, theme }
  }

  render () {
    const { theme } = this.props
    const themeColor = '#' + theme
    const modularScaleRatio = 'majorSecond' // 'minorThird'

    return (
      <html lang="en">
        <style>{`
          :root {
            --theme-color: ${themeColor};
            --theme-color-transparent: ${transparentize(1 - 0.39, themeColor)};
            --theme-color-transparent-light: ${transparentize(1 - 0.23, themeColor)};
            --theme-color-transparent-near-white: ${transparentize(1 - 0.1, themeColor)};

            --gray-background: #f6f6f6;
            
            /* set base values */
            --text-base-size: 16px;
            --text-scale-ratio: 1.2;

            /* type scale */
            --text-xs: ${modularScale(-2, '1em', modularScaleRatio)};
            --text-sm: ${modularScale(-1, '1em', modularScaleRatio)};
            --text-md: ${modularScale(1, '1em', modularScaleRatio)};
            --text-lg: ${modularScale(2, '1em', modularScaleRatio)};
            --text-xl: ${modularScale(3, '1em', modularScaleRatio)};
            --text-xxl: ${modularScale(4, '1em', modularScaleRatio)};
            --text-xxxl: ${modularScale(5, '1em', modularScaleRatio)};
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