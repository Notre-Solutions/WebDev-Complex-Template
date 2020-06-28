import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

class navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-fixed-top navbar-default">
            <div className="container">
              <button
                type="button"
                className="navbar-toggle"
                onClick={this.toggleClass}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <nav
                className={classnames("navbar-fullscreen", {
                  active: this.state.active,
                })}
                id="navbar-middle"
              >
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={this.toggleClass}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <ul className="navbar-fullscreen-links">
                  <li>
                    <Link to="/" title="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/project" title="">
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" title="">
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" title="">
                      Components
                    </Link>
                  </li>
                </ul>

                <div className="footer-container">
                  <p>
                    <small>
                      © Untitled | Website created with{" "}
                      <a
                        href="http://www.mashup-template.com/"
                        title="Create website with free html template"
                      >
                        Mashup Template
                      </a>
                      /
                      <a
                        href="https://www.unsplash.com/"
                        title="Beautiful Free Images"
                      >
                        Unsplash
                      </a>
                    </small>
                  </p>
                  <p className="footer-share-icons">
                    <a
                      href="https://www.twitter.com"
                      className="fa-icon"
                      title=""
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      className="fa-icon"
                      title=""
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.behance.com"
                      className="fa-icon"
                      title=""
                    >
                      <i className="fa fa-behance" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.vimeo.com"
                      className="fa-icon"
                      title=""
                    >
                      <i className="fa fa-vimeo" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </nav>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default navbar;
