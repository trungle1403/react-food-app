import React, { useRef } from 'react'
import './Search.scss'
import { Input, Select  } from 'antd';
const Search = ({data, onChangeSort, onChangeInput}) => {
    const { Option } = Select;
    const typingHandleRef = useRef(null)

    function handleChange(value) {
        const dataTemp = [...data]
        switch (value) {
            case 'ascPrice':
                dataTemp.sort(function(a, b){return a.price-b.price});
                break;
            case 'descPrice':
                dataTemp.sort(function(a, b){return b.price-a.price});
                break;
            case 'ascRate':
                dataTemp.sort(function(a, b){return a.rate-b.rate});
                break;
            default:
                dataTemp.sort(function(a, b){return b.rate-a.rate});
                break;
        }
        onChangeSort(dataTemp)
    }

    const optionSort = [
        {
            name: 'Price: low to high',
            value: 'ascPrice'
        },
        {
            name: 'Price: high to low',
            value: 'descPrice'
        },
        {
            name: 'Rate: low to high',
            value: 'ascRate'
        },
        {
            name: 'Rate: high to low',
            value: 'descRate'
        },
    ]

    const handleInputChange = (e) => {
        const value = e.target.value
        if(typingHandleRef.current){
            clearTimeout(typingHandleRef.current)
        }
        typingHandleRef.current = setTimeout(() =>{
            onChangeInput(value)
        }, 300)
    }
    
    return (
        <>
            <section className="search">
                <Input placeholder="Search your food" 
                    onChange={handleInputChange} 
                />
                <Select defaultValue="Sort by" onChange={handleChange}>
                    {
                        optionSort.map((item,index) => (
                            <Option key={index} value={item.value}>{item.name}</Option>
                        ))
                    }
                </Select>
                <div className="search-display">
                    <i class='bx bxs-grid'></i>
                    <i class='bx bx-list-ul'></i>
                </div>
            </section>
        </>
    )
}

export default Search