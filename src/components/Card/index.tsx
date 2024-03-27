 
import { motion } from "framer-motion"
import {CarType} from "../../Types"
import { generateImage } from "../../Utils/GenerateImage"
import CustomButton from "../CustomButton"
import DetailModal from "../DetailModal"
import { useState } from "react"

   

const Card = ({car}:{car: CarType}) => {
    const[isModalOpen, setisModalOpen]=useState<boolean>(false)
    const translate ={
        fwd:"önden çeken",
        rwd:"arkadan itişli",
        "4wd":"4 çeker",
        awd:"4 çeker"
    }
  return (
    <motion.div
     initial={{scale:0.5, opacity:0}} 
     whileInView={{scale:1,opacity:1}}

    className="car-card group">
        <h2 className="car-card__content-title">
            {car.make} {car.model}
        </h2>
        <p className="flex mt-6 text-[32px] ">
            <span className="text-[19px] font-semibold">TL</span>

            {Math.round(Math.random()* 7000)+ 1500}
            <span className="text-[19px] self-end font-semibold">/gün</span>
        </p>
        <div className="relative w-full h-40 my-3">
            <img src={generateImage(car)} alt="car" className="w-full h-full object-contain" />
        </div>
        <div className="relative w-full mt-2 ">
            <div className="group-hover:hidden flex w-full justify-between">
                <div className="flex-center flex-col text-gray-600">
                    <img src="/steering-wheel.svg" alt="" />
                    <p>{car.transmission === "a" ? "otomatik" : "manuel"}</p>
                </div>
                <div className="flex-center flex-col text-gray-600">
                    <img width={25}src="/tire.svg" alt="" />
                    <p>{translate[car.drive]}</p>
                </div>
                <div className="flex-center flex-col text-gray-600">
                    <img src="/gas.svg" alt="" />
                    <p>{car.fuel_type}</p>
                </div>
            </div>
            <div className="group-hover:flex hidden">
                <CustomButton 
                title="Daha Fazla"
                design="w-full py-[16px]"
                rIcon="/right-arrow.svg"
                handleClick={()=>setisModalOpen(true)}/>
            </div>
        </div>
        <DetailModal
        car={car}
         isOpen={isModalOpen}
          close={()=>setisModalOpen(false)}/>
    </motion.div>
  )
}

export default Card