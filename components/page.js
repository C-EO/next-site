import Header from './header'

export default ({children}) => (
  <div>
    <style jsx>{`
      {
        max-width: 1200px;
        margin: 0 auto;
      }
    `}</style>
    <Header/>
    {children}
  </div>
)