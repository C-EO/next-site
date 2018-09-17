export default ({center, vCenter, dark, gray, wide, padding, overflow, minHeight, dotBackground, children, ...props}) => {
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
        ${minHeight ? 'min-height: ' + minHeight + 'px;' : ''}
        ${vCenter ? `display: flex; align-items: center;` : ''}
        ${dotBackground ? `
          background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
          background-size: 28px 28px;
        ` : ''}
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