import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import image from "../images/1694.jpg";
import { BlogsList } from "./blogsList";

import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import {
  LinkedInShareButton,
  TwitterShareButton,
  WhatsAppShareButton,
} from "../utils/shareWidget";

export default function BlogPost(props) {
  const { data } = props;

  return (
    <Layout>
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
                      <small>~ {data.mdx.timeToRead} mins read</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* summary and cover image */}
            <div className="col-12">
              <p className="mt-2">
                <em>Summary: Breadcrumbs are a subtle element of a website that helps
                  improve usability and navigation. They’re a utility that often
                  receives little acknowledgment; however, breadcrumbs can have a
                  large impact and provide a plethora of benefits, such as
                  lowering bounce rate, increasing conversions, and improving user
                  satisfaction.
                </em>
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
          <footer>
            <div className="row pb-3">
              <div className="col-12">
                <div className="d-flex">
                  <div className="me-2">
                    <LinkedInShareButton pageURL="https://appinventiv.com/blog/how-to-build-an-mvp/" />
                  </div>
                  <div className="me-2">
                    <TwitterShareButton
                      title="appinventiv blog"
                      pageURL="https://appinventiv.com/blog/how-to-build-an-mvp/"
                    />
                  </div>
                  <div className="me-2">
                    <WhatsAppShareButton pageURL="https://appinventiv.com/blog/how-to-build-an-mvp/" />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <small className="text-muted font--weight-500">
                  Share this article
                </small>
              </div>
            </div>
            {/* Author Profile */}
            <div className="row mt-5 mb-4">
              <div className="col-12">
                <div className="row justify-content-between align-items-center">
                  <div className="col-12 col-md-5 col-lg-5 me-4">
                    <div className="image-wrapper">
                      <img
                        src={image}
                        width="280"
                        height="auto"
                        className="mb-4"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 text-start">
                    <div>
                      <span className="fs-6 text-muted font--weight-500">
                        About Author
                      </span>
                      <br />
                      <h5 className="fs-3 fw-bold mb-2">Arun Pratap Singh</h5>

                      <p>
                        Building SEO friendly web applications focused on
                        crafting clean and user-friendly experiences. He is
                        helping businesses and start-ups to grow with the help
                        of modern cutting edge technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* prev and next */}
            <div className="row mt-2">
              <div className="col-12 justify-content-between">
                <div className="d-flex justify-content-between">
                  <small className="text-muted fw-bold mb-1 border px-2 py-1 cursor--pointer">
                    Prev Article
                  </small>
                  <small className="text-muted fw-bold mb-1 border px-2 py-1 cursor--pointer">
                    Next Article
                  </small>
                </div>
              </div>
            </div>
            {/* Related Articles */}
            <hr />
            <div className="row g-4 pt-2 pb-2 justify-content-center">
              <div className="col-12">
                <h2 className="display-6 fw-bold">Related Blogs</h2>
              </div>
              <div className="col-12 col-sm-6 ">
                <BlogsList
                  blogTitle="How Much Does It Cost to Create an App in 2022? A Detailed Guide"
                  shortDescrition="Some quick example text to build on the card title and make up the
              bulk of the car They’re a utility that often receives..."
                  coverImageURL={image}
                  publishingDate="17 Apr 2022"
                  timeRead="8 mins read"
                  authorName="Arun Pratap Singh"
                />
              </div>
              <div className="col-12 col-sm-6 ">
                <BlogsList
                  blogTitle="How much does it cost to Create an App in 2022? A Detailed Guide"
                  shortDescrition="Some quick example text to build on the card title and make up the
              bulk of the car. They’re a utility that often receives..."
                  coverImageURL={image}
                  publishingDate="17 Apr 2022"
                  timeRead="8 mins read"
                  authorName="Arun Pratap Singh"
                />
              </div>
              <div className="col-12 col-sm-6">
                <BlogsList
                  blogTitle="How much does it cost to Create an App in 2022? A Detailed Guide"
                  shortDescrition="Some quick example text to build on the card title and make up the
              bulk of the car. They’re a utility that often receives"
                  coverImageURL={image}
                  publishingDate="17 Apr 2022"
                  timeRead="8 mins read"
                  authorName="Arun Pratap Singh"
                />
              </div>
              <div className="col-12 col-sm-6">
                <BlogsList
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
    </Layout>
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
