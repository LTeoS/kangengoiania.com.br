'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface TapeProps {
  activeIndex: number
  line: string
  model: string
  slideIndex: number
}

const Tape = (props: TapeProps) => {
  return (
    <AnimatePresence mode="wait">
      {props.activeIndex === props.slideIndex && (
        <motion.h1
          initial={{ translateY: 20 }}
          animate={{ translateY: 0 }}
          className="text-[16px] text-white md:text-[20px]"
        >
          {props.line}
          <strong>{props.model}</strong>
        </motion.h1>
      )}
    </AnimatePresence>
  )
}

export default Tape
