import React, { useState } from "react"

import ContactForm from "../../pages/contact"
import styled, { createGlobalStyle } from "styled-components"

import img01 from "../../../static/images/scroll/digital1.jpg"
import img02 from "../../../static/images/scroll/phydigital1.jpg"
import img03 from "../../../static/images/scroll/sites1.jpg"
import img04 from "../../../static/images/scroll/social1.jpg"

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
  transition: all 2000ms;
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
const Scroll = () => {
  const [nav, showNav] = useState(false)
  return (
    <>
      <Global />
      <div className={"service"}>
        <article>
          <figure>
            <img alt="RV" src={img01} />
          </figure>
          <section>
            <div>
              <h1>Digitalização</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus condimentum bibendum. In at cursus neque. Nullam
                maximus, justo sit amet dictum porta, ligula nisl sodales diam,
                sed congue ipsum velit quis ipsum. Nulla id mollis lectus.{" "}
                <br />
                <div id="btn" nav={nav} onClick={() => showNav(!nav)}>
                  <span class="noselect">Saiba mais</span>
                  <div id="circle" />
                </div>
                <ContatoForm nav={nav}>
                  <ContactForm />
                </ContatoForm>
              </p>
            </div>
          </section>

          <figure>
            <img alt="Social" src={img02} />
          </figure>
          <section>
            <div>
              <h1>Redes sociais</h1>
              <p>
                Plano de mídia social com criação das peças/conteúdos e
                publicações nas principais redes como Instagram, Facebook e
                Linkedin. Impulsionamento de posts.
                <br />
                <div id="btn" nav={nav} onClick={() => showNav(!nav)}>
                  <span class="noselect">Saiba mais</span>
                  <div id="circle" />
                </div>
                <ContatoForm nav={nav}>
                  <ContactForm />
                </ContatoForm>
              </p>
            </div>
          </section>

          <figure>
            <img alt="E-commerce" src={img03} />
          </figure>
          <section>
            <div>
              <h1>Sites institucionais e lojas virtuais</h1>
              <p>
                Focada na experiencia do usuário, criamos seu site ou loja
                online.
                <br />
                <div id="btn" nav={nav} onClick={() => showNav(!nav)}>
                  <span class="noselect">Saiba mais</span>
                  <div id="circle" />
                </div>
                <ContatoForm nav={nav}>
                  <ContactForm />
                </ContatoForm>
              </p>
            </div>
          </section>

          <figure>
            <img alt="Phydigital" src={img04} />
          </figure>
          <section>
            <div>
              <h1>Phydigital (NFC, cartão)</h1>
              <p>
                Utilização de tecnologia NFC para exibição de conteúdo através
                da aproximação do celular em totens/cartões ou outros materiais
                físicos ou impressos.
                <br />
                <div id="btn" nav={nav} onClick={() => showNav(!nav)}>
                  <span class="noselect">Saiba mais</span>
                  <div id="circle" />
                </div>
                <ContatoForm nav={nav}>
                  <ContactForm />
                  <div id="btn_close" nav={nav} onClick={() => showNav(!nav)}>
                    <span class="noselect">X</span>
                    <div id="circle" />
                  </div>
                </ContatoForm>
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}
export default Scroll
