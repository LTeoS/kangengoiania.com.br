/* eslint-disable import/no-absolute-path */
import { Product } from '../../components'
import products from '../../store/products'

import tK8 from '../../assets/images/products/tK8.svg'
import k8 from '../../assets/images/products/k8.svg'
import tSd from '../../assets/images/products/tSd.svg'
import sd from '../../assets/images/products/sd.svg'
import tJr from '../../assets/images/products/tJr.svg'
import jriv from '../../assets/images/products/jriv.svg'
import tAnespa from '../../assets/images/products/tAnespa.svg'
import anespa from '../../assets/images/products/anespa.svg'

import k81 from '../../assets/images/products/gallery/k81.svg'
import k82 from '../../assets/images/products/gallery/k82.svg'
import k83 from '../../assets/images/products/gallery/k83.svg'
import k84 from '../../assets/images/products/gallery/k84.svg'

import sd1 from '../../assets/images/products/gallery/sd1.svg'
import sd2 from '../../assets/images/products/gallery/sd2.svg'
import sd3 from '../../assets/images/products/gallery/sd3.svg'
import sd4 from '../../assets/images/products/gallery/sd4.svg'

import jriv1 from '../../assets/images/products/gallery/jriv1.svg'
import jriv2 from '../../assets/images/products/gallery/jriv2.svg'
import jriv3 from '../../assets/images/products/gallery/jriv3.svg'

import anespa1 from '../../assets/images/products/gallery/anespa1.svg'
import anespa2 from '../../assets/images/products/gallery/anespa2.svg'
import anespa3 from '../../assets/images/products/gallery/anespa3.svg'

type ProductsType = typeof products

const Products = () => {
  return (
    <div className="my-[32px] flex w-full flex-col gap-[48px] md:my-0 md:mb-[64px] md:gap-[0px] lg:mt-[32px] lg:gap-[64px]">
      {Object.keys(products).map((key) => {
        let model: string
        let image: string
        const product = products[key as keyof ProductsType]
        if (product.id === 'k8') {
          model = tK8
          image = k8
          product.gallery = {
            image1: k81,
            image2: k82,
            image3: k83,
            image4: k84,
          }
        } else if (product.id === 'sd') {
          model = tSd
          image = sd
          product.gallery = {
            image1: sd1,
            image2: sd2,
            image3: sd3,
            image4: sd4,
          }
        } else if (product.id === 'jr') {
          model = tJr
          image = jriv
          product.gallery = {
            image1: jriv1,
            image2: jriv2,
            image3: jriv3,
          }
        } else if (product.id === 'anespa') {
          model = tAnespa
          image = anespa
          product.gallery = {
            image1: anespa1,
            image2: anespa2,
            image3: anespa3,
          }
        } else {
          model = product.model
          image = product.image
        }
        return <Product key={key} {...product} model={model} image={image} />
      })}
    </div>
  )
}

export default Products
