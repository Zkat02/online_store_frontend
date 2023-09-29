import React from "react";
import Slider from "react-slick";
import styles from "./Sales.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sale1 from "../../img/sale1.jpg";
import sale2 from "../../img/sale2.jpg";
import sale3 from "../../img/sale3.jpg";

const Sales = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={sale1} alt="slide-1" className={styles.sliderImg} />
        </div>
        <div>
          <img src={sale2} alt="slide-2" className={styles.sliderImg} />
        </div>
        <div>
          <img src={sale3} salt="slide-3" className={styles.sliderImg} />
        </div>
      </Slider>
    </>
  );
};

export default Sales;
