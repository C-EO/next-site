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
        font-size: 13px;
      }
      a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      html, body {
        background-color: #FFF;
        color: #000;
      }
      ::selection {
        background-color: #000;
        color: #FFF;
      }
      svg {
        text-rendering: optimizeLegibility;
      }
      h1, h2, h3 {
        margin: 0;
      }
      .f1 {
        font-weight: 500;
        font-size: 32px;
      }
      .f2 {
        margin: 0;
        font-weight: 300;
        font-size: 24px;
      }
      .f3 {
        font-size: 18px;
      }
      .f4 {
        font-size: 16px;
      }
      .subtitle {
        font-weight: 300;
        font-size: 18px;
        color: #BCBCBC;
      }
      .mute {
        color: #ccc;
      }
    `}</style>
    {children}
  </div>
)