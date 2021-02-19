import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <div className={"container"}>
      <div className={"error"}>
        <h1>Endereço não encontrado</h1>
        <p>Desculpe, mas não pudemos encontrar nada relacionado à este link.</p>
        <p>
          Voltar a <Link to="/">página inicial</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
