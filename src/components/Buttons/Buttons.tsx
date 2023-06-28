/* eslint-disable import/no-absolute-path */
import Button from './Button'
import { useSnapshot } from 'valtio'
import state from '../../store'
import { motion } from 'framer-motion'

import filter from '../../assets/icons/buttons/filter.svg'
import display from '../../assets/icons/buttons/display.svg'
import bottle from '../../assets/icons/buttons/bottle.svg'
import plates from '../../assets/icons/buttons/plates.svg'

const Buttons = () => {
  const snap = useSnapshot(state)

  const variants = {
    isShown: { opacity: 1 },
    isHidden: { opacity: 0.3 },
  }

  return (
    <motion.div
      className="flex w-full flex-row justify-center gap-[16px] md:gap-[24px] lg:h-[500px] lg:max-w-[260px] lg:flex-col lg:gap-[64px]"
      initial={{ opacity: 0 }}
      animate={snap.show ? 'isShown' : 'isHidden'}
      variants={variants}
    >
      <div className="flex flex-col gap-[16px] md:flex-row md:gap-[24px] lg:flex-col lg:gap-[64px]">
        <Button
          title={'Filtro'}
          thumb={filter}
          onClick={
            snap.show
              ? () => {
                  state.filterAction = true
                  state.show = false
                }
              : () => null
          }
        />
        <Button
          title={'Display'}
          thumb={display}
          onClick={
            snap.show
              ? () => {
                  state.displayAction = true
                  state.show = false
                }
              : () => null
          }
        />
      </div>
      <div className="flex flex-col gap-[16px] md:flex-row md:gap-[24px] lg:flex-col lg:gap-[64px]">
        <Button
          title={'Enhancer'}
          thumb={bottle}
          onClick={
            snap.show
              ? () => {
                  state.enhancerAction = true
                  state.show = false
                }
              : () => null
          }
        />
        <Button
          title={'Placas'}
          thumb={plates}
          onClick={
            snap.show
              ? () => {
                  state.plateAction = true
                  state.show = false
                }
              : () => null
          }
        />
      </div>
    </motion.div>
  )
}

export default Buttons
