export const Terminal = ({children}) =>
  <div>
    <style jsx>{`
      {
        background: black;
        width: 400px;
        height: 250px;
        padding: 1rem;
        max-width: 100%;
        border-radius: 8px;
        color: white;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);
      }
    `}</style>
    {children}
  </div>

export const Caret = () =>
  <span><style jsx>{`
    {
      background: #f81ce5;
      display: inline-block;
      width: 7px;
      height: 15px;
      vertical-align: middle;
    }
  `}</style></span>

export const Prompt = () =>
  <span className="prompt"><style jsx>{`
  .prompt{
    color: #aaa;
  }
  .triangle {
    color: #fff;
  }
  `}</style><span className="triangle">▲</span> ~/my-app $ </span>
