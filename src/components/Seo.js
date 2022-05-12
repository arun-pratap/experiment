import React from 'react'
import { Helmet } from 'react-helmet'
import { pathJoin } from '../utils/pathJoin'

export default function Seo({title,
    image,
    description,
    slug,
    type }) {

    const baseURL = window.location.origin
    const canonicalURL = pathJoin('http://apsingh.co', slug)
    const URL = pathJoin(baseURL, slug)

    return (
        <Helmet>
            <title>{title} - apsingh</title>
	    {/* canonical url: any related , original or old url */}
            <link rel='canonical' href={canonicalURL} />

            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />
            
            <meta property="og:url" content={URL} />
            <meta property="og:type" content={type} />
        </Helmet>
    )
}
