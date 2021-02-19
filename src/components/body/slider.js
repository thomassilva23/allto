import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Data from "../../content/clients"

const ClientSlider = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ClientList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `)

  const clientList = allMarkdownRemark.edges

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
    <div className="sliderClients">
      <Slider {...settings}>
        {clientList.map({
          node: { frontmatter: { title, slug, date } },
        })}
        {Data.map(item => (
          <a className="sliderItem" key={item.title} href={item.channel}>
            <img src={item.picture} alt={item.title} />
          </a>
        ))}
      </Slider>
    </div>
  )
}

export default ClientSlider
