/* eslint-disable import/no-absolute-path */
import React from 'react'

import logo from '../../assets/images/footer/map/logo.svg'
import map from '../../assets/images/footer/map/map.svg'

const Map: React.FC = () => {
  return (
    <div
      id="container"
      className="flex flex-col w-full items-center gap-[48px] bg-main pt-[80px] md:pt-[112px] py-[48px]"
    >
      <div
        id="logo-group"
        className="flex flex-col gap-[4px] w-full items-center"
      >
        <img
          src={logo}
          alt="Kangen-Goiania-Logo"
          className="max-w-[168px] md:max-w-[213px]"
        />
        <p className="text-white text-[14.61px] md:text-[20px] font-medium">
          {'Escritórios pelo mundo:'}
        </p>
      </div>
      <div
        id="locations-list-group"
        className="flex flex-col gap-[48px] md:flex-row md:justify-between md:items-center "
      >
        <div
          id="country-locations-group"
          className="flex flex-col w-full text-white text-[20px] font-light items-center gap-[4px] font-semibold"
        >
          <div
            id="country-group"
            className="flex flex-row w-full justify-start gap-[16px] max-w-[167px] items-center"
          >
            <div id="numbers" className="flex flex-row gap-[3px]">
              <div className="p-[4px] bg-white rounded-[4px]">
                <p className="text-main">2</p>
              </div>
              <div className="p-[4px] bg-white rounded-[4px]">
                <p className="text-main">5</p>
              </div>
            </div>
            <h1>{'Países'}</h1>
          </div>
          <div
            id="locations-group"
            className="flex flex-row w-full justify-start gap-[16px] max-w-[167px] items-center"
          >
            <div id="numbers" className="flex flex-row gap-[3px]">
              <div className="p-[4px] bg-white rounded-[4px]">
                <p className="text-main">4</p>
              </div>
              <div className="p-[4px] bg-white rounded-[4px]">
                <p className="text-main">2</p>
              </div>
            </div>
            <h1>{'Localidades'}</h1>
          </div>
        </div>
        <div
          id="country-list-group"
          className="flex flex-row w-full md:gap-[48px] justify-between max-w-[233px] md:max-w-[500px] text-[12px] md:text-[14.61px] text-white italic"
        >
          <div className="flex flex-1 flex-col text-center gap-[4px] ">
            <h1>Brasil</h1>
            <h1>Portugal</h1>
            <h1>França</h1>
            <h1>Rússia</h1>
            <h1>Alemanha</h1>
            <h1>Emirados Árabes Unidos</h1>
            <h1>Indonésia</h1>
          </div>
          <div className="hidden flex-1 flex-col text-center gap-[4px] md:flex">
            <h1>Austrália</h1>
            <h1>Estados Unidos</h1>
            <h1>Canadá</h1>
            <h1>Itália</h1>
            <h1>Japão</h1>
            <h1>México</h1>
            <h1>Malásia</h1>
            <h1>Filipinas</h1>
          </div>
          <div className="flex flex-1 flex-col text-center gap-[4px]">
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
      <img
        src={map}
        alt="Kangen-Goiania-Map"
        className="w-full max-w-[319px] md:max-w-[900px]"
      />
    </div>
  )
}

export default Map
