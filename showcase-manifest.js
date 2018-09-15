const categories = ['All', 'Finance', 'Dev', 'Creative', 'Entertainment']

const sortOrder = [
  "marvel",
  "nike",
  "invision",
  "magic-leap",
  "mozilla-vr",
  "netflix-jobs",
  "hulu",
  "boosted-boards",
  "elton-john",
  "auth0-careers",
  "scale",
  "open-collective",
  "eaze",
  "hyper",
  "zeit",
  "a24",
  "avocode",
  "iota-data-market",
  "expo",
  "sumup",
  "hashnode",
  "design-better",
  "weedmaps",
  "sanity",

  //

  // "marvel",
  // "nike",
  // "invision",
  // "magic-leap",
  // "mozilla-vr",
  // "netflix-jobs",
  // "hulu",
  // "boosted-boards",
  // "elton-john",
  // "auth0-careers",
  // "scale",
  // "open-collective",
  // "eaze",
  // "hyper",
  // "zeit",
  // "a24",
  // "avocode",
  // "iota-data-market",
  // "expo",
  // "sumup",
  // "hashnode",
  // "design-better",
  // "weedmaps",
  // "sanity",
]

const mapping = {
  "magic-leap": {
    "title": "Magic Leap",
    "link": "https://magicleap.com",
    "src": "/static/images/showcases/showcases-00.jpg",
    "width": 1280,
    "height": 734,
    "internalUrl": "magic-leap",
    "highlighted": true,
    "tags": ['creative']
  },
  "marvel": {
    "title": "Marvel",
    "link": "https://www.marvel.com/",
    "src": "/static/images/showcases/marvel.jpg",
    "width": 3840,
    "height": 2204,
    "internalUrl": "marvel",
    "tags": ['entertainment']
  },
  "nike": {
    "title": "Nike",
    "link": "https://www.nike.com/help",
    "src": "/static/images/showcases/nike.jpg",
    "width": 3840,
    "height": 2206,
    "internalUrl": "nike"
  },
  "boosted-boards": {
    "title": "Boosted Boards",
    "link": "http://boostedboards.com/",
    "src": "/static/images/showcases/boosted.jpg",
    "width": 3840,
    "height": 2206,
    "internalUrl": "boosted-boards"
  },
  "eaze": {
    "title": "Eaze",
    "link": "https://www.eaze.com",
    "src": "/static/images/showcases/showcases-01.jpg",
    "width": 3832,
    "height": 2198,
    "internalUrl": "eaze"
  },
  "netflix-jobs": {
    "title": "Netflix Jobs",
    "link": "https://jobs.netflix.com",
    "src": "/static/images/showcases/showcases-02.jpg",
    "width": 3836,
    "height": 2200,
    "internalUrl": "netflix-jobs",
    "tags": ['entertainment']
  },
  "auth0-careers": {
    "title": "Auth0 Careers",
    "link": "https://auth0.com/careers",
    "src": "/static/images/showcases/showcases-03.jpg",
    "width": 3828,
    "height": 2184,
    "internalUrl": "auth0-careers",
    "tags": ['dev']
  },
  "scale": {
    "title": "Scale",
    "link": "https://scaleapi.com",
    "src": "/static/images/showcases/showcases-04.jpg",
    "width": 3836,
    "height": 2198,
    "internalUrl": "scale",
    "tags": ['dev']
  },
  "elton-john": {
    "title": "Elton John",
    "link": "https://www.eltonjohn.com",
    "src": "/static/images/showcases/showcases-05.jpg",
    "width": 3840,
    "height": 2206,
    "internalUrl": "elton-john",
    "tags": ['creative']
  },
  "open-collective": {
    "title": "Open Collective",
    "link": "https://opencollective.com",
    "src": "/static/images/showcases/showcases-06.jpg",
    "width": 3836,
    "height": 2206,
    "internalUrl": "open-collective",
    "tags": ['dev']
  },
  "a24": {
    "title": "A24",
    "link": "https://www.a24.com",
    "src": "/static/images/showcases/showcases-07.jpg",
    "width": 3836,
    "height": 2200,
    "internalUrl": "a24"
  },
  "hyper": {
    "title": "Hyper",
    "link": "https://hyper.is",
    "src": "/static/images/showcases/showcases-08.jpg",
    "width": 3828,
    "height": 2198,
    "internalUrl": "hyper",
    "tags": ["dev"]
  },
  "zeit": {
    "title": "ZEIT",
    "link": "https://zeit.co",
    "src": "/static/images/showcases/showcases-09.jpg",
    "width": 3836,
    "height": 2198,
    "internalUrl": "zeit",
    "tags": ["dev"]
  },
  "mozilla-vr": {
    "title": "Mozilla VR",
    "link": "https://mixedreality.mozilla.org",
    "src": "/static/images/showcases/showcases-10.jpg",
    "width": 3830,
    "height": 2196,
    "internalUrl": "mozilla-vr",
    "tags": ['dev', 'creative']
  },
  "avocode": {
    "title": "Avocode",
    "link": "https://avocode.com",
    "src": "/static/images/showcases/avocode.jpg",
    "width": 3836,
    "height": 2204,
    "internalUrl": "avocode"
  },
  "iota-data-market": {
    "title": "IOTA Data Market",
    "link": "https://data.iota.org",
    "src": "/static/images/showcases/showcases-12.jpg",
    "width": 3832,
    "height": 2200,
    "internalUrl": "iota-data-market",
    "tags": ['dev']
  },
  "expo": {
    "title": "Expo",
    "link": "https://expo.io",
    "src": "/static/images/showcases/showcases-13.jpg",
    "width": 3830,
    "height": 2196,
    "internalUrl": "expo",
    "tags": ['dev']
  },
  "sumup": {
    "title": "Sumup",
    "link": "https://sumup.com",
    "src": "/static/images/showcases/showcases-14.jpg",
    "width": 3830,
    "height": 2194,
    "internalUrl": "sumup",
    "tags": ['finance']
  },
  "hashnode": {
    "title": "Hashnode",
    "link": "https://hashnode.com",
    "src": "/static/images/showcases/showcases-15.jpg",
    "width": 3830,
    "height": 2194,
    "internalUrl": "hashnode",
    "tags": ["dev"]
  },
  "invision": {
    "title": "Invision",
    "link": "https://www.invisionapp.com/",
    "src": "/static/images/showcases/showcases-16.jpg",
    "width": 3830,
    "height": 2200,
    "internalUrl": "invision",
    "tags": ["dev", "creative"]
  },
  "hulu": {
    "title": "Hulu",
    "link": "https://www.hulu.com",
    "src": "/static/images/showcases/showcases-17.jpg",
    "width": 3832,
    "height": 2198,
    "internalUrl": "hulu",
    "tags": ['entertainment']
  },
  "design-better": {
    "title": "DesignBetter.co",
    "link": "https://www.designbetter.co/",
    "src": "/static/images/showcases/showcases-18.jpg",
    "width": 3832,
    "height": 2194,
    "internalUrl": "design-better",
    "tags": ["dev", "creative"]
  },
  "weedmaps": {
    "title": "Weedmaps",
    "link": "https://weedmaps.com",
    "src": "/static/images/showcases/showcases-19.jpg",
    "width": 1920,
    "height": 1081,
    "internalUrl": "weedmaps"
  },
  "sanity": {
    "title": "Sanity.io",
    "link": "https://sanity.io",
    "src": "/static/images/showcases/showcases-20.jpg",
    "width": 3840,
    "height": 2162,
    "internalUrl": "sanity"
  }
}

module.exports = {
  categories,
  sortOrder,
  mapping
}
