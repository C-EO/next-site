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
    `}</style>
    {children}
  </div>
)