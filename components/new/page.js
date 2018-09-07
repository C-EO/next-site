export default ({ children }) => (
  <div>
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
        line-height: 1.5;
        font-size: var(--text-base-size);
      }
      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      html, body {
        background-color: #FFF;
        color: #000;
      }
      ::selection {
        background-color: var(--theme-color);
        color: #FFF;
      }
      svg {
        text-rendering: optimizeLegibility;
      }
      h1, h2, h3 {
        margin: 0;
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
        font-weight: 300;
        color: #BCBCBC;
      }
      .mute {
        color: #ccc;
      }
      .row {
        display: flex;
        margin: 0 -1rem;
      }
      .column {
        flex: 1;
        padding: 0 1rem;
      }
    `}</style>
    {children}
  </div>
)