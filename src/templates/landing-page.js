import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const Landing = ({ data }) => {
  console.log(data);
  return (
    <Layout current="landing">
      <div class="hero-full-container background-image-container white-text-container hero-bg">
        <div class="overlay-gradient"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-7 col-md-offset-1">
              <div class="hero-full-wrapper">
                <div class="text-content">
                  <h1>James Torres</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
