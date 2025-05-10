import { Routes, Route } from "react-router-dom"
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
  const [order, setOrder] = useState(null)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<Order order={order} />} />
        <Route path="/filter-data" element={<FilterData />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
