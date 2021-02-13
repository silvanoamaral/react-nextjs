import base from './base'

const primary = '#3498DB'
const secondary = '#F26723'

export default Object.assign({}, base, {
  mainLogo: 'logo.png',
  colors: Object.assign({}, base.colors, {
    primary,
    secondary,
    background: '#fff',
    text: '#505050'
  }),
})
