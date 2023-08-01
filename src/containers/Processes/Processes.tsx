import React from 'react'
import Process from './Process'

const Processes: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex md:flex-col gap-[32px] justify-center flex-row max-w-[307px] md:px-[96px] py-[32px] md:gap-[32px] w-full md:max-w-[1049px] rounded-[30.44px] bg-opacity">
        <div className="flex gap-[32px] md:flex-row flex-col md:w-full w-[120px] justify-between">
          <Process title="Processamento de Metais" />
          <Process title="Montagem Final" />
          <Process title="Injeção de Plástico" />
        </div>
        <div className="flex gap-[32px] md:flex-row flex-col md:w-full w-[120px] justify-between">
          <Process title="Detecção de Circuitos" />
          <Process title="Detecção de Água" />
          <Process title="Produção do Filtro" />
        </div>
      </div>
    </div>
  )
}

export default Processes
