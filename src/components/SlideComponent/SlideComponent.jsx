import React from 'react'
import { WrapperSliderStyle } from './style';
import { Image } from 'antd';

const SlideComponent = ({ arrImage }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <WrapperSliderStyle {...settings}>
      { arrImage.map((image) => {
        return (
          <Image src={image} alt="slide" height="450px" preview={false} width="100%"  />
        )
      })}
    </WrapperSliderStyle>
  )
}

export default SlideComponent;
