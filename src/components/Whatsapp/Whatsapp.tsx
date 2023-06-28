/* eslint-disable import/no-absolute-path */
import whatsapp from '../../assets/icons/whatsapp.svg'
import { motion, useDragControls } from 'framer-motion'

const Whatsapp = () => {
  const dragControls = useDragControls()

  const startDrag = (event: any) => {
    dragControls.start(event)
  }

  return (
    <motion.a
      onPointerDown={startDrag}
      drag={true}
      dragControls={dragControls}
      whileHover={{ width: 240 }}
      style={{ touchAction: 'none' }}
      className="fixed bottom-[60px] left-[60%] z-50 flex h-[64px] w-[64px] max-w-[150px] md:h-[90px] items-center justify-start gap-[8px] overflow-hidden rounded-2xl border-2 border-[var(--color-highlight)] p-[8px] glass-background md:bottom-[80px] md:left-[70%] md:h-[80px] md:w-[200px] md:max-w-[200px] md:gap-[16px] md:p-[16px] lg:bottom-[100px] lg:left-[80%] lg:h-[96px] lg:w-[96px] lg:max-w-[240px]"
      target="a_blank"
      href="https://wa.me/6281175808?text=Olá!%20Tenho%20interesse%20em%20ser%20Kangen!"
    >
      <img
        src={whatsapp}
        className="flex w-full max-w-[44px] lg:max-w-[64px]"
        alt="Kangen-Goiania-Whatsapp"
      />
      <div className="flex min-w-[80px] items-center md:h-full md:min-w-[100px] lg:min-w-[140px]">
        <h1 className="h-full text-center text-[14px] font-medium uppercase md:text-[18px] lg:text-[20px]">
          venha ser kangen!
        </h1>
      </div>
    </motion.a>
  )
}

export default Whatsapp
