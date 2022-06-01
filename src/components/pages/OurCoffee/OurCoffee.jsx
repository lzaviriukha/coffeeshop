import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import GoodsList from "../../GoodsList/GoodsList";
import BeansLogo from "../../Icons/BeansLogo";
import img from './mainImg.jpg'

import FiltersButton from "../../FiltersButton/FiltersButton";
import {
  selectAllGoods,
  selectGoodsByFilter,
  selectGoodsByInput,
} from "../../../features/goods/goodsSlice";

import s from "./OurCoffee.module.css";

const OurCoffee = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const allGoodsData = useSelector(selectAllGoods);
  const searchData = useSelector((state) =>
    selectGoodsByInput(state, inputValue)
  );
  const filterData = useSelector((state) =>
    selectGoodsByFilter(state, activeButton)
  );

  let viewData = activeButton
    ? filterData
    : inputValue
    ? searchData
    : allGoodsData;

  const onClick = (value) => {
    setInputValue("");
    setActiveButton(value);
  };

  const handleOnChange = (evt) => {
    setActiveButton(null);
    setInputValue(evt.target.value);
  };

  return (
    <div className={s.page_container}>
      <Header>
        <h1>Our Coffee</h1>
      </Header>
      <main className={s.main_content}>
      {about_goods}
      <div className={s.line}></div>
        <div className={s.search_group}>
          <div className={s.input_pannel}>
            <p>Lookiing for</p>
            <input
              type="text"
              placeholder="start typing here..."
              className={s.input}
              value={inputValue}
              onChange={handleOnChange}
            />
          </div>
          <div className={s.button_group_container}>
            <p>Or filter</p>
            <div className={s.button}>
              <FiltersButton
                value={"Brazil"}
                onClick={onClick}
                activeButton={activeButton}
              />
              <FiltersButton
                value={"Columbia"}
                onClick={onClick}
                activeButton={activeButton}
                className={s.btn}
              />
              <FiltersButton
                value={"Kenya"}
                onClick={onClick}
                activeButton={activeButton}
              />
            </div>
          </div>
        </div>
        <div className={s.goodsList_container}>
          <GoodsList data={viewData} classes={s.goodsItem__bg} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const about_goods = (
  <div className={s.about_goods_container}>
    <img src={img} alt="" />
    <div className={s.about_info}>
      <h3>About us</h3>
      <p className={s.beansLogo_aboutUs}>
        <BeansLogo fill="black" stroke="black" />
      </p>
      <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>

           Afraid at highly months do things on at. Situation recommend objection do intention<br/>
           so questions. <br/>

           As greatly removed calling pleased improve an. Last ask him cold feel<br/>
           met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
           is song that held help face.</p>
    </div>
  </div>
);

export default OurCoffee;
