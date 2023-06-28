/* eslint-disable import/no-absolute-path */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import bgSm from '../../assets/images/footer/map/bgSm.svg'
import bgDesk from '../../assets/images/footer/map/bgDesk.svg'
import logo from '../../assets/images/footer/map/logo.svg'
import map from '../../assets/images/footer/map/map.svg'

const Map = () => {
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    if (window.innerWidth > 400) {
      setMobile(false)
    }
  }, [])

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[72px] overflow-hidden py-[136px] md:gap-[80px] md:py-[180px] lg:gap-[112px] lg:py-[200px] lg:pb-[400px]">
      <img
        src={bgSm}
        alt="Kangen-Goiania-Background"
        className="absolute top-0 z-[-1] max-w-[750px] md:max-w-[1200px] lg:hidden"
      />
      <img
        src={bgDesk}
        alt="Kangen-Goiania-Background"
        className="absolute top-0 z-[-1] hidden lg:block lg:max-w-[2000px]"
      />
      <div className="flex w-full flex-1 flex-col items-center">
        <img
          src={logo}
          alt="Kangen-Goiania-Map-logo"
          className="max-w-[230px] md:max-w-[300px] lg:max-w-[600px]"
        />
        <h1 className="text-[24px] font-light text-white md:text-[30px] lg:text-[40px]">
          pelo mundo
        </h1>
      </div>
      <motion.div
        initial={{ translateY: mobile ? 290 : 500, scale: 1.5, opacity: 0.5 }}
        whileInView={{ translateY: 0, scale: 1, opacity: 1 }}
      >
        <img
          src={map}
          alt="Kangen-Goiania-Map"
          className="max-w-[450px] md:max-w-[900px] lg:max-w-[1500px]"
        />
      </motion.div>
      <div className="flex max-w-[300px] flex-col items-start gap-[8px] text-[24px] md:text-[30px] lg:text-[60px]">
        <div className="flex flex-row items-center gap-[4px] md:gap-[8px]">
          <div className="flex-[0.7] rounded-md bg-[var(--color-highlight)] px-[8px] py-[4px] text-white lg:rounded-xl lg:px-[16px]">
            2
          </div>
          <div className="flex-[0.7] rounded-md bg-[var(--color-highlight)] px-[8px] py-[4px] text-white lg:rounded-xl lg:px-[16px]">
            5
          </div>
          <h1>Países</h1>
        </div>
        <div className="flex flex-row items-center gap-[4px] md:gap-[8px]">
          <div className="flex-[0.7] rounded-md bg-white px-[8px] py-[4px] text-[var(--color-highlight)] lg:rounded-xl lg:px-[16px]">
            4
          </div>
          <div className="flex-[0.7] rounded-md bg-white px-[8px] py-[4px] text-[var(--color-highlight)] lg:rounded-xl lg:px-[16px]">
            2
          </div>
          <h1>Localidades</h1>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center text-[24px] italic lg:max-w-[1000px] lg:text-[30px]">
        <div className="flex min-w-[180px] flex-1 flex-col text-center ">
          <h1>Brasil</h1>
          <h1>Portugal</h1>
          <h1>França</h1>
          <h1>Rússia</h1>
          <h1>Alemanha</h1>
          <h1>Emirados Árabes Unidos</h1>
          <h1>Indonésia</h1>
        </div>
        <div className="hidden flex-1 flex-col text-center md:flex">
          <h1>Austrália</h1>
          <h1>Estados Unidos</h1>
          <h1>Canadá</h1>
          <h1>Itália</h1>
          <h1>Japão</h1>
          <h1>México</h1>
          <h1>Malásia</h1>
          <h1>Filipinas</h1>
        </div>
        <div className="flex min-w-[180px] flex-1 flex-col text-center">
          <h1>Singapura</h1>
          <h1>Tailândia</h1>
          <h1>Coreia do Sul</h1>
          <h1>Nigéria</h1>
          <h1>Índia</h1>
          <h1>Romênia</h1>
          <h1>Mongólia</h1>
          <h1>Cambodia</h1>
        </div>
      </div>
    </div>
  )
}

export default Map
