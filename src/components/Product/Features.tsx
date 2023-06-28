import React from 'react'
import { FeaturesProps } from '../../types'

const Features = (props: FeaturesProps) => {
  return (
    <div className="flex max-w-[285px] flex-col items-start justify-center gap-[32px] text-left lg:max-w-[650px]">
      {props.first && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[24px] lg:text-[35px]">{props.first.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] lg:text-[24px]">
            {props.first.description}
          </p>
        </div>
      )}
      {props.second && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[24px] lg:text-[35px]">{props.second.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] lg:text-[24px]">
            {props.second.description}
          </p>
        </div>
      )}
      {props.third && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[24px] lg:text-[35px]">{props.third.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] lg:text-[24px]">
            {props.third.description}
          </p>
        </div>
      )}
      {props.fourth && (
        <div className="items-left flex w-full flex-col">
          <h1 className="text-[24px] lg:text-[35px]">{props.fourth.title}</h1>
          <p className="border-t-2 border-t-[var(--color-highlight)] lg:text-[24px]">
            {props.fourth.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default Features
