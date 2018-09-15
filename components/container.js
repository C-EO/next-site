export default ({center, dark, gray, wide, padding, overflow, children, ...props}) => {
  return <div {...props}>
    <style jsx>{`
      {
        width: 100%;
        margin: 0 auto;
        padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '1rem'};
        ${wide ? '' : `max-width: 1024px;`}
        ${center ? `text-align: center;` : ''}
        ${dark ? `background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);` : ''}
        ${dark ? `color: #f1f1f1;` : ''}
        ${gray ? `background-color: var(--gray-background);` : ''}
        ${wide && !overflow ? 'overflow: hidden;' : ''}
      }
      :after {
        // BFC
        content: '';
        display: table;
        clear: both;
      }

      :global(.is-tablet) div {
        padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '2rem'};
      }
      :global(.is-mobile) div {
        padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '1rem'};
      }
    `}</style>
    {children}
  </div>
}