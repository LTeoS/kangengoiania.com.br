/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Stage } from '@react-three/drei'
import { Buttons, Model, Info } from '../../components'
import { useSnapshot } from 'valtio'
import state from '../../store'
import { AnimatePresence, motion } from 'framer-motion'

const CanvasContainer = () => {
  const [mobile, setMobile] = useState(true)
  const snap = useSnapshot(state)

  useEffect(() => {
    window.innerWidth > 640 && setMobile(false)
  }, [])

  return (
    <div className="flex flex-col items-center pb-[32px] md:pb-[64px] lg:flex-row lg:justify-center ">
      <div
        style={{
          width: '100%',
          maxWidth: mobile ? 390 : 800,
          height: mobile ? 390 : 800,
        }}
      >
        <Canvas camera={{ fov: 50 }}>
          <directionalLight position={[3, 3, 3]} />
          <Suspense fallback={null}>
            <group position={[-0.3, 0, 0]}>
              <Stage
                intensity={1}
                environment="apartment"
                shadows={{ type: 'contact' }}
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
      <div className="relative flex flex-col">
        <AnimatePresence>
          {snap.show && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex h-[266px] items-center text-center lg:w-[400px] lg:translate-x-[-200px] lg:justify-center"
            >
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[40px]">Conheça a K8.</h1>
                <div className="">
                  <p className="max-w-[310px] text-[20px]">
                    Nosso ionizador de água mais poderoso.
                  </p>
                  <p className="max-w-[310px] text-[20px] font-[500]">
                    É só clicar nos componentes abaixo!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          {snap.filterAction && (
            <Info
              content={
                'O filtro da K8 utiliza um sistema de filtração multifásica para remover impurezas e contaminantes presentes na água da torneira. Ele é composto por várias camadas de materiais filtrantes, como carvão ativado granular e cerâmica bacteriostática, que trabalham em conjunto para eliminar partículas, cloro, metais pesados e outros elementos indesejados.'
              }
              open={!snap.show}
            />
          )}
          {snap.displayAction && (
            <Info
              content={
                'A K8 é extremamente amigável ao usuário, graças a um grande painel LCD colorido e a instruções de voz claras. Com apenas um toque de botão, você pode ter acesso a qualquer uma das 5 águas que escolher. Sua máquina confirmará a água que você selecionou com uma voz agradável e, em instantes, a máquina gerará água saudável e ionizada por meio de um tubo flexível.'
              }
              open={!snap.show}
            />
          )}
          {snap.enhancerAction && (
            <Info
              content={
                'O Enhancer é projetado para adicionar minerais benéficos à água, enriquecendo-a com nutrientes essenciais. Ele contém uma combinação de minerais naturais selecionados, como cálcio, potássio e magnésio, que são importantes para a saúde e bem-estar.'
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
      <Buttons />
    </div>
  )
}

export default CanvasContainer
