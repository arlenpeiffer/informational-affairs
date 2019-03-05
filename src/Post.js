import React from "react";

function Post(props) {
  return (
    <article>
      <div className="images">
        {props.images.map(image => (
          <img src={image} />
        ))}
      </div>
      <div className="text">
        <div className="info">
          <a
            href="#"
            onClick={() => {
              props.handleClickOnPostTitle(props.id);
            }}
          >
            {props.id}. {props.author} <u>{props.title}</u>. {props.publisher},{" "}
            {props.year}.
          </a>
        </div>
        <ul className="tags">
          {props.tags.map((tag, index) => (
            <li>
              <a href="#" onClick={() => props.handleClickOnTag(tag)}>
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
