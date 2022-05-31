import React, { useState } from "react";
import { useSelector } from "react-redux";
import GoodsList from "../../GoodsList/GoodsList";
import FiltersButton from "../../FiltersButton/FiltersButton";
import {
  selectAllGoods,
  selectGoodsByFilter,
} from "../../../features/goods/goodsSlice";

import s from "./OurCoffee.module.css";

const OurCoffee = () => {
  const [activeButton, setActiveButton] = useState(null);
  const filterData = useSelector((state) =>
    selectGoodsByFilter(state, activeButton)
  );
  const allGoodsData = useSelector(selectAllGoods);

  let viewData = activeButton ? filterData : allGoodsData;

  const onClick = (value) => {
    setActiveButton(value);
  };

  return (
    <div className={s.page_container}>
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
      <GoodsList data={viewData} />
    </div>
  );
};

export default OurCoffee;
