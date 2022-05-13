import React from "react";
import { Helmet } from "react-helmet";

export default function Seo({ title, image, description, slug, type }) {
  const baseURL ="https://www.appque.in/";
  const canonicalURL = `https://www.appque.in/${slug}`;
  //  main url of a particular webpage
  const URL = `${baseURL}/${slug}`;

  return (
    <Helmet>
      {/* canonical url: anys related , original or old url */}
      <link rel="canonical" href={canonicalURL} />

      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      {/* type can be "website", "blog" or "article" */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      {/* summary_large_image is must to preview the card with large image */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
