import React from 'react'
import { Spin } from 'antd';
import './Loading.scss'
const Loading = () => {
  return (
    <section className="loading">
        <Spin className='loading-bar' tip='loading...' />
    </section> 
  )
}

export default Loading