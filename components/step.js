import React from 'react'

export const Steps = ({children}) => {
  let childrenClone = []
  React.Children.forEach(children, child => {
    childrenClone.push(child)
    childrenClone.push(<span className="separator">·</span>)
  })
  childrenClone.splice(childrenClone.length - 1, 1)

  return <div className="steps-container">
    <style jsx>{`
      .steps-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        cursor: default;
      }
      // :after {
      //   content: '';
      //   position: absolute;
      //   height: 1px;
      //   left: 1rem;
      //   right: 1rem;
      //   background-color: #ddd;
      //   z-index: 0;
      // }
    `}</style>
    {childrenClone}
  </div>
}

export const Step = ({children, active}) =>
  <div className="step-item">
    <style jsx>{`
      .step-item {
        color: ${active ? '#fff' : '#888'};
        font-size: 14px;
        font-weight: ${active ? '500' : '400'};
        line-height: 1.4rem;
        padding: 0 2rem;
        margin: 0 .5rem;
        // background: #000;
        transition: all .2s ease;
        cursor: pointer;
        z-index: 1;
      }
      :hover {
        color: #ccc;
      }
    `}</style>
    {children}
  </div>