import React from 'react';
import FlashcardFront from './FlashcardFront';
import FlashcardBack from './FlashcardBack';
import { cardList } from './fakeCardService';

// const masterFlashcardList = [
//   {
//     id: '1',
//     question: 'How many championship rings does Michael Jordan have?',
//     options: [
//       '0',
//       '8',
//       '6',
//       '4'
//     ],
//     answer: '6'
//   }

// ];
class FlashcardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card: cardList(),
      cardFlip: false,
    };
  }

  render(){
    let cardShow = null;
    if (this.state.card.flip === 'false') {
      cardShow = <FlashcardFront />
    } else {
      cardShow = <FlashcardBack />
    }
    return (
      <React.Fragment>
       <hr/>
       {cardShow}
        {this.state.card.map((flashcard, index) =>
        <FlashcardFront id={flashcard[0]}
          question={flashcard[1]}
          options={flashcard[2]}
          answer={flashcard[3]}
          key={index}/>
      )}
    </React.Fragment>
    );
  }



// function FlashcardList(){

//   return (
//     <React.Fragment>
//       <hr/>
//       {cardList.map((flashcard, index) =>
//         <FlashcardFront id={flashcard[0]}
//           question={flashcard[1]}
//           options={flashcard[2].join(' ')}
//           answer={flashcard[3]}
//           key={index}/>
//       )}
//       {/* {cardList.map((flashcard, index) =>
//         <FlashcardBack answer={flashcard.answer}
//           key={index}/>
//       )} */}
//     </React.Fragment>
//   );
//  }

}

 export default FlashcardList;