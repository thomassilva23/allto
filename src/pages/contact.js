import React from "react"

import Icons from "../components/Icons"

class ContactForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      view: "form",
    }
  }

  submited = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: this.state.description }),
    })

    this.setState({
      view: "thanks",
    })
  }

  render() {
    if (this.state.view === "form")
      return (
        <>
          <form
            id="ajax_form"
            name="contato"
            method="post"
            data-netlify="true"
            onSubmit={this.submited}
          >
            <input type="hidden" name="form-name" value="contato" />

            <div className={"container"}>
              <div className={"input_form"}>
                <input
                  type="text"
                  name="field1"
                  id="name"
                  placeholder="Seu nome"
                />
                <input
                  type="email"
                  name="field2"
                  id="email"
                  placeholder="Email"
                />
                <textarea
                  name="field3"
                  id="message"
                  placeholder="Escreva sua mensagem"
                />
              </div>
              <div className={"data_form"}>
                <h2>Contate-nos!</h2>
                <p>
                  Gostaríamos muito de ouvir o que você tem a dizer.
                  <br />
                  Entraremos em contato com você dentro de 24 horas!
                  <br />
                  Fique ligado na sua caixa de emails.
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
            </div>
            <button id="btn_send" type="submit">
              <span class="noselect">Enviar</span>
              <div id="circle" />
            </button>
          </form>
        </>
      )
    if (this.state.view === "thanks")
      return (
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
      )
    return <div />
  }
}

export default ContactForm
