/* eslint-disable import/no-absolute-path */
import React from 'react'

import gold from '../../assets/images/footer/certifications/gold.svg'
import dsa from '../../assets/images/footer/certifications/dsa.svg'
import wq from '../../assets/images/footer/certifications/wq.svg'
import iso9001 from '../../assets/images/footer/certifications/9001.svg'
import iso14001 from '../../assets/images/footer/certifications/14001.svg'
import iso13485 from '../../assets/images/footer/certifications/13485.svg'

interface CertificationProps {
  association: string
  title: string
  image: string
}

const Certification: React.FC<CertificationProps> = (props) => {
  return (
    <div className="w-full max-w-[125px] md:max-w-[213px] flex flex-col items-center text-center justify-between h-[244px] md:h-[250px]">
      <img src={props.image} alt="Kangen-Goiania-Certification" />
      <h1 className="text-[12px]">{props.association}</h1>
      <div className="w-full rounded-[8px] border-main border-[1px] py-[8px]">
        <p className="text-[14.61px] text-center font-bold">{props.title}</p>
      </div>
    </div>
  )
}

const Certifications = () => {
  return (
    <div id="container" className="w-full flex justify-center items-center">
      <div className="flex flex-col w-full max-w-[281px] gap-[24px] items-center text-center py-[80px] md:hidden">
        <h1 className="text-[30px]">{'Certificações'}</h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <Certification
              association="Enagic"
              title="Gold Standard"
              image={gold}
            />
            <Certification
              association="Direct Selling Association"
              title="DSA Member"
              image={dsa}
            />
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <Certification
              association="Water Quality Association"
              title="WQA Gold Seal"
              image={wq}
            />
            <Certification
              association="International Organization for Standardization"
              title="ISO - 9001"
              image={iso9001}
            />
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <Certification
              association="International Organization for Standardization"
              title="ISO - 14001"
              image={iso14001}
            />
            <Certification
              association="International Organization for Standardization"
              title="ISO - 13485"
              image={iso13485}
            />
          </div>
        </div>
        <p className="w-full text-[12px]">
          {
            'A K8 e todas as demais máquinas fornecidas pela Kangen Water são certificadas de acordo com a ISO 9001, ISO 14001 e ISO 13485 para controle de qualidade e gestão ambiental e possuem o Selo Ouro da Water Quality Association para certificação de produto. Além disso, a Enagic é membro em boa posição da prestigiosa Direct Selling Association.'
          }
        </p>
        <a
          href="https://www.enagic.com/en_US/product-certifications"
          className="w-[186px] h-[56px] flex items-center justify-center bg-main rounded-[8px] shadow-button text-[14.61px] text-white font-semibold"
        >
          {'Saiba Mais'}
        </a>
      </div>
      <div className="hidden md:flex flex-col py-[125px] w-full max-w-[729px] gap-[44px] items-center text-justify">
        <h1 className="text-[50px] font-light">{'Certificações'}</h1>
        <div id="certifications" className="w-full flex flex-col">
          <div className="flex flex-row justify-between w-full">
            <Certification
              association="Enagic"
              title="Gold Standard"
              image={gold}
            />
            <Certification
              association="Direct Selling Association"
              title="DSA Member"
              image={dsa}
            />
            <Certification
              association="Water Quality Association"
              title="WQA Gold Seal"
              image={wq}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <Certification
              association="International Organization for Standardization"
              title="ISO - 9001"
              image={iso9001}
            />
            <Certification
              association="International Organization for Standardization"
              title="ISO - 14001"
              image={iso14001}
            />
            <Certification
              association="International Organization for Standardization"
              title="ISO - 13485"
              image={iso13485}
            />
          </div>
        </div>
        <p className="w-full text-[14.61px] max-w-[586px]">
          {
            'A K8 e todas as demais máquinas fornecidas pela Kangen Water são certificadas de acordo com a ISO 9001, ISO 14001 e ISO 13485 para controle de qualidade e gestão ambiental e possuem o Selo Ouro da Water Quality Association para certificação de produto. Além disso, a Enagic é membro em boa posição da prestigiosa Direct Selling Association.'
          }
        </p>
        <div className="w-full flex flex-row px-[112px] justify-end hover:opacity-60">
          <a
            href="https://www.enagic.com/en_US/product-certifications"
            className="w-[186px] h-[56px] flex items-center justify-center bg-main rounded-[8px] shadow-button text-[14.61px] text-white font-semibold"
          >
            {'Saiba Mais'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Certifications
