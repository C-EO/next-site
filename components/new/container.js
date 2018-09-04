export default ({center, dark, wide, children, ...props}) => {
  return <div {...props}>
    <style jsx>{`
      {
        width: 100%;
        margin: 0 auto;
        ${wide ? '' : `max-width: 1024px;`}
        ${wide ? '' : `padding: 0 1rem;`}
        ${center ? `text-align: center;` : ''}
        ${dark ? `background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);` : ''}
        ${dark ? `color: white;` : ''}
      }
    `}</style>
    {children}
  </div>
}