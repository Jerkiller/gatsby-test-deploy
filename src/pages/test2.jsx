import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

function TestPage2() {
  const [data, setData] = useState({});
  const API = 'https://hn.algolia.com/api/v1/search?query=';
  const DEFAULT_QUERY = 'redux';

  const getData = async () => {
    const response = await fetch(API + DEFAULT_QUERY);
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Layout>
        {!data.hits ? (
          <p>No Data</p>
        ) : (
          <div>
            {data.hits.map((h) => (
              <div key={h.objectID} style={{ padding: '2em', display: 'inline-block' }}>
                <p>
                  <a href={h.story_url}>{h.story_title}</a>
                </p>
                <p>
                  <a href={h.url}>{h.title}</a>
                </p>
                <p>{h.author}</p>
              </div>
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
}

export default TestPage2;
