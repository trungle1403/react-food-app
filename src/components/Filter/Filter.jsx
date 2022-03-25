import React, { useState } from 'react'
import { Divider } from 'antd';
import { Radio } from 'antd';
import './Filter.scss'
import icon1 from '../../images/category/dinner.svg'
import icon2 from '../../images/category/burger.svg'
import icon3 from '../../images/category/juice.svg'
import icon4 from '../../images/category/pizza.svg'
import icon5 from '../../images/category/lunch.svg'
import icon6 from '../../images/category/chicken.svg'
import icon7 from '../../images/category/pork.svg'
const Filter = ({onChangeCategory, onChangePrice}) => {

    const [radioPrice, setRadioPrice] = useState(0)
    const filterCategory = [
        {
            name: 'best-foods',
            img: icon1,
        },
        {
            name: 'burgers',
            img: icon2,
        },
        {
            name: 'drinks',
            img: icon3,
        },
        {
            name: 'pizzas',
            img: icon4,
        },
        {
            name: 'desserts',
            img: icon5,
        },
        {
            name: 'fried-chicken',
            img: icon6,
        },
        {
            name: 'porks',
            img: icon7,
        },
    ]

    const filterPrice = [
        {
            name: 'Under $50',
            value: '49'
        },
        {
            name: '$50 to $100',
            value: '50'
        },
        {
            name: 'Above $100',
            value: '101'
        },
    ]

    const handleChangeCategory = (e) => {
        const category = e.target.value;
        onChangeCategory(category)
        setRadioPrice(0)
    }
    const handleChangePrice = (e) => {
        const price = e.target.value;
        onChangePrice(price)
    }
  return (
    <>
        <section className="filter">
            <Divider orientation="left" plain className="filter-title">
                Categories
            </Divider>
            <ul className="filter-list">
                {
                    filterCategory.map((item,index) => (
                        <div>
                            <input type="radio" onChange={handleChangeCategory}
                            className='radio-category' name='radio-category'
                            id={item.name} value={item.name} />
                            <label for={item.name} key={index} className="filter-item">
                                <img src={item.img} alt="filter-icon" />
                                <span>{item.name}</span>
                            </label>
                        </div>
                    ))
                }
            </ul>
            <Divider orientation="left" plain className="filter-title">
                Price
            </Divider>
            <Radio.Group 
                defaultValue={radioPrice} 
                name="radio-price" 
                onChange={handleChangePrice} 
                className='filter-price'>
                {
                    filterPrice.map((item,index) => (
                        <Radio key={index} value={item.value}>{item.name}</Radio>
                    ))
                }
            </Radio.Group>

        </section>
    </>
  )
}
export default Filter