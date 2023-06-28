/* eslint-disable import/no-absolute-path */
import { useEffect, useState } from 'react'

import type1 from '../../assets/images/water/types/type1.svg'
import type2 from '../../assets/images/water/types/type2.svg'
import type3 from '../../assets/images/water/types/type3.svg'
import type4 from '../../assets/images/water/types/type4.png'
import type5 from '../../assets/images/water/types/type5.svg'

const WaterTypes = () => {
  const [device, setDevice] = useState('mobile')

  useEffect(() => {
    window.innerWidth > 1024
      ? setDevice('desktop')
      : window.innerWidth > 640
      ? setDevice('tablet')
      : setDevice('mobile')
  }, [])

  console.log(device)

  return (
    <div className="flex w-full flex-col items-center gap-[48px]">
      <h1 className="text-[30px] md:text-[40px]">Tipos de Água</h1>
      <div
        style={{
          maxWidth:
            device === 'desktop' ? 1200 : device === 'tablet' ? 800 : 390,
        }}
        className="my-[32px] flex max-w-[390px] flex-col items-center gap-[48px] md:max-w-[800px] md:flex-row md:gap-[8px]  lg:max-w-[1200px]"
      >
        <div className="flex flex-row gap-[16px] md:gap-[8px]">
          <img
            src={type1}
            alt="Kangen-Goiania-Types-Card"
            className="w-[156px] md:w-[200px]"
          />
          <img
            src={type2}
            alt="Kangen-Goiania-Types-Card"
            className="w-[156px] md:w-[200px]"
          />
        </div>
        <div className="flex flex-row gap-[16px] md:gap-[8px]">
          <img
            src={type3}
            alt="Kangen-Goiania-Types-Card"
            className="w-[156px] md:w-[200px]"
          />
          <img
            src={type4}
            alt="Kangen-Goiania-Types-Card"
            className="w-[156px] md:w-[200px]"
          />
        </div>
        <div className="flex flex-row justify-center lg:max-w-[200px]">
          <img
            src={type5}
            alt="Kangen-Goiania-Types-Card"
            className="w-[156px] md:w-[200px]"
          />
        </div>
      </div>
    </div>
  )
}

export default WaterTypes
