import arrowDown from '../images/icon-arrow-down.svg'
export const QuestionsAccordions = ({ title, question, activeQuestion: {activeQuestion, setActiveQuestion} }) => {
  return (
    <div className="questions__accordions">
        <div className={`question-answer__accordion ${activeQuestion === title ? 'active' : ''}`}>
        <div
          className={`question ${activeQuestion === title ? 'active' : ''}`}
          onClick={() => setActiveQuestion(title === activeQuestion ? '' : title)}>
          <h3 className="title__question">
            {title}
          </h3>
          <img src={arrowDown} alt="icon-down"/>
        </div>
        <div className="answer active">
          {question}
        </div>
      </div>
    </div>
  );
}