import React from 'react'
import { Link } from 'react-router-dom'
import state from '../../store'

interface SlideProps {
  hero: string
  product: string
}

const Slide = (props: SlideProps & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Link
        to={'/Produtos'}
        onClick={() => (state.showProduct = props.product)}
      >
        <img
          src={props.hero}
          className="max-w-[260px] md:max-w-[300px] lg:max-w-[400px]"
          alt="Kangen-Goiania-Slide-Image"
        />
      </Link>
    </div>
  )
}

export default Slide
