import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import Pricing from "./pages/Pricing"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
