import React from 'react'
import img1 from '../../images/category/burger.svg'
import img2 from '../../images/category/chicken.svg'
import img3 from '../../images/category/coffee.svg'
import img4 from '../../images/category/dinner.svg'
import img5 from '../../images/category/juice.svg'
import img6 from '../../images/category/lunch.svg'
import img7 from '../../images/category/pizza.svg'
import img8 from '../../images/category/pork.svg'
import './Category.scss'
const Category = () => {

    const categorys = [
        {
            name: 'burger',
            img: img1,
        },
        {
            name: 'chicken',
            img: img2,
        },
        {
            name: 'coffee',
            img: img3,
        },
        {
            name: 'dinner',
            img: img4,
        },
        {
            name: 'drink',
            img: img5,
        },
        {
            name: 'juice',
            img: img6,
        },
        {
            name: 'pizza',
            img: img7,
        },
        {
            name: 'pork',
            img: img8,
        },
    ]
  return (
    <>
        <section className="category">
            <div className="container">
                <div className="category-main">
                <div className="section-title">Category</div>
                <div className="category-list">
                {
                        categorys.map((item,index) => (
                            <div key={index} className='category-slide' >
                                <img src={item.img} alt="category" />
                                <h5 className='category-name'>{item.name}</h5>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Category