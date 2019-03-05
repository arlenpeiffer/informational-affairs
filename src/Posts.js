import React from "react";
import archive from "./archive";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOnPostTitle = this.handleClickOnPostTitle.bind(this);
    this.handleClickOnTag = this.handleClickOnTag.bind(this);
    this.state = {
      archive
    };
  }
  handleClickOnPostTitle = id => {
    this.setState({
      archive: this.state.archive.filter(post => post.id === id)
    });
  };
  handleClickOnTag = tag => {
    this.setState({
      archive: archive.filter(post => post.tags.includes(tag))
    });
  };
  render() {
    return (
      <section>
        {this.state.archive.map((post, index, array) => (
          <Post
            images={post.images}
            id={post.id}
            year={post.year}
            author={post.author}
            title={post.title}
            publisher={post.publisher}
            tags={post.tags}
            handleClickOnPostTitle={this.handleClickOnPostTitle}
            handleClickOnTag={this.handleClickOnTag}
          />
        ))}
      </section>
    );
  }
}

export default Posts;
