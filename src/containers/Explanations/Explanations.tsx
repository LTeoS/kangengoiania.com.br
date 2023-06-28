/* eslint-disable import/no-absolute-path */
import { useState, useEffect } from 'react'

import hydrogen from '../../assets/images/water/topics/hydrogen.svg'
import antioxidant from '../../assets/images/water/topics/antioxidant.svg'
import orp from '../../assets/images/water/topics/orp.png'

const Explanations = () => {
  const [mobile, setMobile] = useState(true)
  useEffect(() => {
    window.innerWidth > 640 ? setMobile(false) : setMobile(true)
  }, [])
  return (
    <div className="flex flex-col gap-[60px] md:gap-[80px]">
      <div className="flex w-full flex-col items-center gap-[16px] text-center md:gap-[48px] lg:flex-row lg:gap-[80px]">
        <img
          width={mobile ? 320 : 600}
          src={hydrogen}
          alt="Kangen-Goiania-Topic"
          className="max-w-[320px]"
        />
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] md:text-[40px]">Rica em Hidrogênio</h1>
          <p className="max-w-[310px] text-[16px] md:max-w-[500px] md:text-[24px] lg:max-w-[640px]">{`A água que é rica em hidrogênio possui uma alta concentração de hidrogênio molecular (H2). O hidrogênio molecular atua como um antioxidante eficiente que se difunde rapidamente através das membranas celulares e pode reduzir os radicais livres, suprimindo o estresse oxidativo. Através do processo de eletrólise, a sua água da torneira se torna Kangen Water® rica em hidrogênio.`}</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[16px] text-center lg:flex-row lg:gap-[80px]">
        <img
          width={mobile ? 320 : 600}
          src={antioxidant}
          alt="Kangen-Goiania-Topic"
          className="max-w-[320px] lg:hidden"
        />
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] md:text-[40px]">Antioxidante</h1>
          <p className="max-w-[310px] text-[16px] md:max-w-[500px] md:text-[24px] lg:max-w-[640px]">{`Reações de oxidação no corpo podem produzir radicais livres, enquanto os antioxidantes interrompem essas reações. Taxas elevadas de oxidantes em conjunto com uma quantidade insuficiente de antioxidantes no corpo causam estresse oxidativo. O fornecimento constante de fontes externas de antioxidantes deve fazer parte da dieta diária de cada pessoa para reduzir o estresse oxidativo e os danos relacionados. É por isso que todos devem se preocupar não apenas com a quantidade de água que bebemos, mas também com a qualidade. Ambos são essenciais para o nosso bem-estar.`}</p>
        </div>
        <img
          width={mobile ? 320 : 600}
          src={antioxidant}
          alt="Kangen-Goiania-Topic"
          className="hidden max-w-[320px] lg:flex"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-[16px] text-center lg:flex-row lg:gap-[80px]">
        <img
          width={mobile ? 320 : 500}
          src={orp}
          alt="Kangen-Goiania-Topic"
          className="max-w-[320px]"
        />
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] md:text-[40px]">ORP Negativo</h1>
          <p className="max-w-[310px] text-[16px] md:max-w-[500px] md:text-[24px] lg:max-w-[640px]">{`A água rica em hidrogênio é caracterizada por exibir um ORP negativo. Um valor de ORP alto (em números positivos) indica que uma substância possui um maior potencial oxidante. Em termos gerais, para os seres humanos, um ORP positivo ou alto é melhor para uso externo (limpeza e saneamento). Um valor de ORP baixo (em números negativos) indica que uma substância possui um maior potencial antioxidante e é preferível para consumo oral. Assim como o pH, os valores de ORP são uma medida importante para determinar a qualidade da água.`}</p>
        </div>
      </div>
    </div>
  )
}

export default Explanations
