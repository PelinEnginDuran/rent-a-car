import CustomButton from "../CustomButton"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">
          Özgürlüğü Hisset, Yolculuğa Başla
        </h1>
        <p className="hero__subtitle">
          Altın standartta hizmet unutulmaz bir yolculuğa hazır mısın?
           Araç kiaralama deneyimini Altın seçenekler ile taçlandırarak
            her anını özel kılabilirsin.
        </p>

        <CustomButton title="Arabaları Keşfet" design="mt-10"/>
        </div>
        <div className="flex justify-center">
          <motion.img 
          initial={{
            scale:0.7,
            translateX:200,

          }}
          animate={{
            scale:1,
            translateX:0
          }}

          transition={{
            duration:2,
          }}
          className="object-contain"
           src="/hero.png"
           alt="car" />
        </div>
        </div>
  )
}

export default Hero