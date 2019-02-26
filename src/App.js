import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img253_01 from './images/253/253-01.jpg';
import img253_02 from './images/253/253-02.jpg';
import img253_03 from './images/253/253-03.jpg';
import img253_04 from './images/253/253-04.jpg';
import img253_05 from './images/253/253-05.jpg';
import img252_01 from './images/252/252-01.jpg';
import img252_02 from './images/252/252-02.jpg';
import img252_03 from './images/252/252-03.jpg';
import img252_04 from './images/252/252-04.jpg';
import img250_01 from './images/250/250-01.jpg';
import img250_02 from './images/250/250-02.jpg';
import img250_03 from './images/250/250-03.jpg';
import img250_04 from './images/250/250-04.jpg';
import img249_01 from './images/249/249-01.jpg';
import img249_02 from './images/249/249-02.jpg';
import img249_03 from './images/249/249-03.jpg';
import img249_04 from './images/249/249-04.jpg';
import img249_05 from './images/249/249-05.jpg';
import img249_06 from './images/249/249-06.jpg';
import img247_01 from './images/247/247-01.jpg';



const archive = [
  {
    images: [img253_01, img253_02, img253_03, img253_04, img253_05],
    id: 253,
    year: 1982,
    title: "ぎんざ1982",
    publisher: "東京: 日本リクルートセンター",
    tags: ['book', '1982', 'japan', 'tokyo', 'hardcover', 'spreads', 'cover', 'photography', 'ginza'],
  },
  {
    images: [img252_01, img252_02, img252_03, img252_04],
    id: 252,
    year: 2002,
    author: "Joshua Tree National Park Association.",
    title: "Wildflowers of Joshua Tree National Park",
    publisher: "California: JTNPA",
    tags: ['brochure', '2002', 'wildflowers', 'joshua tree', 'national park', 'mojave', 'desert', 'spreads', 'typography', 'photography'],
  },
  {
    images: [img250_01, img250_02, img250_03, img250_04],
    id: 250,
    year: 1982,
    author: "Riehl, Rüdiger.",
    title: "Aquarium Atlas",
    publisher: "West Germany: Hans A. Baensch",
    tags: ['book', '1982', 'fish', 'aquarium', 'hardcover', 'cover', 'spreads', 'photography'],
  },
  {
    images: [img249_01, img249_02, img249_03, img249_04, img249_05, img249_06],
    id: 249,
    year: 1984,
    author: "Chatani, Masahiro.",
    title: "Pattern Sheets of Origamic Architecture",
    publisher: "Tokyo: Shokokusha",
    tags: ['book', '1984', 'origami', 'architecture', 'cover', 'spreads', 'linework'],
  },
  {
    images: [img247_01],
    id: 247,
    year: 1984,
    author: "ノンノ・モア・ブックス.",
    title: "NON・NO クッキング・ブック PART 2: お弁当とおそうざいの本",
    publisher: "東京: 集英社",
    tags: ['magazine', '1984', 'cooking', 'bento', 'softcover', 'cover', 'spreads', 'photography'],
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleClickOnPostTitle = this.handleClickOnPostTitle.bind(this);
    this.handleClickOnTag = this.handleClickOnTag.bind(this);
    this.handleReturnToFullArchive = this.handleReturnToFullArchive.bind(this);
    this.state = {
      archive: archive,
      isVisible: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }
  handleClickOnPostTitle = id => {
    this.setState({
      archive: this.state.archive.filter((post) => post.id === id),
    });
  }
  handleClickOnTag = tag => {
    this.setState({
      archive: archive.filter((post) => post.tags.includes(tag)),
    });
  }
  handleReturnToFullArchive() {
    this.setState({ archive: archive });
  }
  render() {
    return (
      <div>
        <Header
          isVisible={this.state.isVisible}
          handleToggleVisibility={this.handleToggleVisibility}
          handleReturnToFullArchive={this.handleReturnToFullArchive}
        />
        <Posts 
          archive={this.state.archive}
          handleClickOnPostTitle={this.handleClickOnPostTitle}
          handleClickOnTag={this.handleClickOnTag}
        />
      </div>
    );
  }
}

function Header(props) {
  return (
    <header>
      <div className="header-container">
        <div className="header-padding">
          {props.isVisible===false
            ? <div>
                <h1 className="header-text" onClick={props.handleReturnToFullArchive}><span className="fake-link">Informational Affairs</span></h1>
                <h1 className="header-text header-x" onClick={props.handleToggleVisibility}><span className="fake-link">( ? )</span></h1>
              </div>
            : <div>
                <h1 className="header-text"><u onClick={props.handleToggleVisibility}>Informational Affairs</u> is an ever growing index of books collected by <u>Folder Studio</u>. I'm copying the whole thing for practice. <span className="fake-link" onClick={props.handleToggleVisibility}>( x )</span></h1>
              </div>
          }
        </div>
      </div>
    </header>
  );
}


function Posts(props) {
  return (
    <section>
      {props.archive.map((post, index, array) =>
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
      )}
    </section>
  )
}

function Post(props) {
  return (
    <article>
      <div className="images">
        {props.images.map((image) => <img src={image} />)}
      </div>
      <div className="text">
        <div className="info">
          <a href="#" onClick={() => {props.handleClickOnPostTitle(props.id)}}>{props.id}. {props.author} <u>{props.title}</u>. {props.publisher}, {props.year}.</a>
        </div>
        <ul className="tags">
          {props.tags.map((tag, index) => <li><a href="#" onClick={() => props.handleClickOnTag(tag)}>{tag}</a></li>
          )}
        </ul>
      </div>
    </article>
  );
}

export default App;
