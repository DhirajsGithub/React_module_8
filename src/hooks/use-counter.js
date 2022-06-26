import { useState, useEffect } from 'react';

// NOTE: the name of function start with 'use' it's a convention and the name of file start with 'use-'
const useCounter = (forward = true) => {
    // default value of forward is set to true to configure our custom hook 
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(forward){
            setCounter((prevCounter) => prevCounter + 1);
        }else{
            setCounter((prevCounter) => prevCounter - 1);
        }
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;