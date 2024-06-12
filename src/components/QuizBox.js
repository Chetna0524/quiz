import React from 'react'

export default function QuizBox({ques,ans,getAns,index}) {
  return (
    <>
      <div className="quiz-box">
        <h3>{ques}</h3>
        <ul className='options-list'>
          <li onClick={() => getAns(0)}>{ans.one}</li>
          <li onClick={() => getAns(1)}>{ans.two}</li>
          <li onClick={() => getAns(2)}>{ans.three}</li>
          <li onClick={() => getAns(3)}>{ans.four}</li>
        </ul>
      </div>
    </>
  )
}
