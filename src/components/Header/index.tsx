import { Link } from "react-router-dom"
import CustomButton from "../CustomButton"


const Header = () => {
  return (
    <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
      <Link to={"/"}>
        <img width={50} src="/bmw.png" alt="" />
      </Link>
      <CustomButton title="Kaydol" design="btn-custom"/>
    </nav>
    </header>
  )
}

export default Header