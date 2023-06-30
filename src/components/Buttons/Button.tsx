import React, { useState, useEffect } from 'react'
import state from '../../store'
import { useSnapshot } from 'valtio'

const Button = (
  props: { thumb: string; title: string } & React.HTMLProps<HTMLButtonElement>,
) => {
  const [active, setActive] = useState(false)
  const snap = useSnapshot(state)

  useEffect(() => {
    state.activeAction === props.title ? setActive(true) : setActive(false)
  }, [snap.activeAction, props.title])

  return (
    <button
      className={`flex h-[48px] w-full flex-row items-center justify-start gap-[16px] rounded-lg px-[8px] px-[8px] py-[4px] transition-all duration-100 lg:hover:bg-[var(--color-highlight)] lg:hover:text-white lg:h-[56px] lg:child-hover:thumb-hover lg:hover:shadow-button ${
        active
          ? `bg-[var(--color-highlight)] text-white shadow-button child:thumb-hover`
          : ''
      }`}
      onClick={props.onClick}
    >
      <img
        className="important] max-h-[32px] lg:max-h-[41px] flex-[0.3] thumb-normal"
        src={props.thumb}
        alt="Kangen-Goiania-Button-Icon"
      />
      <p className="flex-1 text-left text-[18px] lg:text-[24px] tracking-wider">
        {props.title}
      </p>
    </button>
  )
}

export default Button
