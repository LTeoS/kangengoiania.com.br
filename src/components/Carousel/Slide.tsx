import React from 'react'

interface SlideProps {
  hero: string
}

const Slide = (props: SlideProps & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <div className="flex w-full items-center justify-center">
      <img
        src={props.hero}
        className="max-w-[389px] md:max-w-[500px] lg:max-w-[611px]"
        alt="Kangen-Goiania-Slide-Image"
      />
    </div>
  )
}

export default Slide
