import React from "react"

import emailjs from "emailjs-com"

import { Button, Form, Input, TextArea } from "semantic-ui-react"

import Icons from "../components/Icons"

class ContactForm extends React.Component {
  render() {
    function sendEmail(event) {
      event.preventDefault()

      emailjs
        .sendForm(
          "service_4ydohfe",
          "template_nzmil1v",
          event.target,
          "user_OT4Z9rb1ENe582IVmyysq"
        )
        .then(
          (result) => {
            console.log(result.text)
            window.location.href = "/obrigado"
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
    return (
      <>
        <form name="contato" method="post" onSubmit={sendEmail}>
          <input type="hidden" name="form-name" value="contato" />

          <div className={"container"}>
            <div className={"input_form"}>
              <Form.Field
                control={Input}
                name="name"
                id="name"
                placeholder="Seu nome"
                required
              />
              <Form.Field
                control={Input}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <Form.Field
                control={TextArea}
                name="message"
                id="message"
                placeholder="Escreva sua mensagem"
                required
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
          <Button primary id="btn_send" type="submit" size="large" fluid>
            <span className={"noselect"}>Enviar</span>
            <div id="circle" />
          </Button>
        </form>
      </>
    )
  }
}

export default ContactForm
