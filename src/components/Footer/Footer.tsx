/* eslint-disable import/no-absolute-path */
import instagram from '../../assets/images/footer/instagram.svg'
import whatsapp from '../../assets/images/footer/whatsapp.svg'
import enagic from '../../assets/images/footer/enagic.svg'
import copy from '../../assets/images/footer/copy.svg'
import logo from '../../assets/images/footer/logo.svg'

const Footer = () => {
  return (
    <div className="bg-top-center flex w-full flex-col items-center justify-end gap-[48px] bg-[url('assets/images/footer/bg.svg')] bg-cover pb-[4px] pt-[80px] lg:h-[640px] lg:gap-[200px]">
      <div className="flex h-[120px] w-full flex-row items-center justify-center md:gap-[48px]">
        <div className="flex max-w-[170px] flex-1 flex-col items-center gap-[8px] text-center lg:max-w-[400px]">
          <h1 className="w-full text-[20px] tracking-widest text-white md:text-[24px] lg:hidden">
            Siga-nos
          </h1>
          <div className="hidden max-w-[454px] flex-row items-center gap-[12px] border-b-2 border-b-white pb-[12px] lg:flex">
            <h1 className="text-[24px] text-white">Siga a</h1>
            <img
              className="max-w-[300px]"
              src={logo}
              alt="Kangen-Goiania-Footer-Logo"
            />
          </div>
          <a
            target="a_blank"
            href="https://www.instagram.com/aguakangen.goiania/"
          >
            <img
              className="max-w-[72px] cursor-pointer lg:mt-[12px] lg:max-w-[95px]"
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
          <h1 className="w-full text-[20px] tracking-widest text-white md:max-w-[260px] md:text-[16px] md:text-[24px] lg:border-b-2 lg:border-b-white lg:pb-[12px] lg:text-[24px]">
            Entre em contato
          </h1>
          <a
            target="a_blank"
            href="https://wa.me/6281175808?text=Olá!%20Tenho%20interesse%20em%20ser%20Kangen!"
          >
            <img
              className="max-w-[72px] cursor-pointer lg:mt-[12px] lg:max-w-[95px]"
              src={whatsapp}
              alt="Kangen-Goiania-Footer-Icon"
            />
          </a>
        </div>
      </div>
      <img
        className="max-w-[200px] flex-1 md:max-w-[326px] lg:hidden"
        src={enagic}
        alt="Kangen-Goiania-Footer-Icon"
      />
      <div className="flex w-full flex-row items-center justify-center gap-[4px] md:gap-[8px]">
        <img
          src={copy}
          alt="Kangen-Goiania-Footer-Icon"
          className="lg:w-[26px]"
        />
        <h1 className="mt-2 text-[12px] text-white md:text-[16px] lg:text-[20px]">
          Todos os direitos reservados
        </h1>
        <img
          className="max-w-[125px] cursor-pointer lg:max-w-[300px]"
          src={logo}
          alt="Kangen-Goiania-Footer-Logo"
        />
      </div>
    </div>
  )
}

export default Footer
