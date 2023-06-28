import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'
import state from '../../store'

const Info = (props: { content: string; open: boolean }) => {
  return (
    <AnimatePresence>
      {props.open && (
        <>
          <motion.div
            className="flex h-[266px] items-center justify-center text-center lg:w-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="w-[80%]">{props.content}</p>
          </motion.div>
          <AiFillCloseCircle
            onClick={() => {
              state.show = true
              state.filterAction = false
              state.displayAction = false
              state.enhancerAction = false
              state.plateAction = false
            }}
            className="absolute right-[20px] top-[20px] scale-150 fill-[var(--color-highlight)]"
          />
        </>
      )}
      `
    </AnimatePresence>
  )
}

export default Info
