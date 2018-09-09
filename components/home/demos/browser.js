import Frame from 'react-frame-component'

const makeLink = onSelect => ({tab, children}) =>
  <a href='javascript:;' onClick={() => onSelect(tab)}>{children}</a>

export default Comp => ({ onSelect }) => 
  <Frame>
    <style jsx global>{`
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    `}</style>
    <Comp A={makeLink(onSelect)}/>
  </Frame>

