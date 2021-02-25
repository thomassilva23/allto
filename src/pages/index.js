import React from "react"

import Layout from "../components/layout"
import ClientSlider from "../components/body/slider"
import WhatsappApi from "../components/contact/wpp"
import Scroll from "../components/body/scroll"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

import Typewriter from "typewriter-effect"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        {/*jquery*/}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js" />
        {/*função logo*/}
        <script type="text/javascript">{`
        {
            $(function() { var logo = $(".logo"); $(window).scroll(function() {
              var scroll = $(window).scrollTop();
            
                if (scroll > 700) {
                  if(!logo.hasClass("sml-logo")) {
                    logo.hide();
                    logo.removeClass("logo").addClass("sml-logo").fadeIn( "slow");
                  }
                } else {
                  if(!logo.hasClass("logo")) {
                    logo.hide();
                    logo.removeClass("sml-logo").addClass("logo").fadeIn( "slow");
                  }
                }
            
              });
            }); 
        }`}</script>
      </Helmet>
      <Layout>
        <SEO title="Allto Digital" />
        <div className={"page-header home"}>
          <h1>
            Digitalização e automação <br /> de processos
            <Typewriter
              options={{
                strings: [
                  "industriais",
                  "administrativos",
                  "financeiros",
                  "de RH",
                  "e outras áreas de back-office",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <br />
        </div>

        <WhatsappApi />

        <ClientSlider />

        <Scroll />
      </Layout>
    </>
  )
}

export default IndexPage
