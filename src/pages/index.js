import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello,</h1>
      <p>I'm Peter, a CS Student, studying in Austria, living in Hungary</p>
      <h2>Need a developer? <Link to="/contact">Contact me.</Link></h2>
    </Layout>
  );
};

export default IndexPage;