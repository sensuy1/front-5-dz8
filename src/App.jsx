import "./App.css"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/CartPage"
import products from './data/products.json'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<ProductsPage  products={products}/>}/>
          <Route path="cart" element={<CartPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
