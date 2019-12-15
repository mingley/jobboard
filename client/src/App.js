import React from 'react';
import './App.css';
import Jobs from "./Jobs";
import fetch from 'node-fetch';

const job_api_url = 'http://localhost:3001/jobs'

const mockjobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Facebook'},
  {title: 'SWE 1', company: 'Apple'},
]

async function fetchJobs(updateCb) {
  const res = await fetch(job_api_url);
  let json = await res.json();

  updateCb(json);
  console.log({json})
}

function App() {

  const [jobList, updateJobs ] = React.useState([]); 

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={mockjobs} />
    </div>
  );
}

export default App;
