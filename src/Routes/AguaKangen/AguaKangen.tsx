import { Reason, Topics, Explanations, WaterTypes } from '../../containers'

const AguaKangen = () => {
  return (
    <div className="mb-[80px] flex w-full flex-col items-center gap-[128px]">
      <Reason />
      <Topics />
      <Explanations />
      <WaterTypes />
    </div>
  )
}

export default AguaKangen
