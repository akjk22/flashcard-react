import React from 'react';
import FlashcardBack from './FlashcardBack';
import FlashcardList from './FlashcardList';
import { cardList } from './fakeCardService';
// import FlashcardFront from './FlashcardFront';

class FlashcardControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card: cardList(),
      answerVisibleOnPage: false,
      test: "hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      answerVisibleOnPage: !prevState.answerVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.answerVisibleOnPage) {
      currentlyVisibleState = <FlashcardList question={this.state.card[1]} />
      buttonText = "See Answer";
    } else {
      currentlyVisibleState = <FlashcardBack answer={this.state.test}/>
      buttonText = "See Question"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default FlashcardControl;