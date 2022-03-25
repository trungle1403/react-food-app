import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { Skeleton,Alert } from 'antd';
import LazyLoad from 'react-lazyload'
import './ProductList.scss'

const ProductList = ({data, onClickProduct}) => {
    const listRef = useRef(null)
    const perLoad = 12 // items each load

    const [dataTemp, setDataTemp] = useState([])

    const [load, setLoad] = useState(false)

    const [index, setIndex] = useState(0)

    useEffect(() => {
        setDataTemp(data.slice(0, perLoad))
        setIndex(1)
    }, [data])
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (listRef && listRef.current) {
                if (window.scrollY + 200 >= listRef.current.clientHeight) {
                    // console.log("bottom reach")
                    setLoad(true)
                }
            }
        })
    }, [listRef])

    useEffect(() => {
        const getItems = () => {
            // số trang
            const pages = Math.floor(data.length / perLoad)
            const maxIndex = data.length % perLoad === 0 ? pages : pages + 1
            if (load && index <= maxIndex) {
                const start = perLoad * index
                // 12 * 1 , 12 * 2 = 24
                const end = start + perLoad
                //12 + 12 , 24 + 12 = 36
                // nối thêm các data tiếp theo từ data đầu tiên vào temp
                setDataTemp(dataTemp.concat(data.slice(start, end)))
                setIndex(index + 1)
            }
        }
        getItems()
        setLoad(false)
    }, [load, index, dataTemp, data])

    const handleClickProduct = () => {
        const dataSave = [...dataTemp]
        onClickProduct(dataSave)
    }
  return (
    <>
        <section className="product">
        { dataTemp && dataTemp.length > 0 ?
            <div className="product-main" ref={listRef}>
                <div className="product-list">
                {
                    dataTemp.map((item,index) => (
                        <LazyLoad 
                            once={true}
                            placeholder={<Skeleton active />}
                        >
                            <div key={index} className="product-item">
                                <div className="product-media">
                                    <Link 
                                        to={`/product/${item.id}`}
                                        onClick={handleClickProduct}
                                    >
                                        <img  src={item.img} alt="" />
                                    </Link>
                                    <div className="product-button">
                                        <div className="btn-like">
                                            <i class='bx bx-heart'></i>
                                        </div>
                                        <div className="btn-addToCart">
                                            <i class='bx bx-cart-add'></i>
                                        </div>
                                    </div>
                                </div>
                                <Link 
                                    to={`/product/${item.id}`}
                                    onClick={handleClickProduct}
                                    className="product-name"
                                >
                                        {item.name}
                                </Link>
                                <p className="product-desc">{item.dsc}</p>
                                <div className='product-bottom'>
                                    <div className="product-rate">
                                    {[...Array(item.rate)].map((index) => {        
                                        return (         
                                                <i key={index} class='bx bxs-star'></i>
                                                );
                                            })}
                                    </div>      
                                    <div className="product-price">${item.price}</div>
                                </div>
                            </div>
                        </LazyLoad>
                    ))
                    
                }
                </div>
            </div>
            : <Alert style={{width: '100% !important'}} message="No product found!!!" type="warning" />
        } 
        </section>
    </>
  )
}

export default ProductList