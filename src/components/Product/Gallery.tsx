import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from '../../../node_modules/swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import { GalleryProps } from '../../types'

const Gallery = (props: GalleryProps) => {
  return (
    <div className="flex flex w-full flex-col items-center gap-[16px] md:max-w-[500px]">
      <h1 className="mb-[32px] text-[30px] lg:text-[30px]">Galeria</h1>
      <Swiper
        className="flex w-full max-w-[390px] flex-row lg:max-w-[600px]"
        slidesPerView={1}
        slideToClickedSlide={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        watchOverflow={false}
        navigation={true}
        modules={[Navigation]}
      >
        {props.image1 && (
          <SwiperSlide>
            <img
              className="m-auto max-w-[290px] lg:max-w-[400px]"
              src={props.image1}
              alt="Kangen-Goiania-Model-Gallery"
            />
          </SwiperSlide>
        )}
        {props.image2 && (
          <SwiperSlide>
            <img
              className="m-auto max-w-[290px] lg:max-w-[400px]"
              src={props.image2}
              alt="Kangen-Goiania-Model-Gallery"
            />
          </SwiperSlide>
        )}
        {props.image3 && (
          <SwiperSlide>
            <img
              className="m-auto max-w-[290px] lg:max-w-[400px]"
              src={props.image3}
              alt="Kangen-Goiania-Model-Gallery"
            />
          </SwiperSlide>
        )}
        {props.image4 && (
          <SwiperSlide>
            <img
              className="m-auto max-w-[290px] lg:max-w-[400px]"
              src={props.image4}
              alt="Kangen-Goiania-Model-Gallery"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Gallery
