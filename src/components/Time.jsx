import React, {useState} from 'react';

export default function Time() {
  const [watch, setWatch] = useState(0)
  const [timerId,setTimerId] = useState(0);  
   const [end, setEnd] = useState(20)
      if(!timerId){
        let id = setInterval(()=> {
          setWatch((prev)=> prev+1)
        },1000)
        setTimerId(id)
      }
      if(timerId=== 20)
      {
      clearTimeout(id)
      setWatch(0)

      }
    

  return (

    <div>
      <h2>StopWatch</h2>
      <h1>{watch}</h1>

       
  


    </div>
  )
}