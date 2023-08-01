import { FeaturesProps } from '../../types'

const Features = (props: FeaturesProps) => {
  return (
    <div className="flex max-w-[285px] flex-col items-start justify-center gap-[32px] text-left lg:max-w-[650px]">
      {props.first && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[20px] lg:text-[24px]">{props.first.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] text-[14.61px] lg:text-[18px]">
            {props.first.description}
          </p>
        </div>
      )}
      {props.second && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[20px] lg:text-[24px]">{props.second.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] text-[14.61px] lg:text-[18px]">
            {props.second.description}
          </p>
        </div>
      )}
      {props.third && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[20px] lg:text-[24px]">{props.third.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] text-[14.61px] lg:text-[18px]">
            {props.third.description}
          </p>
        </div>
      )}
      {props.fourth && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[20px] lg:text-[24px]">{props.fourth.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] text-[14.61px] lg:text-[18px]">
            {props.fourth.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default Features
