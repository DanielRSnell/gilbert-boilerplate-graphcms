module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-graphcms`,
			options: {
				endpoint: `https://api.graphcms.com/simple/v1/gilbert`,
				query: `{
        allPosts {
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
            bibliography
            avatar {
              id
              url
            }
          }
        }
      }`
			}
		},
		`gatsby-plugin-offline`,
		'gatsby-plugin-antd'
	]
};
