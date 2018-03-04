import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Col, Row } from 'antd';
import Author from '../components/blogpost/author.js';
import Post from '../components/blogpost/post.js';
import '../components/blogpost/style.css';

class BlogPost extends Component {
	render() {
		console.log(this.props.data);
		const data = this.props.data.blog_entry;
		const authors = this.props.data.blog_entry.authors;
		return (
			<Row className="post-grid">
				<Post data={data} />
				<Author data={authors} />
			</Row>
		);
	}
}

export default BlogPost;

export const pageQuery = graphql`
	query fetchpost($search_value: String!) {
		blog_entry: posts(slug: { eq: $search_value }) {
			title
			content
			authors {
				id
				name
				bibliography
				avatar {
					id
					url
				}
			}
			coverImage {
				id
				url
			}
		}
	}
`;
