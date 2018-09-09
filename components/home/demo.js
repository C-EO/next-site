import Logo from '../logo'
import Container from '../container'
import Tabs, { Indicator } from '../tabs'
import Editor from '../editor'
import Browser from '../browser'
import { MediaQueryConsumer } from '../media-query'

import TabButton from './tabButton'

const DEMO_DATA = {
  'File-System Routing': require('./demos/file-system-routing').default,
  'Automatic Code Splitting': require('./demos/file-system-routing').default,
  'Server Side Rendering': require('./demos/file-system-routing').default,
  'Zones': require('./demos/file-system-routing').default,
  'More...': require('./demos/file-system-routing').default,
}

export default () => {
  return (
    <MediaQueryConsumer>{({isMobile}) => 
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
                    max-width: 480px;
                    text-align: left;
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
                  {isMobile && <div className="column">
                    <Tabs data={['editor', 'browser']}>{
                      (onSelect, _selectedId, selectedIndex) => {
                        let content = null
                        if (_selectedId === 'editor') {
                          content = <Editor data={DEMO_DATA[selectedId]}/>
                        } else {
                          content = <Browser data={DEMO_DATA[selectedId]}/>
                        }
                        return <div>
                          {content}
                          <br/>
                          <TabButton light isMobile={true} selected={_selectedId === 'editor'} onClick={() => onSelect('editor')}>Code</TabButton>
                          <TabButton light isMobile={true} selected={_selectedId === 'browser'} onClick={() => onSelect('browser')}>Website</TabButton>
                        </div>
                      }
                    }</Tabs></div>
                  }
                  {!isMobile && <>
                    <div className="column">
                      <Editor data={DEMO_DATA[selectedId]}/>
                    </div>
                    <div className="column">
                      <Browser data={DEMO_DATA[selectedId]}/>
                    </div>
                  </>}
                </div>
                <div className="demo-footer">
                  <div className="note">
                    <p>Next will serve each file in <code>`/pages`</code> under a pathname matching the filename.</p>
                    <p>For example, <code>`/pages/some-file.js`</code> is served at <code>`site.com/some-file`</code>.</p>
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