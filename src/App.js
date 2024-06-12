import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/sass/style.scss'

import { QA }from './components/QA';
import QuizBox from './components/QuizBox';


function App() {
  const [quesDetails, setQuesDetails] = useState([]); 
  const [total, setTotal] = useState(0);
  const [currQues, setCurrQues] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const [ans, setAns] = useState([]);


  

  useEffect(() => {
    let qlist = QA.map((qlist, index) => qlist);    
    setQuesDetails(qlist);       
   },[]);

  const handleClick = (isCorrect,e) => {
    console.log(e);
    if(isCorrect == true){
      setTotal(total + 1)
    }
    const nextQues = currQues + 1;
    setCurrQues(nextQues);    
    if(nextQues >= quesDetails.length ) setIsFinished(true);
    
  }

  
   console.log("qDetails",quesDetails);      

  return (
    <>
     {isFinished ? (
      <>
      <div  className="quiz-box">
        <p>
          Yeee...You have finished the Quiz and got {total} out of 4
        </p>
        <h5>Correct Ans are : </h5>
        <div className="corr-sec">
          
          {quesDetails.length && ( 
             <>
              {quesDetails.map(q => {
                return(
                  <div>
                        <h6>{q.question}</h6>
                      <ul>
                          {q.answer.filter(ans => ans.isCorrect == true).map((q,i) => <p key={i}>{q.options}</p>)}
                      </ul>
                    </div>                          
                )
              })}
             </>
          )}
        </div>      
      </div>      
      </>    
     ) : (
          <div className="quiz-box">
            <h3>Completed {currQues}/4</h3>
            <h3>{quesDetails.length  && quesDetails[currQues].question}</h3>
            <ul className='options-list'>
              {quesDetails.length  && (
                <>
                  {quesDetails[currQues].answer.map((q, i) => <li key={i} onClick={() => handleClick(q.isCorrect,i)}>{q.options}</li>)}
                </>
              )                
              }
            </ul>
        </div>
     )}
      
    
    </>
  );
}

export default App;
