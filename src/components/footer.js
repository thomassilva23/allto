import React from "react"

import "../../static/styles/main.scss"

import Icons from "./Icons"

import logo_footer from "../../static/images/logos/logo-footer.png"

const Footer = () => (
  <footer>
    <div className={"container"}>
      <div className={"copyright"}>
        <img src={logo_footer} alt="Allto Digital" />
      </div>
    </div>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-md-3"}>
          <div className={"col-md-push-2"}>
            <div className={"col-sm-3"}>
              <h4 className={"info"}>Telefone</h4>
              <p className={"desc"}>
                <a href={"tel:+5551984179025"}>(51) 98471.9025</a>
              </p>
            </div>
          </div>
        </div>

        <div className={"col-md-6"}>
          <div className={"col-md-pull-2"}>
            <div className={"col-sm-3"}>
              <h4 className={"info"}>Endereço</h4>
              <p className={"desc"}>
                <a href={"https://goo.gl/maps/Rm5tL1CwnTxbPv3H6"}>
                  Rua Nogueira, 115 <br /> Novo Hamburgo, RS | 93520-320
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={"col-md-3"}>
          <div className={"col-md-pull-2"}>
            <div className={"col-sm-3"}>
              <h4 className={"info"}>E-mail</h4>
              <p className={"desc"}>
                <a href={"mailto:contato@allto.digital"}>
                  contato@allto.digital
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className={"social"}>
        <li>
          <a href="https://fb.me/allto.digital" title={"Facebook"}>
            <Icons.Facebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/allto.digital/"
            title={"Instagram"}
          >
            <Icons.Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/allto-digital"
            title={"Linedkin"}
          >
            <Icons.Linkedin />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)
export default Footer
