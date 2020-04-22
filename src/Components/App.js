import React, { useState } from 'react';
import Header from './Header';
import FlashcardList from './FlashcardList';


function App(){

  const [flashcards] = useState(sampleFlashcards)
  return (
    <React.Fragment>
      <Header />
      {/* passing array of questions into our flashcard list component */}
     <FlashcardList flashcards={flashcards} />
    </React.Fragment>
  );
}


const sampleFlashcards = [
  {
    id: 1,
    question: 'How many championship rings does Michael Jordan have?',
    answer: '6',
    options: [
      '0',
      '8',
      '5',
      '6'
    ]
  }
]

export default App;