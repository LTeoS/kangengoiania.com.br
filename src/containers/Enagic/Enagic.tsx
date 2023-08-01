import React from 'react'

import enagic from '../../assets/images/enagic/enagic.svg'
import factory from '../../assets/images/enagic/factory.svg'
import logo from '../../assets/images/enagic/logo.svg'

const Enagic: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-[112px] lg:py-[160px]">
      <div className="flex flex-col gap-[24px] justify-between items-center md:flex-row text-[12px] text-center lg:text-left md:text-[14.61px] w-full max-w-[281px] md:max-w-[1049px]">
        <div className="flex flex-col gap-[16px] w-full md:max-w-[376px]">
          <div className="flex flex-row w-full justify-start gap-[4px] h-[20px] items-center">
            <p>{'A'}</p>
            <img
              src={logo}
              alt="Kangen-Goiania-Logo"
              className="w-[104px] md:w-[126px]"
            />
            <p>{'é uma distribuidora'}</p>
          </div>
          <img
            src={enagic}
            alt="Kangen-Goiania-Enagic-Logo"
            className="w-full"
          />
          <p>
            {'A Água Kangen é produzida pela '}
            <strong>{'Enagic'}</strong>
            {
              ', empresa japonesa que se destaca na produção e distribuição de dispositivos de ionização de água conhecidos como Ionizadores de Água Kangen. Fundada em 1974 por Hironari Ohshiro, a Enagic tem como objetivo promover um estilo de vida saudável e sustentável por meio do consumo de água alcalina ionizada. Os ionizadores de água Kangen utilizam um processo inovador chamado "eletrólise", que divide a água em duas correntes: uma alcalina e outra ácida. A água alcalina é rica em antioxidantes e íons hidroxila, que ajudam a neutralizar os radicais livres prejudiciais em seu corpo e promover uma hidratação eficiente.'
            }
          </p>
        </div>
        <div className="flex flex-col gap-[24px] justify-center items-center">
          <img
            src={factory}
            alt="Kangen-Goiania-Enagic-Factory"
            className="w-full md:max-w-[590px]"
          />
          <p className="lg:max-w-[430px] lg:text-[18px] lg:translate-y-[70px]">
            {'Na fábrica da Enagic em Osaka acontecem, entre outros, os'}
            <strong className="text-[20px] font-semibold italic">
              {' seguintes processos: '}
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Enagic
