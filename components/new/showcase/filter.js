import Container from '../container'

export default ({onSelect, selectedId}) => <Container wide center>
  <style jsx>{`
    .tabs {

    }
    .tab {
      display: inline-block;
      box-shadow: 0 10px 20px 0 var(--theme-color-transparent);
    }
    .background {
      height: 100%;
      background: white;
    }
  `}</style>
  <div className="tabs">
    All Finace News Tool <div className="tab">Personal</div>
  </div>
  <div className="background"/>
</Container>
