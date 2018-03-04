import React, { Component } from 'react';
import { Col, Row } from 'antd';
import BlogList from '../components/index/BlogList.js';
import '../components/index/index.css';

class Home extends Component {
	render() {
		console.log(this.props.data.posts.edges);
		const data = this.props.data.posts.edges;
		return (
			<Row className="post-list">
				<BlogList data={data} />
			</Row>
		);
	}
}

export default Home;

export const pageQuery = graphql`
	query fetchAllPosts {
		posts: allPosts {
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
