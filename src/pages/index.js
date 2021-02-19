import React from "react"

import Layout from "../components/layout"
import ClienteSlider from "../components/slider"
import WhatsappApi from "../components/wpp"
import Scroll from "../components/scroll"
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

      <ClienteSlider />

      <Scroll />
    </Layout>
  )
}

export default IndexPage
