import React from 'react';
import './App.css';
import Jobs from "./Jobs";

const mockjobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Facebook'},
  {title: 'SWE 1', company: 'Apple'},
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockjobs} />
    </div>
  );
}

export default App;
