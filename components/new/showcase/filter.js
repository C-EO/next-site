import Container from '../container'

const TABS = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'finace',
    name: 'Finace'
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
    name: 'h'
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
    }
    .tab {
      display: inline-block;
      margin: 0 1rem;
      cursor: pointer;
    }
    .tab span {
      opacity: 1;
    }
    .tab strong {
      position: absolute;
      opacity: 0;
    }
    .tab.selected {
      font-weight: bold;
      color: var(--theme-color);
    }
    .tab.selected span {
      opacity: 0;
    }
    .tab.selected strong {
      opacity: 1;
    }
    .background {
      position: absolute;
      top: 0;
      width: 100%;
      height: 32px;
      background: white;
      z-index: -1;
    }
    .indicator {
      position: absolute;
      bottom: 0;
      display: inline-block;
      width: 50px;
      height: 10px;
      box-shadow: 0 10px 20px 0 var(--theme-color-transparent);
      z-index: -2;
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
