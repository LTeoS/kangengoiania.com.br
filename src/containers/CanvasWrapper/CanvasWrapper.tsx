/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Stage } from '@react-three/drei'
import { Buttons, Model, Info } from '../../components'
import { useSnapshot } from 'valtio'
import state from '../../store'
import { AnimatePresence, motion } from 'framer-motion'

const CanvasContainer = () => {
  const snap = useSnapshot(state)

  return (
    <div className="w-full flex justify-center">
      <div
        id="container"
        className="w-full flex gap-[16px] flex-col lg:flex-row justify-between items-center md:max-w-[1049px]"
      >
        <div
          id="canvas-info-container"
          className="flex flex-col md:flex-row max-w-[307px] justify-center items-center md:max-w-[770px] rounded-[15.22px] md:rounded-[30.44px] bg-opacity"
        >
          <div
            id="canvas"
            className="w-full h-[360px] md:h-[421px] md:w-[421px] w-[390px] md:my-[32px] "
          >
            <Canvas camera={{ fov: 40 }}>
              <directionalLight position={[3, 3, 3]} />
              <Suspense fallback={null}>
                <group position={[-0.35, 0, 0]}>
                  <Stage
                    intensity={0.5}
                    environment="apartment"
                    shadows={{ type: 'accumulative' }}
                    adjustCamera={false}
                  >
                    <Center>
                      <Model />
                    </Center>
                  </Stage>
                </group>
              </Suspense>
            </Canvas>
          </div>
          <div
            id="info"
            className="w-full md:w-[349px] h-[266px] flex justify-center items-center"
          >
            <AnimatePresence>
              {snap.show && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex h-[266px] w-full justify-center lg:translate-x-[-32px] items-center text-center lg:w-[400px] lg:justify-center "
                >
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[30px] lg:text-[40px] tracking-tighter font-medium">
                      Conheça a K8!
                    </h1>
                    <div className="">
                      <p className="max-w-[220px] leading-5 lg:max-w-full text-[12px] lg:text-[14.61px] font-extralight leading-6">
                        {'Nosso ionizador de água mais poderoso. '}
                        <strong className="max-w-[310px] lg:hidden font-medium">
                          É só clicar nos componentes abaixo!
                        </strong>
                        <strong className="w-full hidden lg:block mt-[8px] text-center font-medium">
                          É só clicar nos componentes ao lado!
                        </strong>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
              {snap.filterAction && (
                <Info
                  content={
                    'O filtro da K8 utiliza um sistema de filtração multifásica para remover impurezas e contaminantes presentes na água da torneira. Ele é composto por várias camadas de materiais filtrantes, como carvão ativado granular e cerâmica bacteriostática.'
                  }
                  open={!snap.show}
                />
              )}
              {snap.displayAction && (
                <Info
                  content={
                    'A K8 é extremamente amigável ao usuário, graças a um grande painel LCD colorido e a instruções de voz claras. Com apenas um toque de botão, você pode ter acesso a qualquer uma das 8 águas que escolher. Sua máquina confirmará a água que você selecionou com uma voz agradável e, em instantes, a máquina gerará água saudável e ionizada por meio de um tubo flexível.'
                  }
                  open={!snap.show}
                />
              )}
              {snap.enhancerAction && (
                <Info
                  content={
                    'O Enhancer é projetado para adicionar minerais benéficos à água, enriquecendo-a com nutrientes essenciais. Ele contém uma combinação de minerais naturais selecionados, como cálcio, potássio e magnésio. A K8 possui dois Enhancers, que podem ser usados ​​para produzir água super ácida, água super alcalina ou ainda água magnesiana, dependendo da sua necessidade.'
                  }
                  open={!snap.show}
                />
              )}
              {snap.plateAction && (
                <Info
                  content={
                    'A K8 é similar à SD501, o carro-chefe da Enagic, mas possui uma placa adicional de titânio revestida com platina. A placa adicional significa uma melhor ionização da água, maior potencial de produção de antioxidantes e produção estável de pH e ORP em uma taxa de fluxo mais alta. A K8 é ótima para pequenos negócios e famílias.'
                  }
                  open={!snap.show}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <Buttons />
      </div>
    </div>
  )
}

export default CanvasContainer
