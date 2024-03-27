import { MouseEventHandler } from "react";

export type ButtonPropsType={
    disabled?: boolean,
    design?: string,
    btnType?: "submit" | "button" | "reset",
    title?:string | JSX.Element;
    rIcon?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>
  }
  
  export interface CarType 
    {
      "city_mpg": number;
      "class": string;
      "combination_mpg": number;
      "cylinders": number;
      "displacement": number;
      "drive": "fwd" | "awd" | "4wd" | "rwd";
      "fuel_type": "gas" | "diesel" | "electricity",
      "highway_mpg": number,
      "make": string,
      "model": string,
      "transmission": "a" | "m",
      "year": number
  }
  
  export type OptionType={
    label:string,
    value:string,
  }