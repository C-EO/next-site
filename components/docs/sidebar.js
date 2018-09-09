import { Fragment, Component } from 'react'
import { Code } from './text/code'
import _scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import slugify from '@sindresorhus/slugify'

const navElements = [
  "Setup",
  "Automatic Code Splitting",
  "CSS",
  "Static file serving (e.g.: images)",
  "Populating <head>",
  "Fetching data and component lifecycle",
  "Routing",
  "Prefetching Pages",
  "Custom server and routing",
  "Dynamic Import",
  "Custom <App>",
  "Custom <Document>",
  "Custom error handling",
  "Reusing the built-in error page",
  "Custom configuration",
  "Customizing webpack config",
  "Customizing babel config",
  "CDN support with Asset Prefix",
  "Production deployment",
  "Static HTML export",
  "Usage",
  "Limitation",
  "Multi Zones",
  "How to define a zone",
  "How to merge them",
  "Recipes",
  "FAQ",
  "Contributing"
]

function scrollIntoViewIfNeeded(elem) {
  const finalElement = findClosestScrollableElement(elem)
  return _scrollIntoViewIfNeeded(
    elem.parentElement,
    {
      behavior: 'smooth',
      scrollMode: 'if-needed',
      block: 'center',
      boundary: finalElement,
    },
  )
}

function findClosestScrollableElement(_elem) {
  const { parentNode } = _elem
  if (!parentNode) return null

  if (
    parentNode.scrollHeight > parentNode.clientHeight ||
    parentNode.scrollWidth > parentNode.clientWidth
  ) {
    return parentNode
  } else {
    return findClosestScrollableElement(parentNode)
  }
}

export class SidebarNavItem extends Component {
  constructor() {
    super()

    this.activeNavItem = null
  }

  componentDidMount() {
    this.scrollIntoViewIfNeeded()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isActive !== nextProps.isActive
  }

  componentDidUpdate() {
    this.scrollIntoViewIfNeeded()
  }

  scrollIntoViewIfNeeded() {
    if (this.props.isActive) {
      if (this.activeNavItem.scrollIntoViewIfNeeded) {
        this.activeNavItem.scrollIntoViewIfNeeded()
      } else {
        scrollIntoViewIfNeeded(this.activeNavItem)
      }
    }
  }

  render() {
    const {item, updateSelected, isActive} = this.props

    return (
      <li>
        <a 
          href={`#${slugify(item)}`} 
          onClick={updateSelected} 
          className={`${isActive ? 'active' : ''} f5`}
          ref={ref => (this.activeNavItem = ref)}
        >
          {item}
        </a>
        <style jsx>{`
          li {
            list-style: none;
          }
          li:last-of-type {
            padding-bottom: 2rem;
          }
          a {
            display: inline-block;
            color: inherit;
            padding: 6px 0;
          }
          a:hover {
            color: gray;
          }
          a.active {
            font-weight: 600;
            color: var(--theme-color);
          }
        `}</style>
      </li>
    )
  }
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="documentation__sidebar">
        <nav>
          <span className="documentation__sidebar-heading">Getting Started</span>
          <ul>
            {
              navElements.map((item, i) => (
                <SidebarNavItem 
                  key={i} 
                  item={item} 
                  updateSelected={() => 
                    this.props.updateSelected(`#${slugify(item)}`)
                  } 
                  isActive={this.props.currentSelection === `#${slugify(item)}`} />
              ))
            }
          </ul>
        </nav>

        <style jsx>{`
          .documentation__sidebar {
            width: 312px;
            flex: 0 0 auto;
            position: relative;
            padding-right: 3rem;
          }

          .documentation__sidebar nav {
            position: fixed;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            width: 18rem;
            padding: 2rem 1rem 0 0;
            height: calc(100vh - ${64 + 32}px);
          }

          .documentation__sidebar nav ul {
            margin: 0;
            padding: 0;
          }

          .documentation__sidebar-heading {
            color: #999999;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
        `}</style>
    </div>
    )
  }
}
