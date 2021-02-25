import React from "react"

import WhatsappApi from "../components/contact/wpp"
import Header from "../components/elements/header"
import Icons from "../components/Icons"

const Thanks = () => {
  return (
    <>
      <Header />
      <div className={"thanks_page"}>
        <h1>Obrigado!</h1>
        <p>
          Agradecemos por se inscrever em nosso site. <br />
          Clicando 👉 <a href={"/"}>aqui</a> 👈, você será redirecionado à
          página inicial. <br />
          Visite-nos nas redes sociais! Postamos várias novidades lá.
        </p>
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
      <WhatsappApi />
    </>
  )
}
export default Thanks
