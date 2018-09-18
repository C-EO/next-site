import Document, { Head, Main, NextScript } from 'next/document'
import { transparentize, darken, modularScale } from 'polished'

import { GA_TRACKING_ID } from '../lib/analytics'

export default class NextSite extends Document {
  render() {
    const themeColor = '#0076ff'
    const modularScaleRatio = 'majorSecond' 

    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Next.js: the React framework for production websites and applications" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/static/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#000000"/>
          <link rel="shortcut icon" href="/static/favicon/favicon.ico"/>
          <style>{`
            :root {
              --theme-color: ${themeColor};
              --theme-color-transparent: ${transparentize(1 - 0.39, themeColor)};
              --theme-color-transparent-light: ${transparentize(1 - 0.23, themeColor)};
              --theme-color-transparent-near-white: ${transparentize(1 - 0.1, themeColor)};

              --theme-color-hover: ${transparentize(0.1, themeColor)};
              --theme-color-active: ${darken(0.05, themeColor)};

              --gray-background: #f6f6f6;
              
              /* set base values */
              --text-base-size: 16px;
              --text-scale-ratio: 1.2;

              /* type scale */
              --text-xs: ${modularScale(-2, '1rem', modularScaleRatio)};
              --text-sm: ${modularScale(-1, '1rem', modularScaleRatio)};
              --text-md: ${modularScale(1, '1rem', modularScaleRatio)};
              --text-lg: ${modularScale(2, '1rem', modularScaleRatio)};
              --text-xl: ${modularScale(3, '1rem', modularScaleRatio)};
              --text-xxl: ${modularScale(4, '1rem', modularScaleRatio)};
              --text-xxxl: ${modularScale(5, '1rem', modularScaleRatio)};
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
        </body>
      </html>
    )
  }
}
