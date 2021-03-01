import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import ContactForm from "../../pages/contact"
import styled, { createGlobalStyle } from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-y: ${({ nav }) => (nav ? "hidden" : "scroll")};
  }
`
const ContatoForm = styled.nav`
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: #001a43;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  transition: all 1500ms;
  transform: ${({ nav }) => (nav ? "translateY(0)" : "translateY(100%)")};
  opacity: ${({ nav }) => (nav ? "1" : "0")};
  z-index: 9998;

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
      color: #6ab4ff;
    }
  }
`

const ServiceSlider = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ServiceList {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(service)/" } }
      ) {
        edges {
          node {
            frontmatter {
              description
              title
              image
            }
          }
        }
      }
    }
  `)

  const [nav, showNav] = useState(false)

  const serviceList = allMarkdownRemark.edges

  return (
    <>
      <Global />
      <div className={"service"}>
        <article>
          {serviceList.map(
            ({
              node: {
                frontmatter: { description, title, image },
              },
            }) => (
              <React.Fragment>
                <figure>
                  <img src={image} alt={title} />
                </figure>
                <section>
                  <div>
                    <ScrollAnimation
                      animateIn="bounceInRight"
                      animateOut="bounceOutRight"
                      duration={2}
                    >
                      <h1>{title}</h1>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateIn="bounceInRight"
                      animateOut="bounceOutRight"
                      duration={3}
                    >
                      <p>
                        {description}

                        <div id="btn" nav={nav} onClick={() => showNav(!nav)}>
                          <span class="noselect">Saiba mais</span>
                          <div id="circle" />
                        </div>
                        <ContatoForm nav={nav}>
                          <ContactForm />
                          <div
                            id="btn_close"
                            nav={nav}
                            onClick={() => showNav(!nav)}
                          >
                            <span class="noselectClose">X</span>
                            <div id="circle" />
                          </div>
                        </ContatoForm>
                      </p>
                    </ScrollAnimation>
                  </div>
                </section>
              </React.Fragment>
            )
          )}
        </article>
      </div>
    </>
  )
}

export default ServiceSlider
