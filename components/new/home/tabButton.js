export default ({selected, onClick, children}) => (
  <a className={selected ? `selected` : ''} onClick={onClick}>
    <style jsx>{`
      a {
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 40px;
        border-radius: 7px;
        cursor: pointer;
        text-decoration: none;
        font-size: 16px;
        padding: 10px 20px;
        display: inline-block;
        color: #8D8D8D;
      }
      a.selected {
        color: white;
      }
    `}</style>
    {children}
  </a>
)