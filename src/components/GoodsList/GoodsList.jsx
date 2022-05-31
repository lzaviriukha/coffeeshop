import React from 'react'
import GoodsItem from '../GoodsItem/GoodsItem';
import s from './GoodsList.module.css'

const GoodsList = (props) => {
  const {data, showCountry} = props;

  const goodsList = data.map((item) => {
    console.log(item)
    item = {...item, showCountry}
    return (
      <GoodsItem key={item.id} {...item}/>
    )
  })
  return (
    <div className={s.goodsList_container}>
      {goodsList}
    </div>
  )
}

export default GoodsList
