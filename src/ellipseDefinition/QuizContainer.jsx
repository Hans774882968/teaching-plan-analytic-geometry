import { useState } from 'react';
import styles from './QuizContainer.module.scss';

export default function QuizContainer({ index, quiz, showFeedbacks }) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.question}>
        {`${index + 1}. `}{quiz.question}
      </div>
      <div className={styles.options}>
        {quiz.options.map((option, optIndex) => (
          <div
            key={optIndex}
            className={`${styles.option} ${selectedOptions[index] === optIndex ? styles.selected : ''}`}
            onClick={() => handleOptionSelect(index, optIndex)}
          >
            {option}
          </div>
        ))}
      </div>
      {showFeedbacks[index] && (
        <div
          className={`${styles.feedback} ${selectedOptions[index] === quiz.correct ? styles.correct : styles.incorrect}`}
        >
          {selectedOptions[index] === quiz.correct ? '✔️ 正确！' : '❌ 错误！'}
          {quiz.explanation}
        </div>
      )}
    </div>
  );
}
