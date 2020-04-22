import React from 'react';
import Flashcard2 from './Flashcard2';

const masterFlashcardList = [
  {
    id: '1',
    question: 'How many championship rings does Michael Jordan have?',
    options: [
      '0',
      '5',
      '8',
      '6'
    ],
    answer: '6'
  }
  // {
  //   id: 'Sleater and Kinney',
  //   location: '4B',
  //   issue: 'Prop types are throwing an error.'
  // },
  // {
  //   id: 'Imani & Jacob',
  //   location: '9F',
  //   issue: 'Child component isn\'t rendering.'
  // }
];

function FlashcardList2(){
  return (
    <React.Fragment>
      <hr/>
      {masterFlashcardList.map((flashcard, index) =>
        <Flashcard2 id={flashcard.id}
          question={flashcard.question}
          options={flashcard.options}
          answer={flashcard.answer}
          key={index}/>
      )}
    </React.Fragment>
  );
 }

 export default FlashcardList2;