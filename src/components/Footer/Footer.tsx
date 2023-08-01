/* eslint-disable import/no-absolute-path */
import instagram from '../../assets/images/footer/instagram.svg'
import whatsapp from '../../assets/images/footer/whatsapp.svg'
import enagic from '../../assets/images/footer/enagic.svg'
import copy from '../../assets/images/footer/copy.svg'
import logo from '../../assets/images/footer/logo.svg'

const Footer = () => {
  return (
    <div
      id="container"
      className="flex flex-col w-full justify-between gap-[48px] items-center bg-main"
    >
      <div
        id="social-links"
        className="flex flex-row w-full max-w-[340px] justify-center md:max-w-[878px] md:justify-between md:px-[29px]"
      >
        <div
          id="instagram"
          className="flex flex-col gap-[4px] md:gap-[8px] md:px-[28px]"
        >
          <div className="flex flex-row w-full gap-[8px] items-end">
            <h1 className="text-[12px] md:text-[16px] text-white font-light">
              {'Siga a'}
            </h1>
            <img
              src={logo}
              alt="Kangen-Goiania-Logo"
              className="max-w-[116px] md:max-w-[157px]"
            />
          </div>
          <div className="w-full flex justify-center p-[8px] border-t-[2px] border-t-white items-center">
            <a href="https://www.instagram.com/aguakangen.goiania/">
              <img
                src={instagram}
                alt="Kangen-Goiania-Instagram"
                className="w-full max-w-[36px] md:max-w-[60px]"
              />
            </a>
          </div>
        </div>
        <img
          src={enagic}
          alt="Kangen-Goiania-Enagic-distributor"
          className="hidden md:flex max-w-[180px]"
        />
        <div
          id="whatsapp"
          className="flex flex-col gap-[4px] md:gap-[8px] md:px-[28px]"
        >
          <div className="h-[23px] flex items-end">
            <h1 className="text-white text-[12px] md:text-[16px] font-light">
              {'Entre em Contato'}
            </h1>
          </div>
          <div className="w-full flex justify-center p-[8px] items-center border-t-[2px] border-t-white">
            <a href="https://wa.me/6281175808?text=Olá!%20Tenho%20interesse%20em%20ser%20Kangen!">
              <img
                src={whatsapp}
                alt="Kangen-Goiania-Whatsapp"
                className="w-full max-w-[36px] md:max-w-[60px]"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src={enagic}
        alt="Kangen-Goiania-Enagic-distributor"
        className="md:hidden max-w-[123px]"
      />
      <div
        id="copy"
        className="flex flex-row justify-center gap-[4px] md:gap-[10px] items-end w-full"
      >
        <img
          src={copy}
          alt="Kangen-goiania-copy"
          className="w-[8px] md:w-[16px] mb-[4px]"
        />
        <p className="text-white text-[8px] md:text-[14.61px]">
          {'Todos os direitos reservados'}
        </p>
        <img
          src={logo}
          alt="kangen-goiania-logo"
          className="max-w-[98px] md:max-w-[168px]"
        />
      </div>
    </div>
  )
}

export default Footer
