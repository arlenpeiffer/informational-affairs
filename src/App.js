import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
      </div>
    );
  }
}

const headerHidden = <h1 className="header">Informational Affairs</h1>;
const headerShown = (
  <h1 className="header">
    Informational Affairs is an ever growing index of books collected by <a href="#">Folder Studio</a>. I'm copying the whole thing for practice.
  </h1>
);

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
          {this.state.isVisible===false ? headerHidden : headerShown}
        </div>
        <div>
          <h1 className="open" onClick={this.handleToggleVisibility}>
            {this.state.isVisible===false ? '( ? )' : '( x )'}
          </h1>
        </div>
      </header>
    );
  }
}

class Post extends Component {
  render() {
    return (
      <div className="post">
        <img src="/src/photos/01.jpg" />
      </div>
    );
  }
}

export default App;
