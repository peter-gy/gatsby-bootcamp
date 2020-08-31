import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <h1>About</h1>
            <p>About text...</p>
            <h1><Link to="/contact">Let's Get In Contact!</Link></h1>
            <Footer/>
        </div>
    );
};

export default AboutPage;
