import Select from "react-select"
import { OptionType } from "../../Types"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


interface CustomProps {
  title: string,
  options: OptionType[],
  paramName:string,
}

const CustomFilter = ({title, options, paramName}: CustomProps) => {
  const [selected, setSelected]=useState<OptionType | null>(null)
  const [params, setParams]=useSearchParams()

  useEffect(()=>{
    const newParams = new URLSearchParams(params.toString())
    if (selected?.value)
    {newParams.set(paramName, selected?.value)
}else{
  newParams.delete(paramName)
}
setParams(newParams)

  },[selected])

  const defaultValue={
    label: params.get(paramName),
    value: params.get(paramName),
  }
  return (
    <div className="text-black w-fit">
      <Select 
      defaultValue={defaultValue}
      onChange={(e)=>setSelected(e)}
      placeholder={title}
      className="min-w-[100px]" 
      options={options}>

      </Select>
    </div>
  )
}

export default CustomFilter