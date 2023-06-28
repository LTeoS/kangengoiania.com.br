import React from 'react'
import { Hero, CanvasWrapper } from '../../containers'

import waves from '../../assets/images/waves.svg'

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="flex w-full justify-center overflow-hidden">
        <img
          src={waves}
          className="max-w-[900px] md:max-w-[1700px] lg:max-w-[2600px]"
          alt="Kangen-Goiania-Waves"
        />
      </div>
      <CanvasWrapper />
    </div>
  )
}

export default Home
