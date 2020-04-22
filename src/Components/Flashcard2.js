import React from "react";
import PropTypes from "prop-types";


function Flashcard2(props){
  return (
    <React.Fragment>
<div>
  <p key={props.id}>{props.question}</p>
  <p>{props.options}</p>
</div>
  <div>{props.answer}</div>

    </React.Fragment>
  );
}

Flashcard2.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  options: PropTypes.string,
  answer: PropTypes.string
};
export default Flashcard2;