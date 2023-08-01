/* eslint-disable import/no-absolute-path */

import elements from '../../assets/icons/water/elements.svg'
import hearth from '../../assets/icons/water/hearth.svg'
import anions from '../../assets/icons/water/anions.svg'

const Topics = () => {
  return (
    <div className="flex w-full max-w-[310px] rounded-[15.22px] flex-col items-center gap-[32px] md:max-w-[800px] lg:max-w-[1049px] py-[32px] px-[16px] bg-opacity md:p-[96px] md:rounded-[30.44px] lg:gap-[64px]">
      <div className="flex flex-row items-center gap-[16px] md:gap-[48px] lg:gap-[80px]">
        <img
          src={elements}
          alt="Kangen-Goiania-topics-icon"
          className="max-w-[56px] md:max-w-[96px] lg:max-w-[96px]"
        />
        <p className="max-w-[230px] text-[12px] md:max-w-[400px] md:text-[16px] lg:max-w-[1000px]">{`A Kangen Water não remove muitos minerais que são perdidos no processo de purificação da água engarrafada.`}</p>
      </div>
      <div className="flex flex-row items-center gap-[16px] md:gap-[48px] lg:gap-[80px]">
        <img
          src={hearth}
          alt="Kangen-Goiania-topics-icon"
          className="max-w-[56px] md:max-w-[96px] lg:max-w-[96px]"
        />
        <p className="max-w-[230px] text-[12px] md:max-w-[400px] md:text-[16px] lg:max-w-[1000px]">{`Ao optar por beber água alcalina, você auxilia o seu corpo a retornar a um estado equilibrado. A Kangen Water é uma forma fresca, limpa e de ótimo sabor para manter uma saúde ideal!`}</p>
      </div>
      <div className="flex flex-row items-center gap-[16px] md:gap-[48px] lg:gap-[80px] lg:w-full">
        <img
          src={anions}
          alt="Kangen-Goiania-topics-icon"
          className="max-w-[56px] md:max-w-[96px] lg:max-w-[96px]"
        />
        <p className="max-w-[230px] text-[12px] md:max-w-[400px] md:text-[16px] lg:max-w-[1000px]">{`A Água Kangen possui um potencial de oxidação-redução (ORP) negativo.`}</p>
      </div>
    </div>
  )
}

export default Topics
