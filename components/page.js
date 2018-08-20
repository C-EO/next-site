import Header from './header'

export default ({children}) => (
  <div>
    <style jsx>{`
      {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 1rem;
      }
    `}</style>
    <Header/>
    {children}
  </div>
)