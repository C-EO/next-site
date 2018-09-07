import Logo from '../logo'
import Container from '../container'
import Tabs, { Indicator } from '../tabs'
import Editor from '../editor'
import Browser from '../browser'

import TabButton from './tabButton'

const DEMO_DATA = {
  'File-System Routing': <div>hi</div>,
  'Automatic Code Splitting': <div>hello</div>,
  'Server Side Rendering': <div>hoo</div>,
  'Zones': <div>hzoo</div>,
  'More...': <div>More</div>
}

export default () => {
  return (
    <Container center dark wide>
      <Container center>
        <Tabs data={Object.keys(DEMO_DATA)}>{
          (onSelect, selectedId, selectedIndex) =>
            <div>
              <style jsx>{`
                .demo-header {
                  display: flex;
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
              `}</style>
              <div className="demo-header">
                {
                  Object.keys(DEMO_DATA).map(id => 
                    <TabButton
                      className='tab'
                      key={`tab-${id}`}
                      selected={selectedId === id}
                      onClick={() => onSelect(id)}
                    >
                      {id}
                    </TabButton>
                  )
                }
              </div>
              <div className="demo-body row">
                <div className="column">
                  <Editor>
                    [Code {selectedId}]
                  </Editor>
                </div>
                <div className="column">
                  <Browser>
                    [Webpage {selectedId}]
                  </Browser>
                </div>
              </div>
              <div className="demo-footer">
                <div className="note">
                  <p>Next will serve each file in <code>`/pages`</code> under a pathname matching the filename.</p>
                </div>
                <div className="indicator">
                  {
                    Object.keys(DEMO_DATA).map(id => 
                      <Indicator
                        key={`indicator-${id}`}
                        selected={selectedId === id}
                      />
                    )
                  }
                </div>
              </div>
            </div>
        }</Tabs>
      </Container>
    </Container>
  )
}