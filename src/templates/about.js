import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const about = ({ data }) => {
  const {
    imgProfil,
    title,
    paragraph,
    facebook,
    instagram,
    linkedIn,
    email,
    twitter,
    behance,
  } = data.markdownRemark.frontmatter.aboutPage;
  console.log(data);
  return (
    <Layout current="about">
      <div class="section-container content-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-6">
                <Img
                  className="img-responsive"
                  alt=""
                  fluid={imgProfil.childImageSharp.fluid}
                />
              </div>
              <div class="col-md-6">
                <h1 class="h2">{title}</h1>
                <p>{paragraph}</p>

                <ul class="list-unstyled">
                  <li>
                    <div
                      className="fa fa-envelope "
                      style={{ display: "block" }}
                    ></div>
                    <a href={`mailto:${email}`} title="" class="link-like-text">
                      email
                    </a>
                  </li>
                  <li>
                    <div
                      className="fab fa-linkedin"
                      style={{ display: "block" }}
                    ></div>
                    <a href={linkedIn} title="" class="link-like-text">
                      linkedin
                    </a>
                  </li>
                  <li>
                    <div
                      className="fab fa-facebook"
                      style={{ display: "block" }}
                    ></div>
                    <a
                      href="https://www.facebook.com/"
                      title=""
                      class="link-like-text"
                    >
                      facebook
                    </a>
                  </li>
                  <li>
                    <div
                      className="fab fa-instagram"
                      style={{ display: "block" }}
                    ></div>
                    <a href={instagram} title="" class="link-like-text">
                      instagram
                    </a>
                  </li>
                  <li>
                    <div
                      className="fab fa-twitter"
                      style={{ display: "block" }}
                    ></div>
                    <a href={twitter} title="" class="link-like-text">
                      twitter
                    </a>
                  </li>
                  <li>
                    <div
                      className="fab fa-behance"
                      style={{ display: "block" }}
                    ></div>
                    <a href={behance} title="" class="link-like-text">
                      behance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;

export const pageQuery = graphql`
  query aboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        aboutPage {
          title
          paragraph
          imgProfil {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          facebook
          instagram
          linkedIn
          email
          twitter
          behance
        }
      }
    }
  }
`;
