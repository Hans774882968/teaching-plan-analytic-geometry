import { useState } from 'react';
import { motion } from 'motion/react';
import styles from './QuizContainer.module.scss';
import { HOVER_SCALE } from '@/common/consts';
import { cn } from '@/lib/utils';

export default function QuizContainer({ index, quiz, showFeedbacks }) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  return (
    <motion.div
      className={styles.quizContainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      whileHover={{
        scale: HOVER_SCALE,
      }}
    >
      <div className={styles.question}>
        <div>{`${index + 1}.`}</div>
        <div className={styles.questionArea}>{quiz.question}</div>
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
        <motion.div
          className={cn(
            styles.feedback,
            selectedOptions[index] === quiz.correct ? styles.correct : styles.incorrect
          )}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div>{selectedOptions[index] === quiz.correct ? '✔️' : '❌'}</div>
          <div className={styles.explanationArea}>{quiz.explanation}</div>
        </motion.div>
      )}
    </motion.div>
  );
}
