import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question.js';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import quizQuestions from '../../server/api/quizQuestions'

function Quiz(props) {
console.log(props, "quiz props")
//{answer: "", answerOptions: Array(4), questionId: 2, question: "Which of the following video games takes place in a dystopian underwater city called Rapture?", questionTotal: 12, …} "quiz props"
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
       
      />
    );
  }

  
 

  

  return (
      <div className="quiz">
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} id={props.questionId}  />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;