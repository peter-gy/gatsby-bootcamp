import React from "react"
import { Link } from "gatsby"

import Footer from '../components/footer'
import Header from "../components/header"

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact</h1>
            <p>Contact info...</p>
            <h1><Link to="https://github.com/peter-gy" target="blank">Check Me Out!</Link></h1>
            <Footer/>
        </div>
    );
};

export default ContactPage;