import { proxy } from 'valtio'

const state = proxy({
  filterAction: false,
  displayAction: false,
  enhancerAction: false,
  plateAction: false,
  show: true,
  showProduct: '',
  isAnimationActive: false,
  activeAction: '',
})

export default state
