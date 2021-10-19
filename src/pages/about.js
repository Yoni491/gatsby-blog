import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout";



const AboutPage = ()=>{
    return (
        <Layout>
            <h1>About me</h1>
            <p>I recently graduated from MTA and started to learn full stack<br/>
                subjects: js, html, css, react, angular, gatsby. I also touched mongoDB and php.<br/>
                At my degree I focused on C#, Java, Python, and also had expirence<br/>
                with AWS, linux, OpenCV.<br/>
                I also studied Unity and made a few games including one with VR.<br/>
                As my final project I made a Monogame game <br/>
                which included a C# multiplayer server and client.<br/>
            </p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
      )
    
}
export default AboutPage