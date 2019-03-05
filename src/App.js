import React, { Component } from "react";
import Header from "./Header";
import Images from "./images/index";
import "./App.css";

const archive = [
  {
    images: [
      Images.img253_01,
      Images.img253_02,
      Images.img253_03,
      Images.img253_04,
      Images.img253_05
    ],
    id: 253,
    year: 1982,
    title: "ぎんざ1982",
    publisher: "東京: 日本リクルートセンター",
    tags: [
      "book",
      "1982",
      "japan",
      "tokyo",
      "hardcover",
      "spreads",
      "cover",
      "photography",
      "ginza"
    ]
  },
  {
    images: [
      Images.img252_01,
      Images.img252_02,
      Images.img252_03,
      Images.img252_04
    ],
    id: 252,
    year: 2002,
    author: "Joshua Tree National Park Association.",
    title: "Wildflowers of Joshua Tree National Park",
    publisher: "California: JTNPA",
    tags: [
      "brochure",
      "2002",
      "wildflowers",
      "joshua tree",
      "national park",
      "mojave",
      "desert",
      "spreads",
      "typography",
      "photography"
    ]
  },
  {
    images: [
      Images.img250_01,
      Images.img250_02,
      Images.img250_03,
      Images.img250_04
    ],
    id: 250,
    year: 1982,
    author: "Riehl, Rüdiger.",
    title: "Aquarium Atlas",
    publisher: "West Germany: Hans A. Baensch",
    tags: [
      "book",
      "1982",
      "fish",
      "aquarium",
      "hardcover",
      "cover",
      "spreads",
      "photography"
    ]
  },
  {
    images: [
      Images.img249_01,
      Images.img249_02,
      Images.img249_03,
      Images.img249_04,
      Images.img249_05,
      Images.img249_06
    ],
    id: 249,
    year: 1984,
    author: "Chatani, Masahiro.",
    title: "Pattern Sheets of Origamic Architecture",
    publisher: "Tokyo: Shokokusha",
    tags: [
      "book",
      "1984",
      "origami",
      "architecture",
      "cover",
      "spreads",
      "linework"
    ]
  },
  {
    images: [Images.img247_01],
    id: 247,
    year: 1984,
    author: "ノンノ・モア・ブックス.",
    title: "NON・NO クッキング・ブック PART 2: お弁当とおそうざいの本",
    publisher: "東京: 集英社",
    tags: [
      "magazine",
      "1984",
      "cooking",
      "bento",
      "softcover",
      "cover",
      "spreads",
      "photography"
    ]
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnPostTitle = this.handleClickOnPostTitle.bind(this);
    this.handleClickOnTag = this.handleClickOnTag.bind(this);
    this.handleReturnToFullArchive = this.handleReturnToFullArchive.bind(this);
    this.state = {
      archive: archive
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
  handleReturnToFullArchive() {
    this.setState({ archive: archive });
  }
  render() {
    return (
      <div>
        <Header handleReturnToFullArchive={this.handleReturnToFullArchive} />
        <Posts
          archive={this.state.archive}
          handleClickOnPostTitle={this.handleClickOnPostTitle}
          handleClickOnTag={this.handleClickOnTag}
        />
      </div>
    );
  }
}

function Posts(props) {
  return (
    <section>
      {props.archive.map((post, index, array) => (
        <Post
          images={post.images}
          id={post.id}
          year={post.year}
          author={post.author}
          title={post.title}
          publisher={post.publisher}
          tags={post.tags}
          handleClickOnPostTitle={props.handleClickOnPostTitle}
          handleClickOnTag={props.handleClickOnTag}
        />
      ))}
    </section>
  );
}

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

export default App;
