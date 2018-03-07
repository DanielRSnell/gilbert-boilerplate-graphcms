import React, { Component } from "react";
import { Row, Col } from "antd";

class Author extends Component {
  render() {
    const data = this.props.data;
    console.log(this.props.data);
    return (
      <Row className="blog-author-section" span={24}>
        {data.map(item => (
          <Row className="author-item" key={item.id}>
            <Col className="author-image" span={6}>
              <img className="author-avatar" src={item.avatar.url} />
            </Col>
            <Col className="author-content" span={16}>
              <Row className="author-name">
                <span className="author-header">
                  <h1>{item.name}</h1>
                </span>
              </Row>
              <Row className="author-bio">
                {<div dangerouslySetInnerHTML={{ __html: item.bio }} />}
              </Row>
            </Col>
          </Row>
        ))}
      </Row>
    );
  }
}

export default Author;
