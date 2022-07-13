import React , {useContext} from 'react'
import './css/style.css'

import {useGlobalContext} from './componenet/context'
import SetupForm from './pages/Setupform'
import Loading from './pages/Loading'
import Main from './pages/Main'


import './App.css';
import Timer from './pages/Main/Timer'

function App() {
  const {rand,checkclick,closeModal,waiting,classanswer , loading , questions , index , correct ,nextquestion ,checkanswer , openModal , modalIsOpen,newtimer}=useGlobalContext();
 const question= questions[index]


 



 if(waiting){
   return (
     <SetupForm/>
   )
 }
 if(loading){
  return (
    <Loading/>
  )
}

return(
  <>
  <Timer/>
  <Main rand={rand} checkclick={checkclick} classanswer={classanswer} questions={questions} closeModal={closeModal} newtimer={newtimer} modalIsOpen={modalIsOpen} openModal={openModal}  index = {index} correct = {correct} questio ={question} nextquestion={nextquestion} checkanswer={checkanswer}/>
  </>
)
}

export default App;
