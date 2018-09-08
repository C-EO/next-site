import Link from 'next/link'

import { sortOrder, mapping } from '../../showcase-manifest'

// length should be odd number
const DATA = sortOrder.slice(0, 7).map(id => {
  return mapping[id]
})

const imgWidth = 330
const margin = 30

export default () => <div className="showcase-container">
  <style jsx>{`
    .showcase-container {
      margin: 4rem 0 2rem;
    }
    .slides {
      display: flex;
      max-width: 100vw;
      margin: 50px 0;
    }
    .slides *::selection {
      background-color: transparent;
    }
    .shadow {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      color: white;
      text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
      transition: opacity .2s ease;
      opacity: 0;
    }
    .info {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 1rem;
      text-align: center;
      color: white;
      background: rgba(0, 0, 0, 0.8);
      transition: opacity .6s ease;
      opacity: 0;
    }
    .slide:hover .shadow {
      opacity: 1;
    }
    .slide:hover .info {
      opacity: 1;
    }
    .slide {
      width: ${imgWidth}px;
      height: 185px;
      margin: 0 calc(${50 / DATA.length}vw - ${imgWidth / 2}px);
      border-radius: 7px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, .08);
      transition: all .5s ease;
      // cursor: zoom-in;
      cursor: pointer;
      overflow: hidden;
      background: white;
    }
    .slide:hover {
      box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
      // z-index: 10 !important;
      // margin: 0 calc(${50 / DATA.length}vw - ${imgWidth / 2 - 40}px);
      // width: ${imgWidth + 20}px;
      // height: ${185 + ~~(40 * 185 / 330)}px;
    }
    .slide:hover img {
      opacity: 1 !important;
    }
    img {
      width: 100%;
      transition: opacity .5s ease;
    }
  `}</style>
  <div className="slides">
    {DATA.map((item, i) => {
      let offset = ~~(DATA.length / 2) - i
      let z = -Math.abs(offset)
      let top = z * margin
      return <Link key={`showcase-${i}`} href={`/showcase/${item.internalUrl}`}>
        <div className="slide" style={{
          zIndex: DATA.length + z,
          transform: `scale(${1 + Math.sin(z / 9)}) translate3d(${-Math.sin(offset) * 30}px, ${top}px, 0)`,
          // filter: `brightness(${z === 0 ? 1 : 0.8})`
        }}>
          <img src={item.src.replace('/showcases/', '/showcase-thumbnails/')} alt={`Showcase ${i}`} style={{
            opacity: z === 0 ? 1 : 0.8
          }}/>
          <div className='info'>
            <h3 className='f-reset fw4'>{item.title}</h3>
          </div>
        </div>
      </Link>
    })}
  </div>
</div>
