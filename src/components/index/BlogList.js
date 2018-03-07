import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import Link from "gatsby-link";

class BlogList extends Component {
  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <Row className="blog-list-component">
        {data.map(item => (
          <Row className="post-list-item" key={item.node.id}>
            <Row className="post-list-cover">
              <img className="post-list-cover" src={item.node.coverImage.url} />
            </Row>
            <Row className="post-list-title">
              <h1>{item.node.title.toUpperCase()}</h1>
            </Row>
            <Row className="post-list-author">
              Written by:{" "}
              <span className="post-list-author-name">
                {item.node.authors[0].name}
              </span>
            </Row>
            <Row className="post-list-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: item.node.content.substring(-1, 500).concat("...")
                }}
              />
            </Row>
            <Row className="post-list-action">
              <Link to={`/${item.node.slug}`}>
                <Button>READ MORE</Button>
              </Link>
            </Row>
          </Row>
        ))}
      </Row>
    );
  }
}

export default BlogList;
