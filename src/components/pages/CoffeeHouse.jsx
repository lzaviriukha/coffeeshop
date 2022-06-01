import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectReccommendGoods } from "../../features/goods/goodsSlice";

import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import BeansLogo from "../Icons/BeansLogo";

import GoodsList from "../GoodsList/GoodsList";

import s from "./CoffeeHouse.module.css";
import Footer from "../Footer/Footer";

const CoffeeHouse = () => {
  const goods = useSelector(selectReccommendGoods);
  const goodsStatus = useSelector((state) => state.goods.status);
  const error = useSelector((state) => state.goods.error);

  let content;

  if (goodsStatus === "loading") {
    content = "Loading......";
  } else if (goodsStatus === "succeeded") {
    content = <GoodsList data={goods} showCountry={false} />;

    // posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date))

    // content = orderedPosts.map(post => (
    //   <PostExcerpt key={post.id} post={post} />
    // ))
  } else if (goodsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className={s.coffeHouse_container}>
      <Header>{headerContent}</Header>
      <div className={s.aboutUs__container}>{aboutUsContent}</div>
      <div className={s.best_goods}>
        <h3>Our best</h3>
        {content}
      </div>
      <Footer />
    </div>
  );
};

const headerContent = (
  <>
    <h1 className={s.headerTitle}>Everything You Love About Coffee</h1>
    <p className={s.beansLogo_heder}>
      <BeansLogo />
    </p>
    <p className={s.headerText}>
      We makes every day full of energy and taste
      <br />
      Want to try our beans?
    </p>
    <Link to="ourcoffee" className={s.more_link}>
      More
    </Link>
  </>
);

const aboutUsContent = (
  <>
    <h3>About us</h3>
    <p className={s.beansLogo_aboutUs}>
      <BeansLogo fill="black" stroke="black" />
    </p>
    <p>
      Extremity sweetness difficult behaviour he of. On disposal of as landlord
      horrible.
      <br />
      Afraid at highly months do things on at. Situation recommend objection do
      intention
      <br />
      so questions. As greatly removed calling pleased improve an. Last ask him
      cold feel
      <br />
      met spot shy want. Children me laughing we prospect answered followed. At
      it went
      <br />
      is song that held help face.
    </p>
    <p>
      Now residence dashwoods she excellent you. Shade being under his bed her,
      Much
      <br />
      read on as draw. Blessing for ignorant exercise any yourself unpacked.
      Pleasant
      <br />
      horrible but confined day end marriage. Eagerness furniture set preserved
      far
      <br />
      recommend. Did even but nor are most gave hope. Secure active living
      depend son
      <br />
      repair day ladies now.
    </p>
  </>
);


export default CoffeeHouse;
