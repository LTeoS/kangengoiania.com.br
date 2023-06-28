/* eslint-disable import/no-absolute-path */
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from '../../../node_modules/swiper'
import { Slide, HeroBg, Tape } from '../../components'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import heroK8 from '../../assets/images/hero/heroK8.svg'
import heroSd from '../../assets/images/hero/heroSd.png'
import heroJr from '../../assets/images/hero/heroJr.svg'
import heroAnespa from '../../assets/images/hero/heroAnespa.svg'

import mobK8 from '../../assets/images/hero/titles_mobile/mobK8.svg'
import mobSd from '../../assets/images/hero/titles_mobile/mobSd.svg'
import mobJr from '../../assets/images/hero/titles_mobile/mobJr.svg'
import mobAnespa from '../../assets/images/hero/titles_mobile/mobAnespa.svg'

import deskK8 from '../../assets/images/hero/titles_desktop/deskK8.svg'
import deskSd from '../../assets/images/hero/titles_desktop/deskSd.svg'
import deskJr from '../../assets/images/hero/titles_desktop/deskJr.svg'
import deskAnespa from '../../assets/images/hero/titles_desktop/deskAnespa.svg'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => setWidth(window.innerWidth), [])

  return (
    <div className="relative flex flex-col items-center w-full max-w-[100vw] overflow-hidden py-[24px] md:py-[48px] lg:pb-[24px]">
      <div className="flex h-[20px] w-full items-center justify-center bg-[var(--color-highlight)] md:max-w-[260px] md:h-[24px] opacity-30 md:opacity-100 md:rounded-lg">
        <Tape
          activeIndex={activeIndex}
          slideIndex={0}
          line="LEVELUK "
          model="K8"
        />
        <Tape
          activeIndex={activeIndex}
          slideIndex={1}
          line="LEVELUK "
          model="SD501 Platinum"
        />
        <Tape
          activeIndex={activeIndex}
          slideIndex={2}
          line="LEVELUK "
          model="JRIV"
        />
        <Tape
          activeIndex={activeIndex}
          slideIndex={3}
          line="ANESPA "
          model="ANSP-01"
        />
      </div>
      <HeroBg
        activeIndex={activeIndex}
        slideIndex={0}
        bgMob={mobK8}
        bgDesk={deskK8}
      />
      <HeroBg
        activeIndex={activeIndex}
        slideIndex={1}
        bgMob={mobSd}
        bgDesk={deskSd}
      />
      <HeroBg
        activeIndex={activeIndex}
        slideIndex={2}
        bgMob={mobJr}
        bgDesk={deskJr}
      />
      <HeroBg
        activeIndex={activeIndex}
        slideIndex={3}
        bgMob={mobAnespa}
        bgDesk={deskAnespa}
      />
      <Swiper
        className="w-full my-[48px]"
        slidesPerView={width < 1024 ? 1 : 1.7}
        slideToClickedSlide={true}
        centeredSlides={true}
        watchOverflow={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Slide hero={heroK8} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide hero={heroSd} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide hero={heroJr} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide hero={heroAnespa} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
