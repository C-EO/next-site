export default ({id, offset, children}) => {
  return (
    <div
      id={id}
      style={{
        minHeight: offset ? `calc(100vh - ${offset}px)` : ''
      }}
    >
      <style jsx>{`
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      {children}
    </div>
  )
}
