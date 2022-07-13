import React from 'react'
import {useGlobalContext} from '../../componenet/context'
import {Grid} from '@mui/material'

export default function SetupForm() {
    const {quiz , handleonchange , handlesubmit ,eror} = useGlobalContext()

    return (
        <Grid alignItems="stretch"  container spacing={1}>
           
            <Grid item lg={12}>
        <div className='setupform'>
            
  
        
  
  

            SetupForm
            <form action="" method="get">
                <div className='form-control'>
                    <label htmlFor="amount">amount</label>
                    <input
                    onChange={handleonchange}
                     type='number' 
                      value={quiz.amount}
                     name='amount'
                     id='amount'
                     min={1}
                     max={50}
                     />
                </div>

                <div className='form-control'>
                    <label htmlFor="category">category</label>
                   <select 
                   
                   name='category'
                   id='category'
                   onChange={handleonchange}
                   value={quiz.category}
                   >
                       <option value="sport">sport</option>
                       <option value="history">history</option>
                       <option value="politics">Animals</option>

                   </select>
                </div>

                <div className='form-control'>
                    <label htmlFor="difficulty">difficulty</label>
                   <select 
                   
                   name='difficulty'
                   id='difficulty'
                   onChange={handleonchange}
                   value={quiz.difficulty}
                   >
                       <option value="easy">easy</option>
                       <option value="medium">medium</option>
                       <option value="hard">hard</option>

                   </select>
                </div>
                {(eror && <p>دریافت اطلاعات با خطا مواجه شد لطفا دوباره تلاش کنید</p>)}
                <div className='form-control'></div>
                    <button
                    className ='start-quiz' 
                    type='submit'
                    onClick={handlesubmit}
                    >start</button>
            </form>
        </div>
        </Grid>
    </Grid>
    )
}
