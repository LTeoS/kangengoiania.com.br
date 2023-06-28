/* eslint-disable import/no-absolute-path */
import React, { useState, useEffect } from 'react'

import elements from '../../assets/icons/water/elements.svg'
import hearth from '../../assets/icons/water/hearth.svg'
import anions from '../../assets/icons/water/anions.svg'

const Topics = () => {
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    window.innerWidth > 640 ? setMobile(false) : setMobile(true)
  }, [])

  return (
    <div className="flex w-full max-w-[390px] flex-col items-center gap-[32px] border md:max-w-[800px] lg:max-w-[1200px] lg:gap-[80px]">
      <div className="flex flex-row items-center gap-[32px] md:gap-[48px] lg:gap-[80px]">
        <img
          width={mobile ? 56 : 124}
          src={elements}
          alt="Kangen-Goiania-topics-icon"
          className="max-w-[56px]"
        />
        <p className="max-w-[230px] text-[16px] md:max-w-[400px] md:text-[20px] lg:max-w-[1000px]">{`A Kangen Water não remove muitos minerais que são perdidos no processo de purificação da água engarrafada.`}</p>
      </div>
      <div className="flex flex-row items-center gap-[32px] md:gap-[48px] lg:gap-[80px]">
        <img
          width={mobile ? 56 : 124}
          src={hearth}
          alt="Kangen-Goiania-topics-icon"
          className="max-w-[56px]"
        />
        <p className="max-w-[230px] text-[16px] md:max-w-[400px] md:text-[20px] lg:max-w-[1000px]">{`Ao optar por beber água alcalina, você auxilia o seu corpo a retornar a um estado equilibrado. A Kangen Water é uma forma fresca, limpa e de ótimo sabor para manter uma saúde ideal!`}</p>
      </div>
      <div className="flex flex-row items-center gap-[32px] md:gap-[48px] lg:gap-[80px]">
        <img
          width={mobile ? 56 : 124}
          src={anions}
          alt="Kangen-Goiania-topics-icon"
          className="max-w-[56px]"
        />
        <p className="max-w-[230px] text-[16px] md:max-w-[400px] md:text-[20px] lg:max-w-[1000px]">{`A Água Kangen possui um potencial de oxidação-redução (ORP) negativo.`}</p>
      </div>
    </div>
  )
}

export default Topics
