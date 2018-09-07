export default ({ children }) => (
  <div className='editor'>
    <style jsx>{`
      .editor {
        background: #0C0C0C;
        border: 1px solid #535353;
        box-shadow: 0 14px 50px 0 rgba(0, 0, 0, 0.38), 0 2px 10px 0 rgba(0, 0, 0, 0.48);
        border-radius: 7px;
        width: 100%;
        height: 326px;
        overflow: hidden;
      }
      .header {
        display: flex;
        height: 2rem;
        line-height: 2rem;
        text-align: left;
        background-color: #212121;
      }
      .button-group {
        display: inline-block;
        margin: 0 11px;
      }
      .button {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .button:not(:last-of-type) {
        margin-right: 5px;
      }
      .title {
        display: inline-block;
        flex: 1;
      }
    `}</style>
    <div className='header'>
      <div className='button-group'>
        <span className='button' />
        <span className='button' />
        <span className='button' />
      </div>
      <div className='title f5'>
        next-site
      </div>
    </div>
    <div>
      {children}
    </div>
  </div>
)