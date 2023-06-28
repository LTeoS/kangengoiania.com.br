import React from 'react'

const Button = (
  props: { thumb: string; title: string } & React.HTMLProps<HTMLButtonElement>,
) => {
  return (
    <button
      className="flex h-[57px] w-full flex-row items-center justify-start gap-[16px] rounded-lg px-[8px] px-[8px] py-[4px] transition-all duration-100 hover:bg-[var(--color-highlight)] hover:text-white hover:shadow-button active:bg-[var(--color-highlight)] active:text-white active:shadow-button child-hover:thumb-hover"
      onClick={props.onClick}
    >
      <img
        className="important] max-h-[41px] flex-[0.3] thumb-normal"
        src={props.thumb}
        alt="Kangen-Goiania-Button-Icon"
      />
      <p className="flex-1 text-left text-[22px] font-[500] tracking-widest">
        {props.title}
      </p>
    </button>
  )
}

export default Button
