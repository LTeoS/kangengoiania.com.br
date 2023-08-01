/* eslint-disable import/no-absolute-path */
import Button from './Button'
import { useSnapshot } from 'valtio'
import state from '../../store'

import filter from '../../assets/icons/buttons/filter.svg'
import display from '../../assets/icons/buttons/display.svg'
import bottle from '../../assets/icons/buttons/bottle.svg'
import plates from '../../assets/icons/buttons/plates.svg'

const Buttons = () => {
  const snap = useSnapshot(state)

  return (
    <div className="flex w-full md:max-w-[700px] flex-row justify-center gap-[16px] lg:h-[364px] lg:justify-between lg:max-w-[206.98px] lg:flex-col">
      <div className="flex flex-col gap-[16px] md:flex-1 md:flex-row lg:flex-col lg:justify-around">
        <Button
          title={'Filtro'}
          thumb={filter}
          onClick={() => {
            if (snap.filterAction) {
              state.filterAction = false
              state.isAnimationActive = false
              state.show = true
              state.activeAction = ''
              return
            }
            state.displayAction = false
            state.enhancerAction = false
            state.plateAction = false
            snap.isAnimationActive
              ? setTimeout(() => {
                  state.filterAction = true
                }, 1000)
              : (state.filterAction = true)
            state.activeAction = 'Filtro'
            state.isAnimationActive = true
            state.show = false
          }}
        />
        <Button
          title={'Display'}
          thumb={display}
          onClick={() => {
            if (snap.displayAction) {
              state.displayAction = false
              state.isAnimationActive = false
              state.show = true
              state.activeAction = ''
              return
            }
            state.filterAction = false
            state.enhancerAction = false
            state.plateAction = false
            snap.isAnimationActive
              ? setTimeout(() => {
                  state.displayAction = true
                }, 1000)
              : (state.displayAction = true)
            state.activeAction = 'Display'
            state.isAnimationActive = true
            state.show = false
          }}
        />
      </div>
      <div className="flex flex-col md:flex-1 gap-[16px] md:flex-row lg:flex-col lg:justify-around">
        <Button
          title={'Enhancer'}
          thumb={bottle}
          onClick={() => {
            if (snap.enhancerAction) {
              state.enhancerAction = false
              state.isAnimationActive = false
              state.show = true
              state.activeAction = ''
              return
            }
            state.filterAction = false
            state.displayAction = false
            state.plateAction = false
            snap.isAnimationActive
              ? setTimeout(() => {
                  state.enhancerAction = true
                }, 1000)
              : (state.enhancerAction = true)
            state.activeAction = 'Enhancer'
            state.isAnimationActive = true
            state.show = false
          }}
        />
        <Button
          title={'Placas'}
          thumb={plates}
          onClick={() => {
            if (snap.plateAction) {
              state.plateAction = false
              state.isAnimationActive = false
              state.show = true
              state.activeAction = ''
              return
            }
            state.filterAction = false
            state.displayAction = false
            state.enhancerAction = false
            snap.isAnimationActive
              ? setTimeout(() => {
                  state.plateAction = true
                }, 1000)
              : (state.plateAction = true)
            state.activeAction = 'Placas'
            state.isAnimationActive = true
            state.show = false
          }}
        />
      </div>
    </div>
  )
}

export default Buttons
