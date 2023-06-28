import { proxy } from 'valtio'

const state = proxy({
  filterAction: false,
  displayAction: false,
  enhancerAction: false,
  plateAction: false,
  show: true,
  showK8: false,
  showSD: false,
  showWave: true,
  showProduct: '',
})

export default state
