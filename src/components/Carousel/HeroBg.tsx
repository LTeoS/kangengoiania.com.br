import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface HeroBgProps {
  activeIndex: number
  bgMob: string
  bgDesk: string
  slideIndex: number
}

const HeroBg = (props: HeroBgProps) => {
  return (
    <AnimatePresence>
      {props.activeIndex === props.slideIndex && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <img
            src={props.bgMob}
            className="absolute left-[50%] top-[50%] max-w-[390px] translate-x-[-50%] translate-y-[-70%] transform md:hidden"
            alt="Kangen-Goiania-Hero-Background-Title"
          />
          <img
            src={props.bgDesk}
            className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-70%] transform md:flex md:max-w-[768px] lg:max-w-[1350px]"
            alt="Kangen-Goiania-Hero-Background-Title"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HeroBg
