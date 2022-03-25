import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './Header.scss'
import img from '../../images/category/chicken.svg'
const Header = () => {
    const menuLink = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Order',
            link: '/order'
        },
        {
            name: 'New',
            link: '/new'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
    ]
    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if( document.body.scrollTop  > 100 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky');
            }else{
                headerRef.current.classList.remove('sticky');
            }
        })
        return () => {
            window.removeEventListener('scroll');
        };
    }, [])
  return (
    <>
        <header className='header'  ref={headerRef}>
            <div className="container">
                <div className="header-main">
                    <Link to='/'><img src={logo} alt="logo" className='header-logo'/></Link>
                    <ul className="header-menu">
                        {
                            menuLink.map((item,index ) =>(
                                <li key={index} className='header-item'>
                                    <Link className='header-link' to={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="header-group">
                        <div className="header-cart">
                            <Link to='cart' className='header-cart-btn'> <i class='bx bx-cart'></i></Link>
                            <ul className="header-cart-list">
                                <li className="header-cart-item">
                                    <div className="header-cart-wrapper">
                                        <img src={img} alt="product cart item" />
                                        <div className="header-cart-detail">
                                            <h5 className="header-cart-name">Red black</h5>
                                            <p className="header-cart-price">$232</p>
                                        </div>
                                    </div>
                                    <div className="header-cart-wrapper">
                                        <div className="header-cart-qty">
                                            <span className="header-cart-qty-number">2</span>
                                            <div className="qty-wrapper">
                                                <button className="qty-add">+</button>
                                                <button className="qty-minus">-</button>
                                            </div>
                                        </div>
                                        <div className="header-cart-delete">
                                            <i className="bx bxs-trash"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <Link to='signin'> Sign in </Link>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header