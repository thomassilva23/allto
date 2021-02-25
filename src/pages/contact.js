import React from "react"

import { Helmet } from "react-helmet"

import Icons from "../components/Icons"

class ContactForm extends React.Component {
  render() {
    return (
      <>
        <form
          id="ajax_form"
          action="/thanks"
          name="contato"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
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

          <div id="resp" class="form_div" />
        </form>
        <Helmet>
          {/*jquery*/}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

          {/*função para não dar reload*/}
          <script type="text/javascript">{`
        {
          $(document).ready(function(){
            $("#ajaxform").submit(function(event){
              var postdata = ("#ajaxform").serialize();
              $.post("/thanks",postdata, function(response){
                $("#resp").show().html(response);
              })
              return false;
            })
          });
        }`}</script>
        </Helmet>
      </>
    )
  }
}

export default ContactForm
