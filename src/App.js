
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: 'https://react-http-6b42f-default-rtdb.firebaseio.com/tasks.json' },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
       <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;



// useEffect and dependency as function :
// functions are objects in JavaScript.
// And every time a function is recreate even if it contains the same logic, it's a brand new object in memory and therefore useEffect would treat it as a new value, 
// even if it's technically the same function and it would re execute it. So to avoid this, we should go to useHttp and wrap sendRequest with use callback which we can do also when we use a single weight in there