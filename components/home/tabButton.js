import classNames from 'classnames'

export default ({isMobile, light, selected, onClick, children}) => (
  <a className={classNames('fw3', { selected, f5: isMobile })} onClick={onClick}>
    <style jsx>{`
      a {
        display: inline-block;
        border-radius: 7px;
        cursor: pointer;
        text-decoration: none;
        padding: .25rem .5rem;
        margin: ${isMobile ? '.25rem' : '0 1rem'};
        color: #8D8D8D;
        transition: all .2s ease;
      }
      a:hover {
        ${light ? '' : 'background-color: rgba(255, 255, 255, .05)'};
      }
      a.selected {
        color: #efefef;
        ${light ? '' : 'background-color: rgba(255, 255, 255, .1)'};
      }
    `}</style>
    {children}
  </a>
)
