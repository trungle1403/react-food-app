import {useState} from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import ProductDetail from "./pages/ProductDetail/ProductDetail";
function App() {
  const [data, setData] = useState([])
  const handleGetData = (value) => {
    setData(value)
  }
  return (
    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/order' element={<Order onDataSave={handleGetData} />} />
          <Route path='/product/:id' element={<ProductDetail dataSave={data} />} />
        </Routes>
    </Router>
  );
}

export default App;
