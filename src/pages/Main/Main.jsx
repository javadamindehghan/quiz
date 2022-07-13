
import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import Timer from './Timer';
export default function Main({checkclick,questions , closeModal ,correct , index , questio , nextquestion ,checkanswer , classanswer ,modalIsOpen}) {
   
 
    const {correct_answer , incorrect_answers , question}=questio
var answers=[]
    
  var rand=Math.floor((Math.random() * 4) + 1);

  if (rand==1) {
    answers=[correct_answer,...incorrect_answers]
  }
  else if (rand==2) {
    answers=[...incorrect_answers,correct_answer]
  } else if (rand==3) {
      const ans1=[correct_answer,...incorrect_answers]
      const ans2=ans1.slice(0,2)
      const ans3=ans1.slice(-2)
      answers=ans3.concat(ans2)
  } else if (rand==4) {
      const ans4=[...incorrect_answers,correct_answer]
      const ans5=ans4.slice(0,2) 
      const ans6=ans4.slice(-2)
      answers =ans6.concat(ans5)
  }
 
  
   const answer = answers.map((answer)=>{
      return(<button 
      onClick={()=>checkanswer(correct_answer===answer)}
      >
          {answer}
         
          </button>) 
   })

  

  
 
    return (
        <>
        <Modal  isOpen={modalIsOpen}   contentLabel="Example Modal" >
            <div>percentage correct answer: {(correct/questions.length)*100}%</div>
            <button onClick={closeModal}>close</button>
        </Modal>
        <div className='main'>
            <div className='correctanswer'>
                <h2>تعداد پاسخ صحیح: {correct}</h2>
                  <h2>تعداد سوال های پاسخ داده شده:{index}</h2>
            </div>
            <div className='questions'>
           <h2 style={{width:'350px'}}>{question}</h2> 
            </div>
            <div className='answers'>
                
                 {answer}
            </div>
            <div>
                <button onClick={nextquestion}>next question</button>
            </div>
            
        </div>
        </>
    )
}
