import React from "react";
import archive from "./archive";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      archive
    };
  }
  onClick = filterBy => {
    this.setState({ archive: archive.filter(filterBy) });
  };
  render() {
    return (
      <section>
        {this.state.archive.map(post => (
          <Post id={post.id} onClick={this.onClick} />
        ))}
        {this.state.archive.length !== archive.length && (
          <p
            onClick={() => {
              this.onClick(archive => archive);
            }}
          >
            return to full archive
          </p>
        )}
      </section>
    );
  }
}

export default Posts;
