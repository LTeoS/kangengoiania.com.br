import { motion, AnimatePresence } from 'framer-motion'

const Info = (props: { content: string; open: boolean }) => {
  return (
    <AnimatePresence>
      {props.open && (
        <>
          <motion.div
            className="flex h-[266px] font-extralight max-w-[320px] lg:translate-x-[-50px] lg:max-w-[500px] lg:h-[400px] items-center justify-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="lg:max-w-[420px] lg:text-[20px]">{props.content}</p>
          </motion.div>
        </>
      )}
      `
    </AnimatePresence>
  )
}

export default Info
