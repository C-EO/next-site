import Code from './code'
import withBrowser from './browser'

const IndexFile = () => <Code>{
`import Link from 'next/link'

export default () => (
  <div>
    <p>Hello Next.js</p>
    <Link href='/about'><a>About</a></Link>
  </div>
)
`}</Code>

const AboutFile = () => <Code>{
`import Link from 'next/link'

export default () => (
  <div>
    <p>This is the about page</p>
    <Link href='/'><a>Go home</a></Link>
  </div>
)
`}</Code>

const IndexPage = withBrowser(({A}) => 
  <div>
    <p>Hello Next.js</p>
    <A tab='http://localhost:3000/about'>About</A>
  </div>
)

const AboutPage = withBrowser(({A}) => 
  <div>
    <p>This is the about page</p>
    <A tab='http://localhost:3000'>Go home</A>
  </div>
)

export default {
  editorTabs: ['pages/index.js', 'pages/about.js'],
  editorMapping: {
    'pages/index.js': IndexFile,
    'pages/about.js': AboutFile
  },
  browserTabs: ['http://localhost:3000', 'http://localhost:3000/about'],
  browserMapping: {
    'http://localhost:3000': IndexPage,
    'http://localhost:3000/about': AboutPage
  },
}
