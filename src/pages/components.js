import React from "react";
import Layout from "../components/layout";

const components = () => {
  return (
    <Layout current="about">
      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="template-example">
                <h2 class="template-title-example">Text</h2>
                <p>
                  This is bold and this is semi bold and{" "}
                  <b>this is extra bold</b>. This is italic and this is extra
                  light and this is light and this is regular. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
                  <a href="" title="">
                    reprehenderit
                  </a>{" "}
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div class="template-example">
                <h2 class="template-title-example">Headings</h2>

                <table class="table table-bordered">
                  <tr>
                    <td>
                      <h1>H1: Heading 1</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>H2: Heading 2</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>H3: Heading 3</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>H4: Heading 4</h4>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="template-example">
                <h2 class="template-title-example">List</h2>
                <div class="row">
                  <div class="col-md-6">
                    <h3 class="template-title-example">Ordered</h3>
                    <ul>
                      <li>Consectetur adipiscing elit</li>
                      <li>Integer molestie lorem at massa</li>
                      <li>Facilisis in pretium nisl aliquet</li>
                      <li>Nulla volutpat aliquam velit</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h3 class="template-title-example">Number</h3>
                    <ol>
                      <li>Consectetur adipiscing elit</li>
                      <li>Integer molestie lorem at massa</li>
                      <li>Facilisis in pretium nisl aliquet</li>
                      <li>Nulla volutpat aliquam velit</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-md-6">
              <div class="template-example">
                <h2 class="template-title-example">Icons</h2>

                <div class="row">
                  <div class="col-md-6">
                    <h3 class="template-title-example">Social Round</h3>
                    <ul class="list-icons">
                      <li>
                        <a href="" class="social-round-icon fa-icon">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="social-round-icon fa-icon">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="social-round-icon fa-icon">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="social-round-icon fa-icon">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h3 class="template-title-example">Basic Icons</h3>
                    <ul class="list-icons">
                      <li>
                        <span class="fa-icon">
                          <i class="fa fa-facebook"></i>
                        </span>
                      </li>
                      <li>
                        <span class="fa-icon">
                          <i class="fa fa-twitter"></i>
                        </span>
                      </li>
                      <li>
                        <span class="fa-icon">
                          <i class="fa fa-linkedin"></i>
                        </span>
                      </li>
                      <li>
                        <span class="fa-icon">
                          <i class="fa fa-instagram"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="template-example">
                <h2 class="template-title-example">Buttons</h2>
                <div class="row">
                  <div class="col-md-6">
                    <h3 class="template-title-example">Primary</h3>
                    <div class="row">
                      <div class="col-md-6">
                        <p>
                          <a href="" class="btn btn-primary btn-lg">
                            Primary Large
                          </a>
                        </p>
                        <p>
                          <a href="" class="btn btn-primary">
                            Primary{" "}
                          </a>
                        </p>
                        <p>
                          <a href="" class="btn btn-primary btn-sm">
                            Primary Small
                          </a>
                        </p>
                      </div>
                    </div>

                    <h3 class="template-title-example">Default</h3>
                    <div class="row">
                      <div class="col-md-6">
                        <p>
                          <a href="" class="btn btn-default btn-lg">
                            Default Large
                          </a>
                        </p>
                        <p>
                          <a href="" class="btn btn-default">
                            Default{" "}
                          </a>
                        </p>
                        <p>
                          <a href="" class="btn btn-default btn-sm">
                            Default Small
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <h3 class="template-title-example">Secondary</h3>
                    <div class="row">
                      <div class="col-md-6">
                        <p>
                          <a href="" class="btn btn-info btn-lg">
                            Secondary Large
                          </a>
                        </p>
                        <p>
                          <a href="" class="btn btn-info">
                            Secondary{" "}
                          </a>
                        </p>
                        <p>
                          <a href="" class="btn btn-info btn-sm">
                            Secondary Small
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="template-example">
                <h2 class="template-title-example">Inputs</h2>

                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                </div>

                <div class="form-group">
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="checkbox-inline">
                    <input
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />{" "}
                    Email me a copy
                  </label>
                  <label class="checkbox-inline">
                    <input
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />{" "}
                    I am a human
                  </label>
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div class="alert alert-success" role="alert">
                  Your message was successfully sent
                </div>
                <div class="alert alert-danger" role="alert">
                  Your message has not been sent, restart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default components;
