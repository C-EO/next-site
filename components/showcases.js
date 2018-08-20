// odd length
const data = [
  {src: '/static/showcase/boosted.png'},
  {src: '/static/showcase/showcases-14.png'},
  {src: '/static/showcase/nike.png'},
  {src: '/static/showcase/showcases-00.png'},
  {src: '/static/showcase/marvel.png'},
  {src: '/static/showcase/avocode.png'},
  {src: '/static/showcase/showcases-06.png'}
]
const imgWidth = 330
const margin = 30

export default () =>
  <div className="showcase-container">
    <style jsx>{`
      .showcase-container {
        display: flex;
        max-width: 100vw;
        margin: 50px 0;
      }
      ::selection {
        background-color: transparent;
      }
      img {
        margin: 0 calc(${50 / data.length}vw - ${imgWidth / 2}px);
        height: 190px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, .15);
        transition: all .2s ease;
        cursor: pointer;
      }
      img:hover {
        margin-top: 5px;
        margin-bottom: -5px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        // z-index: 10 !important;
      }
    `}</style>
    {data.map((item, i) => {
      let z = -Math.abs(~~(data.length / 2) - i)
      let top = z * margin
      return <img key={`showcase-${i}`} src={item.src} alt={`Showcase ${i}`} style={{
        zIndex: data.length + z,
        transform: `scale(${1 + Math.sin(z / 10)}) translateY(${top}px)`
      }}/>
    })}
  </div>