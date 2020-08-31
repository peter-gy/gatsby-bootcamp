import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>About text...</p>
            <h1><Link to="/contact">Let's Get In Contact!</Link></h1>
        </Layout>
    );
};

export default AboutPage;
