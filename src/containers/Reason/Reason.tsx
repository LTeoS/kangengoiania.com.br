/* eslint-disable import/no-absolute-path */
import waterCup from '../../assets/images/water/waterCup.svg'

const Reason = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center md:gap-[48px] mt-[112px] lg:gap-[64px] lg:mt-[48px]">
      <img
        src={waterCup}
        alt="Kangen-Goiania-Cup-Background"
        className="hidden max-w-[390px] md:flex lg:max-w-[400px]"
      />
      <div className="flex max-w-[300px] flex-col gap-[32px] text-center md:text-left lg:max-w-[400px]">
        <h1 className="text-[30px] md:text-[3 0px]">Por que Água Kangen?</h1>
        <p className="text-[14.61px] md:text-[16px]">
          {`Kangen significa "retornar à origem" em japonês. A Kangen Water® é a
          água alcalina produzida pelas máquinas de ionização e filtragem de
          água da Enagic. Há mais de 40 anos, a Kangen Water® é usada no Japão
          para ajudar a restaurar o corpo ao seu estado alcalino original. Essas
          máquinas podem transformar a água da torneira comum em água potável,
          alcalina, saudável e de sabor fresco. A Kangen Water® é superior à água
          da torneira e à água purificada.`}
        </p>
      </div>
    </div>
  )
}

export default Reason
