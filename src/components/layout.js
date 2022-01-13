import React from 'react';
import NavBar from './navbar'
import Footer from './footer.js'
import { ThemeProvider } from "styled-components";
import { lightMode, GlobalStyles } from "../themes/theme.js";

import {StaticQuery, graphql} from 'gatsby'





const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "main-pages"}}}) {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                    }
                  }
                }
              }
        }
      `}
      render={data => (
        <ThemeProvider theme={lightMode}>
        <GlobalStyles />
 
        <React.Fragment>
      <NavBar data = {data}></NavBar>
      
          <div style={{minHeight: "80vh"}}>
            {children}
            
          </div>
          <Footer/>
         
        </React.Fragment>
  
        </ThemeProvider>
      )}
    />
  )


export default Layout