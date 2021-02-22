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
            fields {
              slug
            }
            frontmatter {
              date
              description
              title
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
        {Data.map(item => (
          <a className="sliderItem" key={item.title} href={item.channel}>
            <img src={item.picture} alt={item.title} />
          </a>
        ))}
      </Slider>

      {clientList.map(
        ({
          node: {
            frontmatter: { date, description, title },
            fields: { slug },
          },
        }) => (
          <div
            slug={slug}
            date={date}
            description={description}
            title={title}
          />
        )
      )}
    </div>
  )
}

export default ClientSlider
