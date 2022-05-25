import React,{ useState, useEffect } from "react";

export default function Timer(){
  const [timerId,setTimerId] = useState(null);
  const [timer, setTimer] = useState(10000);
  const [watch,setWatch] = useState(0);
 

  const start=()=> {
   if(!timerId) {
     let id = setInterval(()=> {
       setWatch((prev)=>prev+1)
     },1000)
     setTimerId(id)
   }
  }
  const pause=()=> {
      clearInterval(timerId)
      setTimerId(null)
  }
  const reset=()=> {
   clearInterval(timerId);
   setWatch(0)
  }

  return <div>
    count Down : {watch}
    
    <button onClick={start} >Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    
    </div>
};