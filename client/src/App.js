import React from 'react';
import './App.css';
import Jobs from "./Jobs";
import fetch from 'node-fetch';

const job_api_url = 'http://localhost:3001/api/jobs'

async function fetchJobs(updateCb) {
  const res = await fetch(job_api_url);
  let json = await res.json();

  updateCb(json);
}

function App() {

  const [jobList, updateJobs ] = React.useState([]); 

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
