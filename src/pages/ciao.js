
import React, { /*useContext,*/ useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"



const CiaoPage = props => {
  const { loading, data } = useStaticQuery(FETCH_FILES)
  const FETCH_FILES = graphql
  `
  query FetchFiles {
    allFile(filter: { sourceInstanceName: { eq: "src" } }) {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime
        }
      }
    }
  }
`
  return (
    <Layout>
      <SEO title = "Ciao" />
      <div className = "container" >
          <h1>Ciao</h1>
          {console.log(data)}
      </div>
    </Layout>
  )
}


export default CiaoPage

  /*
  const fetchFiles = async() => {
      console.log("fetch files");
      try {
        
        //let files = useStaticQuery(FETCH_FILES)
          
          let files = await graphql(`
          {
            allFile(filter: { sourceInstanceName: { eq: "src" } }) {
              edges {
                node {
                  relativePath
                  prettySize
                  extension
                  birthTime
                }
              }
            }
          }
          `);
          console.log("files",files);
          edges = files.data.allData.edges;
          setLoading(false)
      } catch (err) {
        console.error(err);
          setLoading(false)
      }
  }

  useEffect(() => {
    fetchFiles()
  }, []);

  
  console.log("edges", edges);

  return (
    <Layout>
      <SEO title = "Ciao" />
      <div className = "container" >
          <h1> Ciao </h1> 
          {
          loading ? ( <h2>Loading</h2> ) : 
          (<> {
                edges && (
                <ul> {
                  edges.map((node,i) => ( 
                          <li key={i}>
                            {node.relativePath}
                            </li>
                        ))
                    }
                </ul>
                )
              }
          </>)
          } 
      </div>
    </Layout>
  )
}*/