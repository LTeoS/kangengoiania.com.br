import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Features from './Features'
import Specs from './Specs'
import Gallery from './Gallery'
import { ProductProps } from '../../types'
import { useSnapshot } from 'valtio'
import state from '../../store'

const Product = (props: ProductProps) => {
  const snap = useSnapshot(state)
  const ref = useRef<HTMLDivElement>(null)

  const [device, setDevice] = useState('mobile')

  useEffect(() => {
    window.innerWidth >= 640 && window.innerWidth < 1024 && setDevice('tablet')
    window.innerWidth >= 1024 && setDevice('desktop')
  }, [])

  const variants = {
    hidden: {
      height: device === 'mobile' ? 425 : device === 'tablet' ? 540 : 600,
    },
    shown: { height: 'auto' },
  }

  const titleVariantsMobile = {
    hidden: { translateY: 0 },
    shown: { translateY: 430 },
  }

  const titleVariantsTablet = {
    hidden: { translateY: device === 'tablet' ? 152 : 224 },
    shown: { translateY: 0 },
  }

  useEffect(() => {
    snap.showProduct === props.id &&
      ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [snap.showProduct, props.id])

  return (
    <motion.div
      ref={ref}
      className="relative h-[420px] w-full items-center overflow-hidden md:h-[600px] lg:my-[32px] lg:opacity-70 lg:hover:opacity-100 lg:active:opacity-100"
      animate={snap.showProduct === props.id ? 'shown' : 'hidden'}
      variants={variants}
    >
      <AnimatePresence>
        {snap.showProduct === props.id && (
          <motion.div
            initial={{
              translateX:
                device === 'mobile' ? 120 : device === 'tablet' ? 240 : 360,
            }}
            animate={{ translateX: 0 }}
            exit={{
              translateX:
                device === 'mobile' ? 120 : device === 'tablet' ? 240 : 360,
            }}
            onClick={() => (state.showProduct = '')}
            className="absolute right-0 top-0 z-10 w-[120px] border-b-2 border-b-[var(--color-highlight)] uppercase text-[12px] lg:opacity-40 lg:hover:opacity-100 active:opacity-100 md:w-[240px] lg:w-[360px] lg:text-[14.61px]"
          >
            voltar
          </motion.div>
        )}
      </AnimatePresence>
      <div className="z-[-1] flex w-full flex-col flex-nowrap items-center">
        <div className="flex w-full flex-col items-center">
          <div
            onClick={() => {
              state.showProduct = props.id
            }}
            className="relative flex w-full flex-col items-start pt-[64px] md:max-w-[1049px] md:flex-row md:justify-center md:pt-0 lg:justify-start "
          >
            <img
              className="hidden max-w-[310px] cursor-pointer md:flex md:max-w-[400px] md:flex-1 lg:max-w-[500px]"
              onClick={() => {
                state.showProduct = ''
                setTimeout(() => {
                  ref.current?.scrollIntoView({ behavior: 'smooth' })
                }, 300)
              }}
              src={props.image}
              alt="Kangen-Goiania-Product"
            />

            <div className="flex w-full flex-col items-center lg:items-start lg:px-[24px] lg:gap-[32px]">
              <motion.div
                className="absolute top-0 md:static "
                animate={snap.showProduct === props.id ? 'shown' : 'hidden'}
                transition={{ duration: 0.15 }}
                variants={
                  device === 'mobile'
                    ? titleVariantsMobile
                    : titleVariantsTablet
                }
              >
                <img
                  className="max-w-[240px] cursor-pointer lg:max-w-[400px]"
                  src={props.model}
                  alt="Kangen-Goiania-Product-Model"
                />
              </motion.div>
              <img
                className="max-w-[280px] cursor-pointer md:hidden md:max-w-[400px] lg:max-w-[611px]"
                onClick={() => {
                  state.showProduct = ''
                  setTimeout(() => {
                    ref.current?.scrollIntoView({ behavior: 'smooth' })
                  }, 300)
                }}
                src={props.image}
                alt="Kangen-Goiania-Product"
              />

              <AnimatePresence>
                {snap.showProduct === props.id && (
                  <div className="flex flex-col items-center md:flex-1">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-[96px] flex w-full flex-col items-center gap-[32px] md:mt-[16px] lg:gap-[72px]"
                    >
                      <p className="mt-[16px] max-w-[300px] text-center text-[14.61px] md:max-w-[300px] lg:max-w-[400px] lg:text-[18px] lg:text-left">
                        {props.intro}
                      </p>
                      <button className="flex h-[64px] w-[283px] flex-row items-center justify-center rounded-[10px] bg-[var(--color-highlight)] text-[16px] font-medium uppercase tracking-widest text-white hover:opacity-60 lg:h-[70px] lg:w-[400px] lg:text-[20px] shadow-button">
                        <a
                          target="a_blank"
                          href="https://wa.me/6281175808?text=Olá!%20Tenho%20interesse%20em%20ser%20Kangen!"
                        >
                          Saiba Mais
                        </a>
                      </button>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <AnimatePresence>
            {snap.showProduct === props.id && (
              <>
                <div className="flex w-full flex-col items-center md:flex-row md:max-w-[1049px] md:justify-center md:gap-[48px] md:py-[24px] lg:gap-[80px]">
                  <motion.div className="flex flex-col py-[56px]">
                    <h1 className="max-w-[325px] text-center text-[24px] italic lg:max-w-[515px] lg:text-[40px]">
                      {props.featuresHeader}
                      <strong>{props.featuresHeaderSpan}</strong>
                    </h1>
                  </motion.div>
                  <Features {...props.features} />
                </div>
                <div className="mb-[32px] mt-[64px] flex flex-col items-center gap-[48px] pb-[32px] md:mt-[32px] md:flex-row md:justify-center">
                  <Specs {...props.specs} />
                  <Gallery {...props.gallery} />
                </div>
                <button className="flex h-[64px] w-[283px] flex-row items-center justify-center rounded-[10px] bg-[var(--color-highlight)] text-[16px] font-medium uppercase tracking-widest text-white hover:opacity-60 lg:h-[70px] lg:w-[400px] lg:text-[20px] shadow-button">
                  <a
                    target="a_blank"
                    href="https://wa.me/6281175808?text=Olá!%20Tenho%20interesse%20em%20ser%20Kangen!"
                  >
                    Saiba Mais
                  </a>
                </button>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default Product
