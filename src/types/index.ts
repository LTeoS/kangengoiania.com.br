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
  image1?: string
  image2?: string
  image3?: string
  image4?: string
}

export interface ProductProps {
  id: string
  model: string
  image: string
  intro: string
  featuresHeader: string
  featuresHeaderSpan: string
  features: FeaturesProps
  specs: SpecsProps
  gallery: GalleryProps
}
