import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ClientSlider = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ClientList {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(clients)/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              description
              title
              image
              url
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
        {clientList.map(
          ({
            node: {
              frontmatter: { description, title, image, url },
            },
          }) => (
            <a className="sliderItem" key={title} href={url}>
              <img src={image} alt={description} />
            </a>
          )
        )}
      </Slider>
    </div>
  )
}

export default ClientSlider
