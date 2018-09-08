import Router, { withRouter } from 'next/router'
import { Component } from 'react'

import Page from '../components/new/page'
import Screen from '../components/new/screen'
import Header from '../components/new/header'
import Footer from '../components/new/footer'
import Navbar from '../components/new/navbar'
import Notification from '../components/new/notification'
import Tabs from '../components/new/tabs'

import Title from '../components/new/showcase/title'
import Grid from '../components/new/showcase/grid'
import List from '../components/new/showcase/list'
import Filter from '../components/new/showcase/filter'
import SiteDetail from '../components/new/showcase/site-detail'

import { categories, mapping } from '../showcase-manifest'

const HEADER_HEIGHT = 16 * 12

export default withRouter(class extends Component {
  render () {
    const { router } = this.props
    const item = router.query.item

    return <Page>
      <Header height={0} zIndex={1001} background='white' defaultActive>
        <Navbar/>
      </Header>
      <SiteDetail siteData={mapping[item]}/>
      <Tabs data={categories}>{
        (onSelect, selectedId, selectedIndex) => <>
          <Header height={HEADER_HEIGHT + 64 + 32} distance={HEADER_HEIGHT} offset={-HEADER_HEIGHT} shadow>
            <Title height={HEADER_HEIGHT + 64}/>
            <Filter onSelect={onSelect} selectedId={selectedId}/>
          </Header>
          <List/>
        </>
      }</Tabs>
      <Footer/>
    </Page>
  }
})
