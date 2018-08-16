export default ({children}) =>
  <div>
    <style jsx>{`
      {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 30vh;
      }
    `}</style>
    {children}
  </div>