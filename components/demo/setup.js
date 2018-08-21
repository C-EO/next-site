import { Keyframes, Frame } from 'react-keyframes'
import { Terminal, Prompt, Caret } from './terminal'

export default () =>
  <div>
    <Terminal>
      <Keyframes delay={1000} loop>
        {(() => {
          const str = 'npm install --save next react react-dom'
          const frames = []
          for (let i = 0; i < str.length; ++i) {
            let duration = str[i - 1] === ' ' ? 300 : ~~(Math.random() * 100)
            frames.push(<Frame duration={duration} key={`len-${i}`}>
              <code><Prompt/>{str.slice(0, i)}<Caret/></code>
            </Frame>)
          }
          return frames
        })()}
      </Keyframes>
    </Terminal>
  </div>