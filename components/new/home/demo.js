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
      <Container center padding>
        <Tabs data={Object.keys(DEMO_DATA)}>{
          (onSelect, selectedId, selectedIndex) =>
            <div>
              <style jsx>{`
                .tab {

                }
                .demo-container {
                  display: flex;
                  justify-content: space-between;
                }
              `}</style>
              <div>
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
              <div className="demo-container">
                <Editor>
                  [Code {selectedId}]
                </Editor>
                <Browser>
                  [Webpage {selectedId}]
                </Browser>
              </div>
              <div>
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
        }</Tabs>
      </Container>
    </Container>
  )
}