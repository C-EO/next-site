export default ({content}) =>
  <div>
    <style jsx>{`
      {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 100%;
        height: 250px;
        color: #aaa;
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: #eee;
      }
    `}</style>
    {content || 'Post here'}
  </div>