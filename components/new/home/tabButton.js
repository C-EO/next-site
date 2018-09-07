export default ({selected, onClick, children}) => (
  <a className={`${selected ? `selected` : ''} fw3`} onClick={onClick}>
    <style jsx>{`
      a {
        display: inline-block;
        border-radius: 7px;
        cursor: pointer;
        text-decoration: none;
        padding: .25rem .5rem;
        margin: 0 1rem;
        color: #8D8D8D;
        transition: all .2s ease;
      }
      a:hover {
        background-color: rgba(255, 255, 255, .05);
      }
      a.selected {
        color: #efefef;
        background-color: rgba(255, 255, 255, .1);
      }
    `}</style>
    {children}
  </a>
)
