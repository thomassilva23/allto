import React from "react"

import Icons from "../components/Icons"
import SEO from "../components/seo"

class ThanksForm extends React.Component {
  render() {
    return (
      <>
        <SEO title="Obrigado" />
        <div className={"thanks_page"}>
          <h1>Obrigado!</h1>
          <p>
            Agradecemos por se inscrever em nosso site. <br />
            Clicando <a href={"/"}>aqui</a> , você será redirecionado à página
            inicial. <br />
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
      </>
    )
  }
}
export default ThanksForm
