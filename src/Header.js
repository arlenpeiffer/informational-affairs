import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false
    };
  }
  handleToggleVisibility() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-padding">
            {this.state.isVisible === true ? (
              <div>
                <h1 className="header-text">
                  <u onClick={this.handleToggleVisibility}>
                    Informational Affairs
                  </u>{" "}
                  is an ever growing index of books collected by{" "}
                  <u>Folder Studio</u>. I'm copying the whole thing for
                  practice.{" "}
                  <span className="pink" onClick={this.handleToggleVisibility}>
                    ( x )
                  </span>
                </h1>
              </div>
            ) : (
              <div>
                <h1 className="header-text">
                  <span className="header-title">Informational Affairs</span>
                </h1>
                <h1
                  className="header-text header-x"
                  onClick={this.handleToggleVisibility}
                >
                  <span className="pink">( ? )</span>
                </h1>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
