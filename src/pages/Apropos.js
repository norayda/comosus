import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="A propos" />
        <Bio />
        <p>
          Ce blog regroupe mes pensées ...blablabla... je vous en parle en détail sur [instagram](https://www.instagram.com/comosus_dios/)
        </p>
      </Layout>
    )
  }

}

export default Apropos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
   }
  }
`