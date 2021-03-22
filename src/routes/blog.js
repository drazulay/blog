import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <div className="PostsContainer">
        <h1>Blog</h1>
        <p>
            A collection of interesting things
        </p>
        <div className="Post">
            <h2 className="PostTitle">Hello, world!</h2>
            <p className="PostBody">
                Coming soon..
            </p>
        </div>
      </div>
    );
  }
}

export default Blog;
