import React from "react"

import Icons from "../components/Icons"

class ContactForm extends React.Component {
  render() {
    return (
      <form
        name="contato"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contato" />

        <div className={"container"}>
          <div className={"input_form"}>
            <input type="text" name="field1" placeholder="Seu nome" />
            <input type="email" name="field2" placeholder="Email" />
            <textarea name="field3" placeholder="Escreva sua mensagem" />
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
    )
  }
}

export default ContactForm
