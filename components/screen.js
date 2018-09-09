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
          width: 100%;
          min-height: 100vh;
          align-items: center;
        }
      `}</style>
      {children}
    </div>
  )
}
