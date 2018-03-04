import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Post extends Component {
	render() {
		const data = this.props.data;
		return (
			<Row className="blog-post-section">
				<Row className="blog-post-header">
					<h1>{data.title ? data.title.toUpperCase() : 'Unknown'}</h1>
				</Row>
				<Row className="blog-post-cover">
					<img className="blog-post-featured" src={data.coverImage.url} />
				</Row>
				<Row className="blog-post-content">
					<div dangerouslySetInnerHTML={{ __html: data.content }} />
				</Row>
			</Row>
		);
	}
}

export default Post;
