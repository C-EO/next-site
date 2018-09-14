import Head from 'next/head'

import { withMediaQuery } from './media-query'

export default withMediaQuery(({ isMobile, title, children }) => (
  <div className={isMobile ? 'is-mobile' : ''}>
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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.65;
        font-size: var(--text-base-size);
        font-weight: 400;
        min-width: 320px;
        scroll-behavior: smooth;
      }
      html, body {
        background-color: #FFF;
        color: #111;
      }
      ::selection {
        background-color: var(--theme-color);
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
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
      .f-reset {
        font-size: 1rem;
      }
      .f0 {
        font-size: var(--text-xxxl);
      }
      .f1 {
        font-size: var(--text-xxl);
      }
      .f2 {
        font-size: var(--text-xl);
      }
      .f3 {
        font-size: var(--text-lg);
      }
      .f4 {
        font-size: var(--text-md);
      }
      .f5 {
        font-size: var(--text-sm);
      }
      .f6 {
        font-size: var(--text-xs);
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
      .subtitle {
        color: #BCBCBC;
      }
      .mute {
        color: #aaa;
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
      .is-mobile .row {
        flex-direction: column;
        margin: -1.5rem 0;
      }
      .is-mobile .column {
        width: 100%;
        padding: 1.5rem 0;
      }
      .display-mobile {
        display: none;
      }
      .is-mobile .display-mobile {
        display: unset;
      }
      .no-tap-highlight, a {
        -webkit-user-select: none;
          -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
            touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
      }
    `}</style>
    {children}
  </div>
))
