export default ({ children }) => (
  <div className='browser'>
    <style jsx>{`
      .browser {
        color: black;
        background: #FFFFFF;
        box-shadow: 0 14px 50px 0 rgba(0,0,0,0.38), 0 2px 10px 0 rgba(0,0,0,0.48);
        border-radius: 7px;
        width: 488px;
        height: 326px;
        overflow: hidden;
      }
      .title-bar {
        height: 32px;
        background-image: linear-gradient(-180deg, #F5F5F5 2%, #E8E8E8 99%);
      }
    `}</style>
    <div className='title-bar'></div>
    <div>
      {children}
    </div>
  </div>
)