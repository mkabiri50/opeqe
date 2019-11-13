import React from "react";
import Slider from "react-slick";
const MyCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };
  return <Slider {...settings}>{props.children}</Slider>;
};

export default MyCarousel;
