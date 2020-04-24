import React from "react";
import PropTypes from "prop-types";


function FlashcardBack(props){
  const FlashcardBackStyles = {
    fontFamily: 'sans-serif',
    padding: '20px',
    border: '3px',
    borderStyle: 'solid',
    textAlign: 'center',
  }

  return (
    <React.Fragment>
    <div style={FlashcardBackStyles}>
      <div>
       {props.answer}
      </div>
    </div>
    </React.Fragment>
  );
  }

FlashcardBack.propTypes = {
  answer: PropTypes.string,
};


export default FlashcardBack;