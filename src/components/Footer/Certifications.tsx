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
    <div className="relative flex w-full flex-col items-center justify-between gap-[32px] overflow-hidden py-[64px] text-center md:gap-[48px] lg:py-[136px]">
      <img
        src={waves}
        alt="Kangen-Goiania-Certifications-Background"
        className="absolute top-0 max-w-[700px] opacity-20 md:max-w-[1200px] lg:max-w-[2200px]"
      />
      <h1 className="text-[30px] md:text-[40px] lg:text-[60px]">
        CERTIFICAÇÕES
      </h1>
      <p className="max-w-[350px] text-[24px] md:max-w-[500px] lg:max-w-[1000px] lg:text-[30px]">
        A Enagic International é certificada de acordo com a{' '}
        <strong>ISO 9001, ISO 14001</strong> e <strong>ISO 13485</strong> para
        controle de qualidade e gestão ambiental, possui o Selo Ouro da{' '}
        <strong>Water Quality Association</strong> para certificação de produtos
        e é membro em boa posição da prestigiosa Direct{' '}
        <strong>Selling Association.</strong>
      </p>
      <div className="flex w-full flex-col items-center lg:max-w-[1280px] lg:flex-row">
        <motion.div
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
        >
          <div className="flex max-w-[390px] flex-1 flex-row md:max-w-[480px] lg:max-w-[640px]">
            <img
              src={cert1}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[200px]"
            />
            <img
              src={cert2}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[200px]"
            />
            <img
              src={cert3}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[200px]"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
        >
          <div className="flex max-w-[390px] flex-1 flex-row md:max-w-[480px] lg:max-w-[640px]">
            <img
              src={cert4}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[200px]"
            />
            <img
              src={cert5}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[200px]"
            />
            <img
              src={cert6}
              alt="Kangen-Goiania-Certification"
              className="max-w-[112px] flex-1 md:max-w-[160px] lg:max-w-[200px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications
