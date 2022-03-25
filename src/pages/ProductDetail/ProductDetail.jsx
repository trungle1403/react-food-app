import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {notification, Space} from 'antd'
import axios from 'axios';

import Banner from '../../components/Banner/Banner';
import Loading from '../../components/Loading/Loading';
import './ProductDetail.scss'
const ProductDetail = () => {
    const [api, contextHolder] = notification.useNotification();
    const Context = React.createContext();
    const openNotification = (placement) => {
        api.success({
            message: `Added Successfully`,
            placement,
        });
    };


    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getApiUrl = () =>{
            const url = `https://ig-food-menus.herokuapp.com/our-foods`
            axios.get(url)
            .then((res) => {
                const data = res.data
                const productFilter = data.filter(e => e.id === id)
                setProduct(productFilter[0]);
                setLoading(false)
            })
            .catch(error => console.log(error))
        }
        getApiUrl()
    }, [id])

    const [quality, setQuality] = useState(1)
    const handleChangeQuality = (value) => {
        setQuality(value)
    }
    
    return (
        <> {
            loading ? <Loading /> : 
            <>
            <Banner title='Product detail' subtitle={product.name} />
            <section className="product-detail">
                <div className="container">
                    <div className="product-detail-wrapper">
                        <div className="product-detail-media">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="product-detail-content">
                            <h3 className="product-detail-name">{product.name}</h3>
                            <p className="product-detail-desc">{product.dsc}</p>
                            {[...Array(product.rate)].map((index) => {        
                                return (         
                                    <i key={index} class='bx bxs-star star'></i>
                                );
                            })}
                            <span style={{marginLeft: '10px'}} >1069 review</span>
                            <div className="product-detail-price">${product.price}</div>
                            <div className="product-detail-button">
                                <div className='product-detail-button-wrapper'>
                                    <button className='product-detail-button-item'
                                    disabled ={quality === 1}
                                    onClick={() => handleChangeQuality(quality - 1)}>-</button>
                                    <span className='product-detail-button-quality'>{quality}</span>
                                    <button className='product-detail-button-item' 
                                    onClick={() => handleChangeQuality(quality + 1)}>+</button>
                                </div>
                                <Context.Provider>
                                {contextHolder}
                                    <Space >
                                        <button className="btn btn-icon-primary"
                                            onClick={() =>openNotification('bottomRight')}>
                                            <i class='bx bx-cart-add'></i>
                                            <span>Add to cart</span>
                                        </button>
                                    </Space>
                                </Context.Provider>
                                
                                <button className="btn btn-icon-second">
                                    <i class='bx bx-heart' ></i>
                                    <span>Wishlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
            }
        </>
    )
}

export default ProductDetail