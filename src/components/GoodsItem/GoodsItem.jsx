import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import s from './GoodsItem.module.css';

const GoodsItem = (props) => {
  const goodsStatus = useSelector((state) => state.goods.status);

  const {
    id = 1,
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGT2Pk-yjv0jM08EM-GAc1375XKD0VRklkAt4hwMrSUdajZSw-3FPKmk4tXKLNMMKJnw&usqp=CAU",
    title = "Solimo Coffee Beans 2 kg",
    country = null,
    price = "1",
    showCountry = true 
  } = props;

  const item = (
    <Link to={`/goods/${id}`}>
    <img src={image} alt="coffe" className={s.goodsItem_image}/>
    <p className={s.goodsItem_title}>{title}</p>
    {(showCountry == true) && <p className={s.goodsItem_country}>{country}</p>}
    <p className={s.goodsItem_price}>{`${price}$`}</p>
    </Link>
  )


  let content = goodsStatus === "loading" ? "Liading...." : item

  return (
    <div className={s.goodsItem_container}>
      {content}
    </div>
  )
};

export default GoodsItem;
