import React from "react";
import { Link,graphql,useStaticQuery } from "gatsby";

const Footer = ()=>{
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
        }
    }
    }
    `)
    return (
    <footer>
        <h1>&#125;</h1>
        <p>Created by {data.site.siteMetadata.author}, ©2021</p>
    </footer>
    )
}

export default Footer