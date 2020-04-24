import React from "react";
import PropTypes from "prop-types";
import LightSpeed from 'react-reveal/LightSpeed';




function FlashcardFront(props){
  const flashcardFrontStyles = {
    fontFamily: 'sans-serif',
    padding: '20px',
    border: '3px',
    borderStyle: 'solid',
    textAlign: 'center',
  }
  return (
    <React.Fragment>
    <LightSpeed left>
    <div style={flashcardFrontStyles}>
      <div>
        <p key={props.id}>{props.question}</p>
        <p>{props.options}</p>
      </div>
      {/* <div>{props.answer}</div> */}
    </div>
     </LightSpeed>
    </React.Fragment>
  );
  }

FlashcardFront.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  options: PropTypes.string,
  answer: PropTypes.string
};


export default FlashcardFront;