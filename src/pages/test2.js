import React, { useState, useEffect } from "react";
import Layout from "../components/layout"


function TestPage2() {
  const [data, setData] = useState({});
  const API = 'https://hn.algolia.com/api/v1/search?query=';
  const DEFAULT_QUERY = 'redux';
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(API + DEFAULT_QUERY);
    const jsonData = await response.json();
    console.log(jsonData)
    setData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <Layout>
        {!data.hits ? 
          <p>No Data</p> : 
          (
            <div>
                {data.hits.map((h,i) => {
                    return (
                        <div key={i} style={{padding:'2em', display:'inline-block'}}>
                        <p>{h.author}</p>
                        <p>{h.comment_text}</p>
                        <p>{h.created_at}</p>
                        <p>{h.created_at_i}</p>
                        <p>{h.num_comments}</p>
                        <p>{h.objectID}</p>
                        <p>{h.parent_id}</p>
                        <p>{h.points}</p>
                        <p>{h.story_id}</p>
                        <p>{h.story_text}</p>
                        <p>{h.story_title}</p>
                        <p>{h.story_url}</p>
                        <p>{h.title}</p>
                        <p>{h.url}</p>
                        </div>
                    );
                })}
            </div>
          )
        }
        
      </Layout>
    </div>
  );
}


export default TestPage2