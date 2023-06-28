/* eslint-disable import/no-absolute-path */
const products = {
  k8: {
    id: 'k8',
    model: '/assets/images/products/tK8.svg',
    image: '/assets/images/products/k8.svg',
    intro:
      'A K8 (Kangen 8) é a máquina antioxidante mais poderosa da Enagic, apresentando 8 placas de titânio revestidas com platina para uma melhor ionização da água e maior potencial de produção de antioxidantes.',
    featuresHeader: 'A K8 está repleta de novos recursos ',
    featuresHeaderSpan: 'user-friendly',
    features: {
      first: {
        title: 'Auto On/Off',
        description:
          'A Kangen® é inteligente e desliga automaticamente para economizar energia.',
      },
      second: {
        title: 'Plug & Play',
        description:
          'Sem mais interruptor! Basta conectar a máquina e aproveitar.',
      },
      third: {
        title: 'Limpeza Automática',
        description: 'A água é drenada por 10 segundos após 10 minutos de uso.',
      },
      fourth: {
        title: 'Tecnologia Smart Filter',
        description:
          'Deixe sua máquina avisar quando for hora de trocar os filtros.',
      },
    },
    specs: {
      plates: '8',
      size: '135 X 75',
      orp: '-722',
      range: '2.5 - 11.5',
      generates: '5 tipos de água',
      power: '230',
      weight: '5',
      dimensions: '279 X 345 X 147',
      rate: 'Água Kangen®: 4.5 - 7.6 Água Ácida: 1.5 - 2.6 Água Ácida Forte: 0.6 - 1.1',
      ease: 'Totalmente automática, muito simples de usar',
      languages: '8',
      warranty: '5',
    },
    gallery: {
      image1: '/assets/images/products/gallery/k81.svg',
      image2: '/assets/images/products/gallery/k82.svg',
      image3: '/assets/images/products/gallery/k83.svg',
      image4: '/assets/images/products/gallery/k84.svg',
    },
  },
  sd: {
    id: 'sd',
    model: '/assets/images/products/tSd.svg',
    image: '/assets/images/products/sd.svg',
    intro:
      'Usada e amada em 82 países, a LeveLuk SD501 Platinum agora está disponível em UM único aparelho capaz de falar todas as notificações em CINCO idiomas!',
    featuresHeader: 'A SD501p é extremamente ',
    featuresHeaderSpan: 'fácil de usar!',
    features: {
      first: {
        title: 'User Friendly',
        description:
          'Com apenas um toque de botão, você pode ter acesso a qualquer uma das 5 águas que escolher.',
      },
      second: {
        title: 'Confirmação por voz',
        description:
          'Sua máquina irá confirmar a água que você selecionou com uma voz agradável.',
      },
      third: {
        title: 'Limpeza Automática',
        description: 'Controlado periodicamente por microcomputador.',
      },
      fourth: {
        title: 'Tecnologia Smart Filter',
        description:
          'Deixe sua máquina avisar quando for hora de trocar os filtros.',
      },
    },
    specs: {
      plates: '7',
      size: '135 X 75',
      orp: '-631',
      range: '2.5 - 11.5',
      generates: '5 tipos de água',
      power: '230',
      weight: '6.3',
      dimensions: '264 X 338 X 171',
      rate: 'Água Kangen®: 4.5 - 7.6 Água Ácida: 1.5 - 2.6 Água Ácida Forte: 0.6 - 1.1',
      ease: 'Totalmente automática, muito simples de usar',
      languages: '5',
      warranty: '5',
    },
    gallery: {
      image1: '/assets/images/products/gallery/sd1.svg',
      image2: '/assets/images/products/gallery/sd2.svg',
      image3: '/assets/images/products/gallery/sd3.svg',
      image4: '/assets/images/products/gallery/sd4.svg',
    },
  },
  jriv: {
    id: 'jr',
    model: '/assets/images/products/tJr.svg',
    image: '/assets/images/products/jriv.svg',
    intro:
      'A JrIV possui quatro placas de eletrodo sólidas que reduzem o consumo de energia. Devido às placas de titânio revestidas de platina sólida, esta unidade ainda pode produzir água ácida forte e água Kangen forte.',
    featuresHeader: 'Modelo inicial recomendado apenas ',
    featuresHeaderSpan: 'para solteiros ou casais.',
    features: {
      first: {
        title: 'User Friendly',
        description:
          'Com apenas um toque de botão, você pode ter acesso a qualquer uma das 4 águas que escolher.',
      },
      second: {
        title: 'Limpeza Automática',
        description: 'Controlado periodicamente por microcomputador.',
      },
      third: {
        title: 'Tecnologia Smart Filter',
        description:
          'Deixe sua máquina avisar quando for hora de trocar os filtros.',
      },
    },
    specs: {
      plates: '4',
      size: '135 X 75',
      orp: '-450',
      range: '2.5 - 11.5',
      generates: '4 tipos de água',
      power: '120',
      weight: '5.3',
      dimensions: '264 X 338 X 171',
      rate: 'Água Kangen®: 3.0 - 4.9 Água Ácida: 0.2 - 1.9 Água Ácida Forte: 0.3 - 0.7',
      ease: 'Unidade totalmente automática',
      languages: '1',
      warranty: '3',
    },
    gallery: {
      image1: '/assets/images/products/gallery/jriv1.svg',
      image2: '/assets/images/products/gallery/jriv2.svg',
      image3: '/assets/images/products/gallery/jriv3.svg',
    },
  },
  anespa: {
    id: 'anespa',
    model: '/assets/images/products/tAnespa.svg',
    image: '/assets/images/products/anespa.svg',
    intro:
      'O NOVO e exclusivo sistema ANESPA DX Home Spa transforma seu banheiro comum em um resort de águas termais naturais.      ',
    featuresHeader: 'A experiência definitiva de ',
    featuresHeaderSpan: 'spa em casa.',
    features: {
      first: {
        title: 'Tufa',
        description:
          'Uma rocha mineral extraída diretamente da fonte termal de Futamata, em Hokkaido, Japão. Essa pedra confere à água o mesmo efeito suave e relaxante de uma fonte termal.',
      },
      second: {
        title: 'MIC stone',
        description:
          'Gera água levemente alcalina ativada, benéfica para a sua pele.',
      },
      third: {
        title: 'Power stone',
        description: 'Gera íons negativos fortes.',
      },
    },
    specs: {
      plates: 'N/A',
      size: 'N/A',
      range: 'O mesmo da água encanada',
      generates: 'Água de íons minerais para sua banheira ou chuveiro.',
      power: 'N/A',
      weight: '2.5',
      dimensions: '130 X 346',
      rate: '2.6',
      ease: 'Muito simples de instalar e operar.',
      warranty: '3',
    },
    gallery: {
      image1: '/assets/images/products/gallery/anespa1.svg',
      image2: '/assets/images/products/gallery/anespa2.svg',
      image3: '/assets/images/products/gallery/anespa3.svg',
    },
  },
}

export default products
