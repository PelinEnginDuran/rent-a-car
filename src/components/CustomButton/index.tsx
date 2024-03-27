

import { ButtonPropsType } from "../../Types"




const CustomButton = ({
    title,
    disabled,
    design,
    btnType,
    rIcon,
    handleClick,
}: ButtonPropsType) => {
  return (
    <button 
    onClick={handleClick}
    disabled={disabled}
     type={btnType}
      className= {`${design} 
      custom-btn
       bg-indigo-500 rounded-full hover:bg-blue-700
        text-white`}>
        <span className="flex-1">{title}</span>
        {rIcon && (
          <div className="relative w-6 h-6">
            <img src={rIcon}/>
          </div>
        )}
    </button>
  )
}

export default CustomButton