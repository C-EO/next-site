export default ({ children }) => (
  <div className='editor'>
    <style jsx>{`
      .editor {
        background: #0C0C0C;
        border: 1px solid #535353;
        box-shadow: 0 14px 50px 0 rgba(0, 0, 0, 0.38), 0 2px 10px 0 rgba(0, 0, 0, 0.48);
        border-radius: 7px;
        width: 488px;
        height: 326px;
        overflow: hidden;
      }
      .title-bar {
        height: 32px;
        background-color: #212121;
      }
    `}</style>
    <div className='title-bar'></div>
    <div>
      {children}
    </div>
  </div>
)