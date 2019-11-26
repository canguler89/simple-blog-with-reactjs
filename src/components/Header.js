import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="masthead aaa ">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Can Guler`s Blog</h1>
                  <span className="subheading">
                    A Blog Theme by CAN GULER using bootstrap...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
