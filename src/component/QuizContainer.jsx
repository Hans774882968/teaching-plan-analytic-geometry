import { useState } from 'react';
import { motion } from 'motion/react';
import styles from './QuizContainer.module.scss';
import { HOVER_SCALE } from '@/common/consts';
import Think from '@/component/teachingPlan/Think';
import { cn } from '@/lib/utils';
import MarkdownRenderer from './MarkdownRenderer';

function isCorrect(selectedIndex, quiz) {
  if (typeof quiz.correct === 'number') {
    return selectedIndex === quiz.correct;
  }
  if (Array.isArray(quiz.correct)) {
    return quiz.correct.includes(selectedIndex);
  }
  return false;
}

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
        <div className={styles.questionArea}>
          <MarkdownRenderer content={quiz.question} />
        </div>
      </div>
      <div className={styles.options}>
        {quiz.options.map((option, optIndex) => (
          <div
            key={optIndex}
            className={`${styles.option} ${selectedOptions[index] === optIndex ? styles.selected : ''}`}
            onClick={() => handleOptionSelect(index, optIndex)}
          >
            <span>{String.fromCharCode(65 + optIndex)}. </span><MarkdownRenderer className="flex-1" content={option} />
          </div>
        ))}
      </div>
      {showFeedbacks[index] && (
        <>
          <motion.div
            className={cn(
              styles.feedback,
              isCorrect(selectedOptions[index], quiz) ? styles.correct : styles.incorrect
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div>{isCorrect(selectedOptions[index], quiz) ? '✔️' : '❌'}</div>
            <div className={styles.explanationArea}>
              <MarkdownRenderer content={quiz.explanation} />
            </div>
          </motion.div>
          <div>
            {
              Array.isArray(quiz.thinks) && quiz.thinks.map((think, index) => {
                return (
                  <Think
                    key={index}
                    {...think}
                  />
                );
              })
            }
          </div>
        </>
      )}
    </motion.div>
  );
}
