import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"


const IndexPage = () => {
  return (
    <div>
      <Header/>
      <h1>Hello,</h1>
      <p>I'm Peter, a CS Student, studying in Austria, living in Hungary</p>
      <h2>Need a developer? <Link to="/contact">Contact me.</Link></h2>
      <Footer/>
    </div>
  );
};

export default IndexPage;