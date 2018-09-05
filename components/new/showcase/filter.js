import Container from '../container'

const TABS = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'finance',
    name: 'Finance'
  },
  {
    id: 'news',
    name: 'News'
  },
  {
    id: 'personal',
    name: 'Personal'
  },
  {
    id: 'heart',
    name: 'Heart'
  }
]

export default ({onSelect, selectedId}) => <Container wide center>
  <style jsx>{`
    .tabs {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .02);
    }
    .tab {
      display: inline-block;
      margin: 0 1rem;
      cursor: pointer;
      z-index: 2;
    }
    .tab span {
      opacity: 1;
    }
    .tab strong {
      color: var(--theme-color);
      position: absolute;
      opacity: 0;
    }
    .tab.selected span {
      opacity: 0;
    }
    .tab.selected strong {
      opacity: 1;
    }
    .indicator {
      position: absolute;
      top: 100%;
      display: inline-block;
      width: 108px;
      height: 30px;
      z-index: 0;
      overflow: hidden;
    }
    .indicator:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 100%;
      display: inline-block;
      width: 60px;
      height: 30px;
      border-raidus: 20px;
      box-shadow: 0 6px 24px 0 var(--theme-color-transparent-light);
      transform: translateX(-50%);
      z-index: 0;
    }
  `}</style>
  <div className="tabs">
    {
      TABS.map(({id, name}) => {
        return <div className={`tab${selectedId === id ? ' selected' : ''}`} onClick={() => onSelect(id)} key={id}>
          <strong>{name}</strong>
          <span>{name}</span>
        </div>
      })
    }
    <div className="background"/>
    <div className="indicator"/>
  </div>
</Container>
