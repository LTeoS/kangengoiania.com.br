/* eslint-disable import/no-absolute-path */
import React from 'react'

import waterCup from '../../assets/images/water/waterCup.svg'

const Reason = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center md:gap-[48px] lg:gap-[112px]">
      <img
        src={waterCup}
        alt="Kangen-Goiania-Cup-Background"
        className="hidden max-w-[390px] md:flex lg:max-w-[468px]"
      />
      <div className="flex max-w-[300px] flex-col gap-[32px] text-center lg:max-w-[600px]">
        <h1 className="text-[40px] md:text-[50px] lg:text-[60px]">
          Por que Água Kangen?
        </h1>
        <p className="text-[18px] md:text-[20px] lg:text-[30px]">
          {`Kangen significa "retornar à origem" em japonês. A Kangen Water® é a
          água alcalina produzida pelas máquinas de ionização e filtragem de
          água da Enagic. Há mais de 40 anos, a Kangen Water® é usada no Japão
          para ajudar a restaurar o corpo ao seu estado alcalino original. Essas
          máquinas podem transformar a água da torneira comum em água potável,
          alcalina, saudável e de sabor fresco. A Kangen Water® é superior à água
          da torneira e à água purificada.`}
        </p>
      </div>
    </div>
  )
}

export default Reason
