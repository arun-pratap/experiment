import React, { useEffect } from "react";
export const LinkedInShareButton = ({ pageURL }) => {
  const linkedInShareURL = `https://www.linkedin.com/shareArticle?url=${pageURL}`;
  return (
    <a href={linkedInShareURL} target="_blank" className="btn btn-sm bg-info text-white">
      <i className="bi bi-linkedin"></i>
    </a>
  );
};

export const TwitterShareButton = ({ title, pageURL}) => {
  const twitterShareURL = `https://www.twitter.com/intent/tweet?text=${title}&url=${pageURL}`;
  return (
    <a href={twitterShareURL} target="_blank" className="btn btn-sm bg-primary text-white">
      <i className="bi bi-twitter"></i>
    </a>
  );
};

export const WhatsAppShareButton = ({ pageURL }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.open(`whatsapp://send?text=${pageURL}`);
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-sm bg-success text-white">
      <i className="bi bi-whatsapp"></i>
    </button>
  );
};
// use onclick and wondow.open
// works on both mobile and desktop
// onclick="window.open('whatsapp://send?text=This is WhatsApp sharing example using button')"
//   const whatsAppShareURL = `whatsapp://send?text=${pageURL}`;
