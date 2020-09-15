import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const TestPage = ({ data }) => (
  <Layout>
    <div className="container">
      <div className="content">
        <div className="title">
          <h1>Files</h1>
        </div>
        <ul>
          {data.allFile.edges.map((x) => (
            <li key={x.node.relativePath}>
              {x.node.relativePath}
              {' '}
              -
              {' '}
              {x.node.prettySize}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
{
  allFile {
    edges {
      node {
        relativePath
        prettySize
      }
    }
  }
}
`;

export default TestPage;

TestPage.propTypes = {
  data: {
    allFile: PropTypes.shape({
      edges: PropTypes.array({

      }),
    }),
  },
};

TestPage.defaultProps = {
  data: {
    allFile: {
      edges: [],
    },
  },
};
