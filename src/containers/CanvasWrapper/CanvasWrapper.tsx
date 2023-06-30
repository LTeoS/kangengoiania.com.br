/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Stage } from '@react-three/drei'
import { Buttons, Model, Info } from '../../components'
import { useSnapshot } from 'valtio'
import state from '../../store'
import { AnimatePresence, motion } from 'framer-motion'

import bg from '../../assets/images/canvas/bg.svg'
import bgMob from '../../assets/images/canvas/bgMob.svg'
import waves from '../../assets/images/waves.svg'

const CanvasContainer = () => {
  const snap = useSnapshot(state)

  return (
    <div className="flex flex-col pt-[96px] overflow-hidden relative items-center pb-[96px] md:pb-[112px] lg:pt-[240px] lg:flex-row lg:justify-center">
      <img
        className="absolute z-[10] max-w-[900px] lg:max-w-[2600px] md:max-w-[1200px] top-0"
        src={waves}
        alt="Kangen-Goiania-waves"
      />
      <img
        className="absolute z-[-1] top-[-24px] max-w-[500px] md:hidden"
        src={bgMob}
        alt="Kangen-Goiania-Canvas-background"
      />
      <img
        className="absolute hidden md:block z-[-1] top-0 max-w-[1500px] lg:max-w-[2000px]"
        src={bg}
        alt="Kangen-Goiania-Canvas-background"
      />
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full h-[360px] md:h-[400px] w-[390px] md:my-[32px] lg:h-[600px] lg:w-[600px]">
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
        <div className="relative h-[266px] md:w-[320px] lg:w-[500px] md:flex flex flex-col mb-[16px]">
          <AnimatePresence>
            {snap.show && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex h-[266px] md:justify-center items-center text-center lg:w-[400px] md:translate-x-[-50px] lg:justify-center lg:translate-x-[-100px] lg:w-[500px]"
              >
                <div className="flex flex-col gap-[8px]">
                  <h1 className="text-[24px] lg:text-[40px]">Conheça a K8!</h1>
                  <div className="">
                    <p className="max-w-[240px] lg:max-w-full lg:text-[24px] font-extralight leading-6">
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
  )
}

export default CanvasContainer
