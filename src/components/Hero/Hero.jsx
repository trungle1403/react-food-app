import React from 'react'

import img1 from '../../images/home/banner1.jpg'
import img2 from '../../images/home/banner2.jpg'
import img3 from '../../images/home/banner3.jpg'

import './Hero.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom'

const Hero = () => {
    const slides = [
        {
            title: 'Good food is wise medicine',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores architecto est aliquam iste beatae dicta doloremque corporis repellat.',
            img: img1
        },
        {
            title: 'Love at first bite',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores architecto est aliquam iste beatae dicta doloremque corporis repellat.',
            img: img2
        },
        {
            title: 'The belly rules the mind',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores architecto est aliquam iste beatae dicta doloremque corporis repellat.',
            img: img3
        },
    ]
  return (
    <>
        <section className="hero">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: false }}
                scrollbar={{ draggable: false }}
                >
                {
                    slides.map((item,index) => (
                        <SwiperSlide className='hero-slide' key={index}>
                            <img className='hero-img' src={item.img} alt="banner" />
                            <div className="hero-content">
                                <div className="container">
                                    <div className="hero-main">
                                        <div className="hero-title">{item.title}</div>
                                        <div className="hero-subtitle">{item.subtitle}</div>
                                        <Link to='order' className='btn-primary hero-btn'>Order now</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    </>
  )
}

export default Hero