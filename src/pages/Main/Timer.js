import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../../componenet/context'

export default function Timer() {
    const [timer, settimer] = useState(10)
    const [next, setnext] = useState(false)
   const {newtimer , nextquestion1}=useGlobalContext()
  
   if (timer==0) {
    nextquestion1()
    settimer(10)
   }
  
   
  
  
   
    useEffect(() => {
       
         var time=  setInterval(
             ()=>settimer(c=>c-1),1000)
             
             
    return ()=>{
        clearInterval(time)
        settimer(10)
        
        
       
    }
      
        
    }, [newtimer])

    
    return (
        <div>
          <h1  style={{display:'inline'}}> زمان برای پاسخ به سوال:{timer} </h1>  
        </div>
    )
}
