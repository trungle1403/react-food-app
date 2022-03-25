import React,{useState, useEffect} from 'react'
import Banner from '../../components/Banner/Banner'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'
import ProductList from '../../components/ProductList/ProductList'
import Loading from '../../components/Loading/Loading'
import axios from "axios"
import './Order.scss'

const Order = ({onDataSave}) => {
  const [product,setProduct] = useState([])
  //get product not api
  const [productTemp,setProductTemp] = useState([])
  const [loading, setLoading] = useState(true)
  const [param, setParam] = useState('our-foods')

  useEffect(() => {
    const getApiUrl = (params) =>{
      const url = `https://ig-food-menus.herokuapp.com/${params}`
      axios.get(url)
      .then((res) => {
          const data = res.data
          setProduct(data);
          setProductTemp(data)
          setLoading(false)
      })
      .catch(error => console.log(error))
    }
    getApiUrl(param)
  }, [param])

  const onChangeCategory = (value) => {
    setParam(value);
    setLoading(true)
  }
  const onChangePrice = (value) => {
    //lấy array temp để tái sử dụng không cần get api
    const filterTemp = [...productTemp]
    let filterPrice = []
    switch (value) {
      case '49':
        filterPrice = filterTemp.filter(e => e.price < 50)
        break;
      case '50':
        filterPrice = filterTemp.filter(e => e.price > 50 && e.price < 100)
        break;
      default:
        filterPrice = filterTemp.filter(e => e.price > 100)
        break;
    }
    setProduct([...filterPrice])
  }

  const onChangeSort = (value) => {
    setProduct(value);
  }
  const onChangeInput = (value) => {
    const filterTemp = [...productTemp]
    const filterSearch = filterTemp.filter(e => e.name.toLowerCase().includes(value))
    setProduct([...filterSearch])
  }

  const onClickProduct = (value) => {
    //send to app
    onDataSave(value)
  }
  return (
    <>
      <Banner title={'Product list'} subtitle={'Order'} />
      <section className="order">
        <div className="container">
          <div className="order-main">
            <Filter onChangeCategory={onChangeCategory} onChangePrice={onChangePrice} />
            <div className="order-right">
              <Search 
                data={product} 
                onChangeSort={onChangeSort} 
                onChangeInput={onChangeInput} 
              />
              {loading ? <Loading /> :<ProductList data={product} onClickProduct={onClickProduct} /> }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Order