import { SpecsProps } from '../../types'

const Specs = (props: SpecsProps) => {
  return (
    <div className="flex w-full max-w-[350px] flex-col md:flex-1 lg:max-w-[400px]">
      <h1 className="mb-[32px] text-center text-[30px] lg:text-[30px]">
        Especificações
      </h1>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          Placas eletrodo
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.plates}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Tamanho da placa: (mm)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.size}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'ORP Negativo: (mV)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.orp || 'N/A'}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Faixa de pH: (mm)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.range}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Gera:'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.generates}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Potência: (W)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.power}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Peso Total: (Kg)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.weight}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Dimensões WHD: (mm)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.dimensions}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Taxa de Produção: (L/min)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.rate}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Facilidade de uso:'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.ease}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Línguas:'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.languages || 'N/A'}
        </p>
      </div>
      <div className="flex w-full flex-row text-[12px] lg:text-[16px]">
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {'Garantia: (anos)'}
        </p>
        <p className="flex-1 border-b-2 border-b-[var(--color-highlight)]">
          {props.warranty}
        </p>
      </div>
    </div>
  )
}

export default Specs
