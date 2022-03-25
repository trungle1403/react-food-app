import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'
const Banner = ({title,subtitle}) => {
  return (
    <>
        <section className="banner">
            <div className="container">
                <div className="banner-title">{title}</div>
                <div className="banner-subtitle">
                    <Link to='/'>Home</Link>
                    <i class='bx bx-chevron-right'></i>
                    <span className='banner-name'>{subtitle}</span>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Banner