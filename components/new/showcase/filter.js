import Container from '../container'
import { categories } from '../../../showcase-manifest'

const Heart = () =>
  <svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-917.000000, -313.000000)" fill="#FD3B47" fillRule="nonzero">
              <g transform="translate(504.000000, 253.000000)">
                  <g transform="translate(413.000000, 60.000000)">
                      <path d="M14.682,1.318 C12.925,-0.439 10.075,-0.439 8.318,1.318 C8.197,1.439 8.104,1.577 8,1.707 C7.896,1.577 7.803,1.439 7.682,1.318 C5.925,-0.439 3.075,-0.439 1.318,1.318 C-0.439,3.075 -0.439,5.925 1.318,7.682 L8,14 L14.682,7.682 C16.439,5.925 16.439,3.075 14.682,1.318 Z" id="Shape"></path>
                  </g>
              </g>
          </g>
      </g>
  </svg>

export default ({onSelect, selectedId}) => <Container wide center>
  <style jsx>{`
    .categories {
      display: flex;
      height: 32px;
      align-items: baseline;
      justify-content: center;
      font-weight: 500;
      text-transform: uppercase;
    }
    .tab {
      display: inline-block;
      position: relative;
      text-align: center;
      padding: 0 1.25rem;
      cursor: pointer;
    }
    .tab.selected {
      // font-weight: 900;
      color: var(--theme-color);
    }
    .indicator {
      position: absolute;
      top: 100%;
      display: inline-block;
      width: 120px;
      height: 30px;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    }
    .indicator:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 100%;
      display: inline-block;
      width: 50%;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 6px 24px 0 var(--theme-color-transparent-light);
      // background: var(--theme-color);
      // filter: blur(2px);
      transform: translateX(-50%);
      z-index: 0;
    }
  `}</style>
  <div className="indicator"/>
  <div className="categories">
    {
      categories.map(id => {
        return <span className={`tab${selectedId === id ? ' selected' : ''} f6`} onClick={() => onSelect(id)} key={id}>
          {id}
        </span>
      })
    }
    <span className='tab f5'>
      <Heart/>
    </span>
  </div>
</Container>
