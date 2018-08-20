export const Steps = ({children}) => {
  return <div>
    <style jsx>{`
      {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
      }
      :after {
        content: '';
        position: absolute;
        height: 1px;
        left: 1rem;
        right: 1rem;
        background-color: #ddd;
        z-index: -1;
      }
    `}</style>
    {children}
  </div>
}

export const Step = ({children, active}) =>
  <div>
    <style jsx>{`
      {
        color: ${active ? '#000' : '#aaa'};
        font-weight: ${active ? '500' : '300'};
        padding: 0 2rem;
        margin: 0 .5rem;
        background: #fff;
        transition: all .2s ease;
        cursor: pointer;
      }
      :hover {
        color: #000;
      }
    `}</style>
    {children}
  </div>