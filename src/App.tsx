import Header from "./components/Header"
import MainPage from "./Pages/MainPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"



const App = (): JSX.Element => {
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage/>}/>     
    </Routes>
    
    </BrowserRouter>
    
  
  )
}

export default App
