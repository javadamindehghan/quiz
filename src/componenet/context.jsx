import React , {useContext , useState } from 'react'
import axios from 'axios'
 const AppContext = React.createContext()
 const table={
   sport:21,
   history:23,
   politics:27
 }


 const AppProvider = ({children}) =>{
    const [waiting, setwaiting] = useState(true)
    const  [loading, setloading] = useState(false)
    const [questions, setquestions] = useState([])  
    const [index, setindex] = useState(0)
    const [correct, setcorrect] = useState(0)
    const [eror, seteror] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newtimer, setnewtimer] = useState(true)
    const [classanswer, setclassanswer] = useState('')
    const [checkclick, setcheckclick] = useState(false)
    
    
    const [quiz, setquiz] = useState({
      amount : '10',
      difficulty:'easy',
      category: 'sport'
    })

    


   const openModal=()=> {
      setIsOpen(true);
    }

    const closeModal=()=> {
      setIsOpen(false);
      setcorrect(0)
      setwaiting(true)
    }
  
  const handleonchange = (e)=>{
      const name= e.target.name
      const value = e.target.value
      setquiz({...quiz , [name]:value})
  }
  const handlesubmit = (e)=>{
     const{amount , difficulty , category } =quiz
     const url =`https://opentdb.com/api.php?amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
   FetchQuestion(url)

  }
   
  
    const nextquestion = ()=>{
     setnewtimer(!newtimer)
       setindex((old)=>{
         const index = old+1
         
         if (index>questions.length-1) {
            openModal();
            return 0
         }
         return index

       })
       setnewtimer(!newtimer)
      
       
    }

    const nextquestion1 = ()=>{
      setnewtimer(!newtimer)
        setindex((old)=>{
          const index = old+.5
          
          if (Math.ceil(index)>questions.length-1) {
             openModal();
             return 0
          }
          return Math.ceil(index)
 
        })
        setnewtimer(!newtimer)
        
     }

    const checkanswer = value=>{
       if (value) {
         setcorrect((oldstate)=>oldstate+1)
          setclassanswer('green')
          setcheckclick(true)
       }
       else{
        setclassanswer('red')
        setcheckclick(false)
       }
nextquestion()
       
    }

    const FetchQuestion = async (url)=>{
       setwaiting(false)
       setloading(true)
       const response = await axios(url).catch((err)=>{
         seteror(true)
         setwaiting(true)
         
       })
       if (response) {
          const data = response.data.results
          if (data.length) {
            setloading(false)
            setquestions(data)
    
          }
        
       }
       else{
          seteror(true)
         setwaiting(true)
       }
    }

    
    
   
   

     return(
      
        <AppContext.Provider value={
           {
           waiting ,
           loading,
           questions,
           index,
           correct,
           eror,
           modalIsOpen,
           nextquestion,
           checkanswer,
           openModal,
           closeModal,
           quiz,
           handleonchange,
           handlesubmit,
           newtimer,
           nextquestion1,
           classanswer,
           checkclick
          
         }
       

      } >{children}</AppContext.Provider>
      )
      
 }
 
 export const useGlobalContext=()=>{
    return useContext(AppContext)
    }

    export {AppContext , AppProvider}
