import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>Contact info...</p>
            <h1><Link to="https://github.com/peter-gy" target="blank">Check Me Out!</Link></h1>
        </Layout>
    );
};

export default ContactPage;