import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Posts />
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
        <div>
          {this.state.isVisible===false
            ? <div className="header-container">
                <h1 className="header-text" onClick={this.handleToggleVisibility}>Informational Affairs</h1>
                <h1 className="header-text" onClick={this.handleToggleVisibility}>( ? )</h1>
              </div>
            : <div className="header-container">
                <h1 className="header-text" onClick={this.handleToggleVisibility}>Informational Affairs is an ever growing index of books collected by <a href="#">Folder Studio</a>. I'm copying the whole thing for practice. ( x )</h1>
              </div>
          }
        </div>
      </header>
    );
  }
}

class Posts extends Component {
  render() {
    return (
      <section>
        <Post />
        <Post />
      </section>
    )
  }
}

class Post extends Component {
  render() {
    return (
      <div className="post">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default App;
