import React from 'react';
import { useState } from 'react';
import Header from './components/Header.js';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appt",
      day: 'Feb 5th at 2:30PM',
      reminder: 'true',
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'Feb 6th at 2:30PM',
      reminder: 'true',
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 4:30PM',
      reminder: 'false',
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
