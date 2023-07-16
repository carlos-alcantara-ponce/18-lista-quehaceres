import React, { useState } from 'react';
import Input from './components/Input';
import Task from './components/Task';
import './App.css';

function App() {

  const [taskList, setTaskList] = useState([]);


  return (
    <div className="bg-light text-left">
      <div className='container p-3'>
        <h2>Lista de quehaceres</h2>
        <div className="w-50">
          <h4>Nueva tarea</h4>
          <Input taskList={taskList} setTaskList={setTaskList} />

          <h4>Lista de tareas</h4>

          {taskList.map(
            (task, i) =>
              <Task key={i} index={i} taskList={taskList} setTaskList={setTaskList} />
          )



          }

        </div>
      </div>


    </div >
  );
}

export default App;
