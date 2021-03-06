import React from "react";
import archive from "../archive";
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
    const archiveLength = archive.length;
    const currentLength = this.state.archive.length;
    const lastPost = this.state.archive[currentLength - 1];

    return (
      <section>
        {this.state.archive.map(post => (
          <Post id={post.id} onClick={this.onClick} />
        ))}
        {currentLength !== archiveLength && (
          <div className={"return " + lastPost.color}>
            <a
              onClick={() => {
                this.onClick(archive => archive);
              }}
            >
              return to full archive
            </a>
          </div>
        )}
      </section>
    );
  }
}

export default Posts;
