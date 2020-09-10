import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        You can contact me any time via email:{" "}
        <a href="mailto:gyarmatipeti01@gmail.com">gyarmatipeti01@gmail.com</a>
      </p>
      <h1>
        <Link to="https://github.com/peter-gy" target="blank">
          Check My GitHub Out!
        </Link>
      </h1>
    </Layout>
  )
}

export default ContactPage
