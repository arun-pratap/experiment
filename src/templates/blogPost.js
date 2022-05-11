import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import image from "../images/1694.jpg";
import { RecommendedBlogs } from "./blog";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import ContactForm from "../components/ContactForm";
import ContactCall from "../components/ContactCall";

export default function BlogPost(props) {
  const { data } = props;
  console.log(props);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <article
          id="blog--container"
          className="container"
          style={{ maxWidth: "860px" }}
        >
          <header className="row">
            <div className="col-12 text-capitalize">
              <h1 className="display-3 fw-bold my-4">
                How to Build Real-time Application With Node.js
              </h1>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center pb-3">
                <img
                  src={image}
                  width="45"
                  height="45"
                  alt="authorname"
                  className="rounded-circle me-3"
                />
                <div>
                  <small className="fs-6 font--weight-500 text-muted">
                    Arun Pratap Singh
                  </small>
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar-event-fill fs-6 pe-2 text-muted"></i>
                      <small>
                        April 27, 2022
                        <span className="text-muted">
                          &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                        </span>
                      </small>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="bi bi-clock-fill fs-6 pe-2 text-muted"></i>
                      <small> 8 mins read</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* summary and cover image */}
            <div className="col-12">
              <p className="mt-2">
                Summary:Breadcrumbs are a subtle element of a website that helps
                improve usability and navigation. They’re a utility that often
                receives little acknowledgment; however, breadcrumbs can have a
                large impact and provide a plethora of benefits, such as
                lowering bounce rate, increasing conversions, and improving user
                satisfaction.
              </p>
            </div>
            <div className="col-12">
              <img
                src={image}
                alt="cover"
                width="100%"
                height="auto"
                className="mb-4"
              />
            </div>
          </header>
          {/* blog Content */}
          <main>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </main>
          <footer className="pt-4">
            {/* Author Profile */}
            <div className="row my-5">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="image-wrapper">
                      <img
                        src={image}
                        width="280"
                        height="auto"
                        className="mb-4"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-7 text-start">
                    <p>
                      <span className="fs-6 text-muted font--weight-500">
                        About Author
                      </span>
                      <br />
                      <span className="fs-4 font--weight-500 mb-2">
                        Arun Pratap Singh
                      </span>
                      <br />
                      <p>
                        Tejas is a Senior Tech Consultant at Simform excelling
                        in mobile and server-side technologies, with extensive
                        experience in working closely with startups and
                        enterprises. His expertise in understanding tech has
                        helped businesses achieve excellence over the long run.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* prev and next */}
            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between">
                <small className="text-uppercase text-muted fw-bold mb-4 border px-2 py-1 cursor--pointer">
                  prev post
                </small>
                <small className="text-uppercase text-muted fw-bold mb-4 border px-2 py-1 cursor--pointer">
                  next post
                </small>
              </div>
            </div>
            {/* Related Articles */}
            <hr />
            <div className="row g-4 pt-2 pb-2">
              <div className="col-12">
                <h2 className="display-6 fw-bold">Related Blogs</h2>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <RecommendedBlogs
                  blogTitle="How Much Does It Cost to Create an App in 2022? A Detailed Guide"
                  shortDescrition="Some quick example text to build on the card title and make up the
              bulk of the car They’re a utility that often receives..."
                  coverImageURL={image}
                  publishingDate="17 Apr 2022"
                  timeRead="8 mins read"
                  authorName="Arun Pratap Singh"
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <RecommendedBlogs
                  blogTitle="How much does it cost to Create an App in 2022? A Detailed Guide"
                  shortDescrition="Some quick example text to build on the card title and make up the
              bulk of the car. They’re a utility that often receives..."
                  coverImageURL={image}
                  publishingDate="17 Apr 2022"
                  timeRead="8 mins read"
                  authorName="Arun Pratap Singh"
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <RecommendedBlogs
                  blogTitle="How much does it cost to Create an App in 2022? A Detailed Guide"
                  shortDescrition="Some quick example text to build on the card title and make up the
              bulk of the car. They’re a utility that often receives"
                  coverImageURL={image}
                  publishingDate="17 Apr 2022"
                  timeRead="8 mins read"
                  authorName="Arun Pratap Singh"
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <RecommendedBlogs
                  blogTitle="How much does it cost to Create an App in 2022? A Detailed Guide"
                  shortDescrition="Some quick example text to build on the card title and make up the
              bulk of the car. They’re a utility that often receives"
                  coverImageURL={image}
                  publishingDate="17 Apr 2022"
                  timeRead="8 mins read"
                  authorName="Arun Pratap Singh"
                />
              </div>
            </div>
          </footer>
        </article>
      </div>
      <ContactForm />
      <ContactCall />
      <Footer />
    </>
  );
}
// https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#:~:text=%7D-,export%20const%20query%20%3D%20graphql,-%60
export const blogPostBySlug = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      excerpt(pruneLength: 100)
      frontmatter {
        categories
        authorName
        authorAvatarURL
        blogTitle
        docTitle
        coverImageURL
        coverImageCredit
        coverImageAlt
        lastUpdatedAt
        publishingDate
        quickSummary
      }
      timeToRead
      slug
    }
  }
`;
