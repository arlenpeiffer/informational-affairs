import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img253_01 from './photos/01.jpg';
import img253_02 from './photos/02.jpg';
import img253_03 from './photos/03.jpg';
import img253_04 from './photos/04.jpg';
import img253_05 from './photos/05.jpg';



const archive = [
  {
    images: [img253_01, img253_02, img253_03, img253_04, img253_05],
    id: 253,
    year: 1982,
    title: "ぎんざ1982",
    publisher: "東京: 日本リクルートセンター",
    tags: ['book', '1982', 'japan', 'tokyo', 'hardcover', 'spreads', 'cover', 'photography', 'ginza'],
  },
]

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Posts archive={archive} />
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {isVisible: false}
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-padding">
            {this.state.isVisible===false
              ? <div>
                  <h1 className="header-text" onClick={this.handleToggleVisibility}>Informational Affairs</h1>
                  <h1 className="header-text header-x" onClick={this.handleToggleVisibility}><span className="fake-link">( ? )</span></h1>
                </div>
              : <div>
                  <h1 className="header-text" onClick={this.handleToggleVisibility}><u>Informational Affairs</u> is an ever growing index of books collected by <u>Folder Studio</u>. I'm copying the whole thing for practice. <span className="fake-link">( x )</span></h1>
                </div>
            }
          </div>
        </div>
      </header>
    );
  }
}

function Posts(props) {
  return (
    <section>
      {props.archive.map((post, index, array) =>
        <Post
          images={post.images}
          id={post.id}
          year={post.year}
          title={post.title}
          publisher={post.publisher}
          tags={post.tags}
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
          <a href="#">{props.id}. <u>{props.title}</u>. {props.publisher}, {props.year}.</a>
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
