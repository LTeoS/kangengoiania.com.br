import React from 'react'

import metalprocess from '../../assets/images/enagic/processes/metalprocess.svg'
import assemble from '../../assets/images/enagic/processes/assemble.svg'
import plasticinjection from '../../assets/images/enagic/processes/plasticinjection.svg'
import eletriccircuit from '../../assets/images/enagic/processes/eletriccircuit.svg'
import waterdetection from '../../assets/images/enagic/processes/waterdetection.svg'
import filterproduction from '../../assets/images/enagic/processes/filterproduction.svg'

interface ProcessProps {
  title: string
}

const Process: React.FC<ProcessProps> = (props) => {
  return (
    <div className="w-[120px] md:w-[220px] shadow-button text-center overflow-hidden rounded-[8px] text-[12px] md:text-[14.61px]">
      {props.title === 'Processamento de Metais' && (
        <div className="w-full flex flex-col bg-white pb-[4px] gap-[4px] md:pb-[8px] md:gap-[8px] items-center">
          <img
            src={metalprocess}
            alt="Kangen-Goiania-Metal-process"
            className="w-full"
          />
          <h1>{props.title}</h1>
        </div>
      )}
      {props.title === 'Montagem Final' && (
        <div className="w-full flex flex-col bg-white pb-[4px] gap-[4px] md:pb-[8px] md:gap-[8px] items-center">
          <img
            src={assemble}
            alt="Kangen-Goiania-Metal-process"
            className="w-full"
          />
          <h1>{props.title}</h1>
        </div>
      )}
      {props.title === 'Injeção de Plástico' && (
        <div className="w-full flex flex-col bg-white pb-[4px] gap-[4px] md:pb-[8px] md:gap-[8px] items-center">
          <img
            src={plasticinjection}
            alt="Kangen-Goiania-Metal-process"
            className="w-full"
          />
          <h1>{props.title}</h1>
        </div>
      )}
      {props.title === 'Detecção de Circuitos' && (
        <div className="w-full flex flex-col bg-white pb-[4px] gap-[4px] md:pb-[8px] md:gap-[8px] items-center">
          <img
            src={eletriccircuit}
            alt="Kangen-Goiania-Metal-process"
            className="w-full"
          />
          <h1>{props.title}</h1>
        </div>
      )}
      {props.title === 'Detecção de Água' && (
        <div className="w-full flex flex-col bg-white pb-[4px] gap-[4px] md:pb-[8px] md:gap-[8px] items-center">
          <img
            src={waterdetection}
            alt="Kangen-Goiania-Metal-process"
            className="w-full"
          />
          <h1>{props.title}</h1>
        </div>
      )}
      {props.title === 'Produção do Filtro' && (
        <div className="w-full flex flex-col bg-white pb-[4px] gap-[4px] md:pb-[8px] md:gap-[8px] items-center">
          <img
            src={filterproduction}
            alt="Kangen-Goiania-Metal-process"
            className="w-full"
          />
          <h1>{props.title}</h1>
        </div>
      )}
    </div>
  )
}

export default Process
