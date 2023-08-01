import { motion, AnimatePresence } from 'framer-motion'

const Info = (props: { content: string; open: boolean }) => {
  return (
    <AnimatePresence>
      {props.open && (
        <>
          <motion.div
            className="flex h-[266px] px-[16px] font-extralight max-w-[320px] lg:max-w-[500px] lg:h-[400px] items-center justify-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="md:text-[14.61px] text-[12px]">{props.content}</p>
          </motion.div>
        </>
      )}
      `
    </AnimatePresence>
  )
}

export default Info
