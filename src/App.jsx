import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
import ProductDetails from "./pages/ProductDetails"








function App() {
   const [order,setOrder] = useState(null)
 

  return (
   <BrowserRouter>
   <Navbar />
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Checkout" element={<Checkout setOrder={setOrder} />}></Route>
        <Route path="/order-confirmation" element={<Order order={order} />}></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
     </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
