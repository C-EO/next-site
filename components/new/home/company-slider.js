import Slider from 'react-slick'
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

const settings = {
  customPaging: () => null,
  dots: false,
  infinite: true,
  cssEase: "linear",
  variableWidth: true,
  nextArrow: () => null,
  prevArrow: () => null,
  pauseOnFocus: false,
  pauseOnHover: false,
  focusOnSelect: false,
  swipeToSlide: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  speed: 12000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false
};

export default () => (
  // Need more logos!
  // TODO: get rid of react-slick and use pure CSS animation for this
  <div className="company-slider">
    <Slider {...settings} speed={10000} >
      <div style={{width:388}}><OpenCollective /></div>
      <div style={{width:140}}><Eaze /></div>
      <div style={{width:176}}><MagicLeap /></div>
      <div style={{width:180}}><Trulia /></div>
      <div style={{width:238}}><MozillaVR /></div>
      <div style={{width:172}}><Netflix /></div>
      <div style={{width:172}}><GitHub /></div>
      <div style={{width:155}}><Scale /></div>
      <div style={{width:181}}><Auth0 /></div>
      <div style={{width:285}}><Ticketmaster /></div>
    </Slider>
    <br/>
    <Slider {...settings}>
      <div style={{width:172}}><Netflix /></div>
      <div style={{width:172}}><GitHub /></div>
      <div style={{width:155}}><Scale /></div>
      <div style={{width:181}}><Auth0 /></div>
      <div style={{width:285}}><Ticketmaster /></div>
      <div style={{width:388}}><OpenCollective /></div>
      <div style={{width:140}}><Eaze /></div>
      <div style={{width:176}}><MagicLeap /></div>
      <div style={{width:180}}><Trulia /></div>
      <div style={{width:238}}><MozillaVR /></div>
    </Slider>
    <style jsx>{`
      .company-slider {
        margin-top: 2rem;
        margin-bottom: 5rem;
      }
      .company-slider div {
        cursor: default;
        outline: none;
        opacity: .1;
        text-align: center;
        transition: opacity .5s ease;
      }
      .company-slider div:hover {
        opacity: .8;
      }
    `}</style>
  </div>
)
