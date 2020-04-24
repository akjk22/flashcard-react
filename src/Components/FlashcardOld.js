import React, { useState } from 'react';



export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)

    // const flashcardOptions = {
    //   color: '#FF0000',
    //   backgroundColor: '#ecf0f1',
    // }
    // const flashcardBack = {
    //   color: '#000',
    //   backgroundColor: '#ecf0f1',
    // }
  
    function flashcardFront(props) {
      const flashcardFrontStyles = {
        color: '#FF0000',
        backgroundColor: '#ecf0f1',
      }
    
  return (
    <React.Fragment>
    <div onClick={() => setFlip(!flip)}>
      {flip ? flashcard.answer : flashcard.question}

    <div className={flashcardFrontStyles}>
      {flashcard.question}
      <div>
        {flashcard.options.map(option => {
        return <div>{option}</div>
      })}
      </div>
    </div>
    <div>
      {flashcard.answer}
    </div>
    </div>
    </React.Fragment>
  )
    }
}
