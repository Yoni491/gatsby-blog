module.exports = {
    siteMetadata: {
        title:"Yonder.",
        author: "Yoni Ender",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve:'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        }
    ]
}