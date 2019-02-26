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
]

class App extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleClickOnPostTitle = this.handleClickOnPostTitle.bind(this);
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
                <h1 className="header-text" onClick={props.handleReturnToFullArchive}>Informational Affairs</h1>
                <h1 className="header-text header-x" onClick={props.handleToggleVisibility}><span className="fake-link">( ? )</span></h1>
              </div>
            : <div>
                <h1 className="header-text"><u>Informational Affairs</u> is an ever growing index of books collected by <u>Folder Studio</u>. I'm copying the whole thing for practice. <span className="fake-link" onClick={props.handleToggleVisibility}>( x )</span></h1>
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
          {props.tags.map((tag, index) => <li><a href="#">{tag}</a></li>
          )}
        </ul>
      </div>
    </article>
  );
}

export default App;
