import React from "react";
import image431 from "../images/431.jpg";

//Blog Listing
export function BlogsList({
  blogTitle,
  shortDescrition,
  coverImageURL,
  publishingDate,
  timeRead,
  authorName,
}) {
  return (
    <>
      <div className="card">
        <a href="#" className="position-relative">
          <img src={coverImageURL} className="card-img-top" alt="..." />
          <span
            style={{ top: 10, right: 10 }}
            className="position-absolute badge bg--primary fw-normal"
          >
            Web App Development
          </span>
        </a>
        <div className="card-body">
          <a href="" className="">
            <span className="text-muted font--weight-500">
              <small>{timeRead}</small>
            </span>
            <h5 className="fs-3 fw-bold">{blogTitle}</h5>
            <p className="fs-5 text-muted mb-2">{shortDescrition}</p>

            <div className="d-flex align-items-center">
              <span className="text-muted mb-0 pe-3">
                <small>{authorName}</small>
              </span>
              <span className="text-muted">
                <small>{publishingDate}</small>
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

// BlogPost
export function BlogPost({
  blogTitle,
  coverImageURL,
  authorName,
  authorAvatar,
  publishingDate,
  timeRead,
  lastUpdatedAt,
  quickSummary,
  post,
}) {
  //layout
  // breadcumbs->title->author detail & blogDetail
  //->special recommendation->related articles->contactForm
  //-> aboutAuthor, ->signUpForNewsLetter ->shareWidget

  return <></>;
}
