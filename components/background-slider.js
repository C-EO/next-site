export default ({ duration, children }) => {
  return <div className='slider-container'>
    <style jsx>{`
      .slider-container {
        overflow: hidden;
        white-space: nowrap;
      }
      .slider-content-wrapper {
        display: inline-block;
        overflow: hidden;
        animation: slide ${(duration * 2) || 10}s linear infinite;
      }
      @keyframes slide {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          transform: translate3d(-100%, 0, 0);
        }
      }
    `}</style>
    <div className='slider-content-wrapper'>{children}</div>
    <div className='slider-content-wrapper'>{children}</div>
  </div>
}
