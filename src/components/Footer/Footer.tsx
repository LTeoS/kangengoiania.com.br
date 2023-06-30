/* eslint-disable import/no-absolute-path */
import instagram from '../../assets/images/footer/instagram.svg'
import whatsapp from '../../assets/images/footer/whatsapp.svg'
import enagic from '../../assets/images/footer/enagic.svg'
import copy from '../../assets/images/footer/copy.svg'
import logo from '../../assets/images/footer/logo.svg'
import bgMob from '../../assets/images/footer/bgMob.svg'
import bg from '../../assets/images/footer/bg.svg'

const Footer = () => {
  return (
    <div className="overflow-hidden relative flex w-full flex-col items-center justify-end gap-[48px] pb-[4px] pt-[96px] lg:pt-[124px]">
      <img
        className="absolute z-[-1] max-w-[700px] md:max-w-[1000px] top-0 lg:hidden"
        src={bgMob}
        alt="Kangen-Goiania-Footer-bakcground"
      />
      <img
        className="absolute z-[-1] max-w-[2200px] top-0 hidden lg:block"
        src={bg}
        alt="Kangen-Goiania-Footer-bakcground"
      />
      <p className="hidden lg:block text-white text-[20px] max-w-[300px] text-center">
        A <strong>kangen Water Goiânia</strong> é uma distribuidora oficial
        independente Enagic:
      </p>
      <div className="flex md:flex-row w-full gap-[32px] flex-col items-center justify-center md:gap-[48px]">
        <div className="flex max-w-[170px] flex-1 flex-col items-center gap-[8px] text-center lg:max-w-[400px]">
          <h1 className="w-full text-[16px] tracking-widest text-white md:text-[18px] lg:hidden">
            Siga-nos
          </h1>
          <div className="hidden max-w-[454px] flex-row items-center gap-[12px] border-b-2 border-b-white pb-[12px] lg:flex">
            <h1 className="text-[20px] text-white">Siga a</h1>
            <img
              className="max-w-[200px]"
              src={logo}
              alt="Kangen-Goiania-Footer-Logo"
            />
          </div>
          <a
            target="a_blank"
            href="https://www.instagram.com/aguakangen.goiania/"
          >
            <img
              className="max-w-[56px] cursor-pointer lg:mt-[12px] lg:max-w-[95px]"
              src={instagram}
              alt="Kangen-Goiania-Footer-Icon"
            />
          </a>
        </div>
        <img
          className="hidden max-w-[200px] flex-1 lg:block lg:max-w-[326px]"
          src={enagic}
          alt="Kangen-Goiania-Footer-Icon"
        />
        <div
          className="flex max-w-[240px]
         flex-1 flex-col items-center gap-[8px] text-center lg:max-w-[400px]"
        >
          <h1 className="w-full text-[16px] tracking-widest text-white md:max-w-[260px] lg:max-w-[210px] md:text-[18px] lg:border-b-2 lg:border-b-white lg:pb-[12px] lg:text-[20px]">
            Entre em contato
          </h1>
          <a
            target="a_blank"
            href="https://wa.me/6281175808?text=Olá!%20Tenho%20interesse%20em%20ser%20Kangen!"
          >
            <img
              className="max-w-[56px] cursor-pointer lg:mt-[12px] lg:max-w-[95px]"
              src={whatsapp}
              alt="Kangen-Goiania-Footer-Icon"
            />
          </a>
        </div>
      </div>
      <p className="text-white max-w-[250px] text-center lg:hidden">
        A <strong>kangen Water Goiânia</strong> é uma distribuidora oficial
        independente Enagic:
      </p>
      <img
        className="max-w-[200px] flex-1 md:max-w-[326px] lg:hidden"
        src={enagic}
        alt="Kangen-Goiania-Footer-Icon"
      />
      <div className="flex flex-row font-medium italic gap-[4px] lg:hidden text-white items-center">
        <p className="translate-y-[2px]">2023</p>
        <img
          className="max-w-[125px] cursor-pointer lg:max-w-[300px]"
          src={logo}
          alt="Kangen-Goiania-Footer-Logo"
        />
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-[4px] md:gap-[8px]">
        <img
          src={copy}
          alt="Kangen-Goiania-Footer-Icon"
          className="lg:w-[26px]"
        />
        <h1 className="mt-2 text-[12px] text-white md:text-[16px] lg:text-[20px]">
          Todos os direitos reservados
        </h1>
        <div className="flex-row hidden lg:flex lg:text-[20px] font-medium italic gap-[8px] text-white items-center">
          <p className="translate-y-[4px]"> - 2023</p>
          <img
            className="max-w-[125px] cursor-pointer lg:max-w-[200px]"
            src={logo}
            alt="Kangen-Goiania-Footer-Logo"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
