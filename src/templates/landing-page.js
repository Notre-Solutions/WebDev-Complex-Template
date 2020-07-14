import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Landing = ({ data }) => {
  const { title, paragraph } = data.markdownRemark.frontmatter.landingPage;
  return (
    <Layout current="landing">
      <div class="hero-full-container background-image-container white-text-container hero-bg">
        <div class="overlay-gradient"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-7 col-md-offset-1">
              <div class="hero-full-wrapper">
                <div class="text-content">
                  <h1>{title}</h1>
                  <p>{paragraph}</p>
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

export const pageQuery = graphql`
  query landingQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          title
          paragraph
        }
      }
    }
  }
`;
