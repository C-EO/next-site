import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import { transparentize, lighten, modularScale } from 'polished'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let theme = router.asPath.match(/\?theme=(.+)/)
    if (theme) {
      theme = theme[1] 
    } else {
      theme = 'FF2A37' // || 'FF4954'
    }
    
    return {pageProps, theme}
  }

  render () {
    const {Component, pageProps, theme} = this.props
    
    const themeColor = '#' + theme
    const modularScaleRatio = 'majorSecond' 

    return <Container>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content="Next.js is a lightweight framework for static and server-rendered applications" />
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
      <Component {...pageProps} />
    </Container>
  }
}
