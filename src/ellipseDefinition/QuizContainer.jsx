import { useState } from 'react';
import './QuizContainer.scss';

export default function QuizContainer({ index, quiz, showFeedbacks }) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  return (
    <div className="quiz-container">
      <div className="question">
        {`${index + 1}. `}{quiz.question}
      </div>
      <div className="options">
        {quiz.options.map((option, optIndex) => (
          <div
            key={optIndex}
            className={`option ${selectedOptions[index] === optIndex ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(index, optIndex)}
          >
            {option}
          </div>
        ))}
      </div>
      {showFeedbacks[index] && (
        <div
          className={`feedback ${selectedOptions[index] === quiz.correct ? 'correct' : 'incorrect'}`}
        >
          {selectedOptions[index] === quiz.correct ? '✅ 正确！' : '❌ 错误！'}
          {quiz.explanation}
        </div>
      )}
    </div>
  );
}
