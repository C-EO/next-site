import Header from './header'

export default ({children}) => (
  <div>
    <Header/>
    <style jsx>{`
      .container {
        margin: 0 auto;
        padding: 0 1rem;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
    `}</style>
    <div className="container">
      {children}
    </div>
  </div>
)