import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const TestPage = ({ data }) => (
  <Layout>
      <div className={"container"}>
        <div className={"content"}>
            <div className={"title"}>
                <h1>Files</h1>
            </div>
            <ul>
            {data.allFile.edges.map((x,i) => (
                <li key={i}>{x.node.relativePath} - {x.node.prettySize}</li>
            ))}
            </ul>
        </div>
    </div>
  </Layout>
)

export const query = graphql`
{
  allFile(filter: { sourceInstanceName: { eq: "src" } }) {
    edges {
      node {
        relativePath
        prettySize
      }
    }
  }
}
`

export default TestPage