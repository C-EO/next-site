import Document, { Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/analytics'

export default class NextSite extends Document {
  render() {
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
