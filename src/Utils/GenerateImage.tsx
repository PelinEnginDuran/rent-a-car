import { colors } from "../Constants"
import { CarType } from "../Types"


export const generateImage = (car: CarType, angle?: string):string=>{
    const url = new URL('https://cdn.imagin.studio/getimage')
    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", car.make)
    url.searchParams.append("modelFamily", car.model.split("/")[0])
    url.searchParams.append("zoomType", "fulscreen")


    if(angle){
        url.searchParams.append("angle", angle)



    }
    const idx=Math.floor(Math.random() * colors.length)

    url.searchParams.append("paintId", colors[idx])
    return url.href
}
//https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m3//