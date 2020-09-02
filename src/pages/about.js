import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>About text...</p>
            <h1><Link to="/contact">Let's Get In Contact!</Link></h1>
        </Layout>
    );
};

export default AboutPage;
