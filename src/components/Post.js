import React from "react";
import archive from "../archive";

function Post(props) {
  const post = archive.find(post => post.id === props.id);
  return (
    <article>
      <div className="images">
        {post.images.map(image => (
          <img src={image} />
        ))}
      </div>
      <div className="information-container">
        <div className={"information " + post.color}>
          <a
            href="#"
            onClick={() => {
              props.onClick(post => post.id === props.id);
            }}
          >
            {post.id}. {post.author} <u>{post.title}</u>. {post.publisher},{" "}
            {post.year}.
          </a>
        </div>
        <ul className="tags">
          {post.tags.map(tag => (
            <li className={post.color}>
              <a
                href="#"
                onClick={() => props.onClick(post => post.tags.includes(tag))}
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Post;
