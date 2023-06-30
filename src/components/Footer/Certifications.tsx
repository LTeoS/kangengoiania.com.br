/* eslint-disable import/no-absolute-path */
import { motion } from 'framer-motion'

import cert1 from '../../assets/images/footer/certifications/cert1.svg'
import cert2 from '../../assets/images/footer/certifications/cert2.svg'
import cert3 from '../../assets/images/footer/certifications/cert3.svg'
import cert4 from '../../assets/images/footer/certifications/cert4.svg'
import cert5 from '../../assets/images/footer/certifications/cert5.svg'
import cert6 from '../../assets/images/footer/certifications/cert6.svg'
import waves from '../../assets/images/footer/certifications/waves.svg'

const Certifications = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-[48px] overflow-hidden my-[32px] py-[64px] text-center md:gap-[56px] lg:py-[136px]">
      <img
        src={waves}
        alt="Kangen-Goiania-Certifications-Background"
        className="absolute top-0 max-w-[700px] opacity-30 md:max-w-[1200px] lg:max-w-[2200px]"
      />
      <h1 className="text-[24px] md:text-[40px]">CERTIFICAÇÕES</h1>
      <p className="max-w-[250px] md:max-w-[500px] lg:max-w-[800px] lg:text-[24px]">
        A Enagic International é certificada de acordo com a{' '}
        <strong>ISO 9001, ISO 14001</strong> e <strong>ISO 13485</strong> para
        controle de qualidade e gestão ambiental, possui o Selo Ouro da{' '}
        <strong>Water Quality Association</strong> para certificação de produtos
        e é membro em boa posição da prestigiosa Direct{' '}
        <strong>Selling Association.</strong>
      </p>
      <div className="flex w-full flex-col items-center lg:max-w-[1280px] lg:flex-row lg:justify-center">
        <motion.div
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
        >
          <div className="flex max-w-[390px] flex-1 flex-row md:max-w-[480px] lg:max-w-[640px] lg:justify-center">
            <img
              src={cert1}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[180px]"
            />
            <img
              src={cert2}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[180px]"
            />
            <img
              src={cert3}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[180px]"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
        >
          <div className="flex max-w-[390px] flex-1 flex-row md:max-w-[480px] lg:max-w-[640px] lg:justify-center">
            <img
              src={cert4}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[180px]"
            />
            <img
              src={cert5}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[180px]"
            />
            <img
              src={cert6}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[180px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications
