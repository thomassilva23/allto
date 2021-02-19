import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Data from "../../content/clientes"

const ClienteSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  }

  return (
    <div className="sliderClientes">
      <Slider {...settings}>
        {Data.map(item => (
          <a className="sliderItem" key={item.title} href={item.channel}>
            <img src={item.picture} alt={item.title} />
          </a>
        ))}
      </Slider>
    </div>
  )
}

export default ClienteSlider
