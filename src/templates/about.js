import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const about = ({ data }) => {
  const { imgProfil } = data.markdownRemark.frontmatter.aboutPage;
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
                <h1 class="h2">James Torres</h1>
                <p>
                  Mi eget mauris pharetra et ultrices neque ornare. Pellentesque
                  elit ullamcorper dignissim cras tincidunt lobortis. Euismod in
                  pellentesque massa placerat. Consectetur libero id faucibus
                  nisl tincidunt eget. Pulvinar etiam non quam lacus
                  suspendisse. Tincidunt nunc pulvinar sapien et ligula
                  ullamcorper malesuada. Ante in nibh mauris cursus mattis
                  molestie a iaculis. Gravida cum sociis natoque penatibus et
                  magnis dis parturient montes. Ultrices gravida dictum fusce ut
                  placerat orci.
                </p>

                <ul class="list-unstyled">
                  <li>
                    <a
                      href="mailto:myemail@myemail.com"
                      title=""
                      class="link-like-text"
                    >
                      email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      title=""
                      class="link-like-text"
                    >
                      linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      title=""
                      class="link-like-text"
                    >
                      facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      title=""
                      class="link-like-text"
                    >
                      instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      title=""
                      class="link-like-text"
                    >
                      twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net"
                      title=""
                      class="link-like-text"
                    >
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
          imgProfil {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
