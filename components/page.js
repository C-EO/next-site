import Head from 'next/head'
import classNames from 'classnames'

import '../lib/polyfill'
import { withMediaQuery } from './media-query'
import RouterEvents from '../lib/router-events'
import { trackPageview } from '../lib/analytics'

RouterEvents.on('routeChangeComplete', (url) => {
  trackPageview(url)
})

export default withMediaQuery(({ isMobile, isTablet, title, children }) => (
  <div className={classNames({'is-mobile': isMobile, 'is-tablet': isTablet})}>
    <Head>
      {title && <title>{title}</title>}
    </Head>
    <style jsx>{`
      {
        overflow-x: hidden;
      }
    `}</style>
    <style jsx global>{`
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
        position: relative;
        min-height: 100%;
        margin: 0;
        line-height: 1.65;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 16px;
        font-weight: 400;
        min-width: 320px;
        direction: ltr;
        font-feature-settings: 'kern';
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
      }
      html, body {
        background-color: #FFF;
        color: #111;
      }
      ::selection {
        background-color: #0076ff;
        color: #FFF;
      }
      [role="grid"]:focus {
        outline: none;
      }
      svg {
        text-rendering: optimizeLegibility;
      }
      h1, h2, h3 {
        margin: 0;
      }
      a {
        color: #2195ff;
        text-decoration: none;
        transition: color .2s ease;
      }
      a:hover {
        color: #68b5fb;
      }
      code {
        font-size: .9em;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
      }
      code:before, code:after {
        content: '\`';
      }
      pre code:before, pre code:after {
        content: '';
      }
      .demo-footer .note code {
        background: rgba(0, 0, 0, 0.2);
        padding: .2rem;
        margin: 0 .1rem;
        border-radius: 2px;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
      .f-reset {
        font-size: 1rem;
      }
      .f0 {
        font-size: 1.802032470703125em;
      }
      .f1 {
        font-size: 1.601806640625em;
      }
      .f2 {
        font-size: 1.423828125em;
      }
      .f3 {
        font-size: 1.265625em;
      }
      .f4 {
        font-size: 1.125em;
      }
      .f5 {
        font-size: 0.8888888888888888em;
      }
      .f6 {
        font-size: 0.7901234567901234em;
      }
      .fw1 {
        font-weight: 100;
      }
      .fw2 {
        font-weight: 200;
      }
      .fw3 {
        font-weight: 300;
      }
      .fw4 {
        font-weight: 400;
      }
      .fw5 {
        font-weight: 500;
      }
      .fw6 {
        font-weight: 600;
      }
      .fw7 {
        font-weight: 700;
      }
      .fw8 {
        font-weight: 800;
      }
      .fw9 {
        font-weight: 900;
      }
      .subtitle {
        color: #999;
      }
      .mute {
        color: #757575;
      }
      .tc {
        text-align: center;
      }
      .row {
        display: flex;
        align-items: center;
        margin: 0 -1.5rem;
      }
      .column {
        flex: 1;
        padding: 0 1.5rem;
      }
      .display-mobile {
        display: none;
      }
      .is-mobile .display-mobile {
        display: unset;
      }
      a[role=button] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
      }
      .no-tap-highlight, a {
        -webkit-touch-callout: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
      }
      .no-tap-callout {
        -webkit-touch-callout: none;
      }
      .no-drag {
        user-drag: none; 
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
      .visually-hidden {
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
        overflow: hidden;
        position: absolute;
      }
    `}</style>
    {children}
  </div>
))
