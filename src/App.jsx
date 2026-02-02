import Home from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import Product from "./components/Sections/Products/Product";
import Footer from "./components/Sections/Footer/Footer";
import "./index.css"

export default function App(){
  return(
    <>
    <div className="w-full bg-white">  
      <Navbar menus={['Home', 'Products']}/>
      <Home/>
      <Product/>
    </div>
    <Footer/>
    </>
  )
}