import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";

const project = ({ data }) => {
  const {
    img04,
    img01,
    img02,
    img03,
  } = data.markdownRemark.frontmatter.projectPage;

  return (
    <Layout>
      <div class="hero-full-container background-image-container white-text-container project-bg">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="hero-full-wrapper">
                <div class="text-content  text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="text-center section-container-spacer">
                <h2 class="with-project-number">
                  <span class="project-number">01</span>Night Photography
                </h2>
              </div>
              <div class="row section-container-spacer">
                <div class="col-md-4">
                  <div class="section-container-spacer">
                    <h3>Photographic Project</h3>
                    <p>Menphis June, 2016</p>
                  </div>

                  <h4>Credits & Crew</h4>

                  <ul class="list-unstyled">
                    <li>Stanford</li>
                    <li>Pablo Malice</li>
                    <li>Patricia Stano</li>
                  </ul>

                  <p>Cityzen circus Association</p>
                  <p>Menphis City Hall</p>
                </div>
                <div class="col-md-8">
                  <h3>How to exchange with the nocturnal light ?</h3>
                  <p>
                    Id eu nisl nunc mi ipsum faucibus vitae aliquet. Auctor urna
                    nunc id cursus metus aliquam. A pellentesque sit amet
                    porttitor eget dolor morbi. Interdum varius sit amet mattis.
                    Tincidunt dui ut ornare lectus sit amet est placerat in.
                    Diam volutpat commodo sed egestas. Praesent elementum
                    facilisis leo vel fringilla est ullamcorper eget nulla. Non
                    odio euismod lacinia at quis risus sed vulputate. Lacus sed
                    turpis tincidunt id aliquet risus feugiat.
                  </p>
                  <p>
                    {" "}
                    Mieget mauris pharetra et ultrices neque ornare.
                    Pellentesque elit ullamcorper dignissim cras tincidunt
                    lobortis. Euismod in pellentesque massa placerat.
                    Consectetur libero id faucibus nisl tincidunt eget. Pulvinar
                    etiam non quam lacus suspendisse. Tincidunt nunc pulvinar
                    sapien et ligula ullamcorper malesuada. Ante in nibh mauris
                    cursus mattis molestie a iaculis. Gravida cum sociis natoque
                    penatibus et magnis dis parturient montes. Ultrices gravida
                    dictum fusce ut placerat orci. Id cursus metus aliquam
                    eleifend mi in. Odio eu feugiat pretium nibh ipsum
                    consequat.
                  </p>
                </div>
              </div>
              <Img
                className="img-responsive"
                alt=""
                fluid={img03.childImageSharp.fluid}
              />
              <p>Menphis city center</p>

              <blockquote class="text-center large-spacing">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante."
                </p>
                <small class="pull-right">Irina Martin</small>
              </blockquote>

              <div class="row">
                <div class="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img02.childImageSharp.fluid}
                  />
                  <p>Menphis skyline</p>
                </div>
                <div class="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img01.childImageSharp.fluid}
                  />
                  <p>Artefact Buildging</p>
                </div>
              </div>

              <Img
                className="img-responsive"
                alt=""
                fluid={img04.childImageSharp.fluid}
              />
              <p>Menphis skyline</p>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar navbar-default navbar-fixed-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 text-center">
              <ul class="navbar-nav nav">
                <li>
                  <a href="" title="" class="project-nav left">
                    <span class="project-number">01</span>Previous
                  </a>
                </li>
              </ul>
              <p class="h5 navbar-text">
                Night Photography{" "}
                <i class="fa fa-chevron-down arrow-down" aria-hidden="true"></i>
              </p>

              <ul class="navbar-nav nav navbar-right">
                <li>
                  <a href="" title="" class="project-nav right">
                    <span class="project-number">03</span>Next{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default project;

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        projectPage {
          img03 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img04 {
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
