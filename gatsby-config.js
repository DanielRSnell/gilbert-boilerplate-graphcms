module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/badpaints`,
        query: `{
					allBlogPosts {
						id
						title
						content
						slug
						coverImage {
							id
							url
						}
						authors {
							id
							name
							bio
							avatar {
								id
								url
								
							}
						}
					}
				}`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-WCVB7LS",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-antd"
  ]
};
