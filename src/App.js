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
        <div className="header-container">
          <div className="header-container-2">
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
