import React from 'react'
import {useState} from 'react'
import questions from './questions.js'
import "./q.css"
export default function Game() {

    const [start,setStart]=useState(false);
    const [i,setI]=useState(false)

    function startQuizBtn()
    {
        setStart(true);
    }
    
      
    function cek(option,quesIndex){
        setI()

        if((questions[quesIndex].answers[option].correct)==true)
        {
            console.log(quesIndex)
            console.log(questions[quesIndex].answers[option].correct)
             console.log("correct")
             setI("correct")


        }
        else{
            console.log(quesIndex)
            console.log(questions[quesIndex].answers[option].correct)
            console.log("wrong")
            setI("wrong")
        }


        
    }
    
    
    if(start===false){
  return (
    <>
    <div className="modal" id="quizModal">
      <div className="modal-content">
        <h2>Test your Brain</h2>
        <p>Are Youuu Reaaadddyyy🔥?</p>
        <button onClick={startQuizBtn} id="startQuizBtn" >Start Quiz</button>
        {/* {startQuizBtn  && <Questionpage />} */}

       

      </div>
    </div>
      
    </>
  )
    }
    else
    {
      return(
        <>
        <div className="app">
      <div className="main">
        <h1>Quiz</h1>
        <div className="scores">
          <p id="attempts">Attempt number : 1</p>
          <p id="highscore">HighScore : 0</p>  
        </div>          
      </div>
      </div>
      <div>
        <p>questions</p>
         {
         questions.map((val , index)=>
         <div>
           <p id={index}>{index}.{val.question}</p>
           {val.answers.map((ans ,opt)=>
           <button  id={opt} onClick={()=>{cek(opt,index)}}   className="btn">{opt}.{ans.text}</button>)}

          
           </div>

         )
           
         }
            
         )  
         
         
        </div>
        </>
      )


    }
      
      
    

}
