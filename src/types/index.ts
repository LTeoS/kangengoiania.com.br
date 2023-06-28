import { StaticImageData } from 'next/image'

export interface FeaturesProps {
  first?: {
    title: string
    description: string
  }
  second?: {
    title: string
    description: string
  }
  third?: {
    title: string
    description: string
  }
  fourth?: {
    title: string
    description: string
  }
}

export interface SpecsProps {
  plates?: string
  size?: string
  orp?: string
  range?: string
  generates?: string
  power?: string
  weight?: string
  dimensions?: string
  rate?: string
  ease?: string
  languages?: string
  warranty?: string
}

export interface GalleryProps {
  image1?: string | StaticImageData
  image2?: string | StaticImageData
  image3?: string | StaticImageData
  image4?: string | StaticImageData
}

export interface ProductProps {
  id: string
  model: string | StaticImageData
  image: string | StaticImageData
  intro: string
  featuresHeader: string
  featuresHeaderSpan: string
  features: FeaturesProps
  specs: SpecsProps
  gallery: GalleryProps
}
