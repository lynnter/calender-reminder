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

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder from true/false
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
};

export default App;
