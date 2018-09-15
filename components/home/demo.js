import Logo from '../logo'
import Container from '../container'
import Tabs, { Indicator } from '../tabs'
import Editor from '../editor'
import Browser from '../browser'
import { MediaQueryConsumer } from '../media-query'

import TabButton from './tab-button'

const DEMO_DATA = {
  'File-System Routing': require('./demos/file-system-routing').default,
  'Automatic Code Splitting': require('./demos/code-splitting').default,
  'Server Side Rendering': require('./demos/ssr').default,
  'Static Exporting': require('./demos/static-exporting').default,
  'More...': require('./demos/more').default,
}

export default () => {
  return (
    <MediaQueryConsumer>{({isMobile, isTablet}) => 
      <Container center dark wide>
        <Container center>
          <Tabs data={Object.keys(DEMO_DATA)}>{
            (onSelect, selectedId, selectedIndex) =>
              <div>
                <style jsx>{`
                  .demo-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 2rem 0;
                  }
                  .demo-body {
                  }
                  .demo-footer {
                    display: flex;
                    margin: 2rem 0;
                    align-items: flex-end;
                    justify-content: space-between;
                  }
                  :global(.is-mobile) .demo-header {
                    flex-wrap: wrap;
                  }
                  :global(.is-mobile) .demo-footer {
                    flex-direction: column;
                    align-items: center;
                  }
                  .note {
                    max-width: 620px;
                    text-align: left;
                  }
                  .note :global(p) {
                    margin-top: 0;
                  }
                  .indicator {
                    margin-top: 2rem;
                    white-space: nowrap;
                  }
                `}</style>
                <div className="demo-header">
                  {
                    Object.keys(DEMO_DATA).map(id => 
                      <TabButton
                        invert
                        className='tab'
                        key={`tab-${id}`}
                        isMobile={isMobile}
                        selected={selectedId === id}
                        onClick={() => onSelect(id)}
                      >
                        {id}
                      </TabButton>
                    )
                  }
                </div>
                <div className="demo-body row">
                  {isTablet && <div className="column">
                    <Tabs data={DEMO_DATA[selectedId].tabs}>{
                      (onSelect, _selectedId, selectedIndex) => {
                        let content = null
                        let data = DEMO_DATA[selectedId]
                        if (_selectedId === data.tabs[0]) {
                          content = data.type[0] === 'editor' ? <Editor data={data.editor1}/> : <Browser data={data.browser1}/>
                        } else {
                          content = data.type[1] === 'editor' ? <Editor data={data.editor2}/> : <Browser data={data.browser2}/>
                        }
                        return <div>
                          {content}
                          <br/>
                          <TabButton invert light isMobile={true} selected={_selectedId === data.tabs[0]} onClick={() => onSelect(data.tabs[0])}>{data.tabs[0]}</TabButton>
                          <TabButton invert light isMobile={true} selected={_selectedId === data.tabs[1]} onClick={() => onSelect(data.tabs[1])}>{data.tabs[1]}</TabButton>
                        </div>
                      }
                    }</Tabs></div>
                  }
                  {!isTablet && (() => {
                    let data = DEMO_DATA[selectedId]
                    if (!data.type.length) {
                      return null
                    }

                    let content1 = data.type[0] === 'editor' ? <Editor data={data.editor1}/> : <Browser data={data.browser1}/>
                    let content2 = data.type[1] === 'editor' ? <Editor data={data.editor2}/> : <Browser data={data.browser2}/>

                    return <>
                      <div className="column">
                        {content1}
                      </div>
                      <div className="column">
                        {content2}
                      </div>
                    </>
                  })()}
                </div>
                <div className="demo-footer">
                  <div className="note">
                    {DEMO_DATA[selectedId].note}
                  </div>
                  <div className="indicator">
                    {
                      Object.keys(DEMO_DATA).map(id => 
                        <Indicator
                          key={`indicator-${id}`}
                          selected={selectedId === id}
                          onClick={() => onSelect(id)}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
          }</Tabs>
        </Container>
      </Container>
    }</MediaQueryConsumer>
  )
}