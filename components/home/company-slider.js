import BackgroundSlider from '../background-slider'

import OpenCollective from '../icons/companies/opencollective'
import Eaze from '../icons/companies/eaze'
import MagicLeap from '../icons/companies/magic-leap'
import Trulia from '../icons/companies/trulia'
import MozillaVR from '../icons/companies/mozilla-vr'
import Netflix from '../icons/companies/netflix'
import GitHub from '../icons/companies/github'
import Scale from '../icons/companies/scale'
import Auth0 from '../icons/companies/auth0'
import Ticketmaster from '../icons/companies/ticketmaster'

export default () => (
  <div className="company-slider">
    <BackgroundSlider duration={40}>
      <div className="company-logos-container">
        <div><OpenCollective /></div>
        <div><Eaze /></div>
        <div><MagicLeap /></div>
        <div><Trulia /></div>
        <div><MozillaVR /></div>
        <div><Netflix /></div>
        <div><GitHub /></div>
        <div><Scale /></div>
        <div><Auth0 /></div>
        <div><Ticketmaster /></div>
      </div>
    </BackgroundSlider>
    <div style={{ marginBottom: '1rem' }}/>
    <BackgroundSlider duration={50}>
      <div className="company-logos-container">
        <div><Ticketmaster /></div>
        <div><OpenCollective /></div>
        <div><Netflix /></div>
        <div><Eaze /></div>
        <div><GitHub /></div>
        <div><MagicLeap /></div>
        <div><Scale /></div>
        <div><Trulia /></div>
        <div><MozillaVR /></div>
        <div><Auth0 /></div>
      </div>
    </BackgroundSlider>
    
    <style jsx>{`
      .company-slider {
        margin-top: 2rem;
        margin-bottom: 5rem;
      }
      .company-logos-container {
        white-space: nowrap;
      }
      .company-logos-container > div {
        display: inline-block;
        padding: 0 2rem;
        vertical-align: middle;
        opacity: .1;
        outline: none;
        cursor: default;
        transition: opacity .5s ease;
      }
      .company-logos-container > div:hover {
        opacity: .8;
      }
    `}</style>
  </div>
)
