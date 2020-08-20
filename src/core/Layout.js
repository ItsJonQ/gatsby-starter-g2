/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { SEO } from "./SEO"

export function Layout({ children, title, description }) {
  return (
    <>
      <SEO title={title} description={description} />
      {children}
    </>
  )
}
