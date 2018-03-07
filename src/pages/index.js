import React, { Component } from "react";
import "../components/index/index.css";
import BlogList from "../components/index/BlogList";

class Home extends Component {
  render() {
    console.log(this.props.data.allBlogPosts.edges);
    const data = this.props.data.allBlogPosts.edges;

    return (
      <div className="example">
        <BlogList data={data} />
      </div>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query FetchPosts {
    allBlogPosts {
      edges {
        node {
          id
          title
          content
          slug
          authors {
            id
            name
          }
          coverImage {
            id
            url
          }
        }
      }
    }
  }
`;
