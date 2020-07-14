import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Link } from "gatsby";

const project = ({ data }) => {
  const {
    bgimg,
    title,
    img04,
    img01,
    img02,
    img03,
    prevPage,
    nextPage,
    pageNumber,
    desc,
  } = data.markdownRemark.frontmatter.projectPage;
  const nextPageNumber = pageNumber === 3 ? null : pageNumber + 1;
  const prevPageNumber = pageNumber === 1 ? null : pageNumber - 1;
  const { date, crewList, other, paragraphTitle, paragraph, images } = desc;
  console.log(images);
  return (
    <Layout>
      <div
        className={
          "hero-full-container background-image-container white-text-container " +
          bgimg
        }
      >
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
                  <span class="project-number">{"0" + pageNumber}</span>
                  {title}
                </h2>
              </div>
              <div class="row section-container-spacer">
                <div class="col-md-4">
                  <div class="section-container-spacer">
                    <h3>Photographic Project</h3>
                    <p>{date}</p>
                  </div>

                  <h4>Credits & Crew</h4>

                  <ul class="list-unstyled">
                    {crewList.map((crew) => {
                      return <li>{crew.name}</li>;
                    })}
                  </ul>
                  {other.map((item) => {
                    return <p>{item.name}</p>;
                  })}
                </div>
                <div class="col-md-8">
                  <h3>{paragraphTitle}</h3>
                  {/* TODO: Break up paragraph */}
                  <p>{paragraph}</p>
                </div>
              </div>
              <Img
                className="img-responsive"
                alt=""
                fluid={img03.childImageSharp.fluid}
              />
              <p>{images.img3}</p>

              <blockquote class="text-center large-spacing">
                <p>"{images.quote}"</p>
                <small class="pull-right">{images.auther}</small>
              </blockquote>

              <div class="row">
                <div class="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img02.childImageSharp.fluid}
                  />
                  <p>{images.img2}</p>
                </div>
                <div class="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img01.childImageSharp.fluid}
                  />
                  <p>{images.img1}</p>
                </div>
              </div>

              <Img
                className="img-responsive"
                alt=""
                fluid={img04.childImageSharp.fluid}
              />
              <p>{images.img4}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar navbar-default navbar-fixed-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 text-center">
              <ul class="navbar-nav nav navbar-left">
                {prevPageNumber ? (
                  <li>
                    <Link to={prevPage} title="" class="project-nav right">
                      <span class="project-number">{"0" + prevPageNumber}</span>
                      Previous
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/" title="" class="project-nav right">
                      <span class="project-number">{"00"}</span>
                      Home
                    </Link>
                  </li>
                )}
              </ul>
              <p class="h5 navbar-text">
                {title} <i class="fa fa-chevron-down arrow-down"></i>
              </p>
              <ul class="navbar-nav nav navbar-right">
                {nextPageNumber ? (
                  <li>
                    <Link to={nextPage} title="" class="project-nav right">
                      <span class="project-number">{"0" + nextPageNumber}</span>
                      Next
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/" title="" class="project-nav right">
                      <span class="project-number">{"00"}</span>
                      Home
                    </Link>
                  </li>
                )}
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
      fields {
        slug
      }
      frontmatter {
        projectPage {
          bgimg
          pageNumber
          nextPage
          prevPage
          title
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
          desc {
            date
            crewList {
              name
            }
            other {
              name
            }
            paragraphTitle
            paragraph
            images {
              img1
              quote
              auther
              img2
              img3
              img4
            }
          }
        }
      }
    }
  }
`;
