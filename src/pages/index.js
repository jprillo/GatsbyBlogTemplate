import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout.js'
import Hero from '../components/hero'
import Mission from '../components/fiftyfiftyimage'
import CardRow from '../components/cardrow'




const IndexPage = ({data}) => {
  return (
    <main >
      <Helmet>
      <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;1,300&display=swap" rel="stylesheet"/>
        
        </Helmet> 
      <Layout>
      <title>Home Page</title>
      <Hero title="Gatsby Blog Starter" secondaryTitle= "with Styled Components" heroParagraph="This is a gatsby starter with few dependancies and styled with styled components" primaryButton = "Code" primaryLink="#" secondaryLink="#" secondaryButton="Contact"/>
      <Mission/>
      <CardRow text="this is kind ofn insane"></CardRow>
    
     
     
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (

          <div key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
         
           
           
          </div>
        ))}
</Layout>
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
