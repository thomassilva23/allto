import React from "react"

import Layout from "../components/layout"
import ClientSlider from "../components/body/slider"
import WhatsappApi from "../components/contact/wpp"
import Scroll from "../components/body/scroll"
import SEO from "../components/seo"

import Typewriter from "typewriter-effect"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Allto Digital" />
      <div className={"page-header home"}>
        <h1>
          <Typewriter
            options={{
              strings: ["Allto Digital", "conecta", "você"],
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
  )
}

export default IndexPage
