import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>About text...</p>
            <h1><Link to="/contact">Let's Get In Contact!</Link></h1>
        </div>
    );
};

export default AboutPage;
