import { useState } from 'react';
import { motion } from 'motion/react';
import styles from './QuizContainer.module.scss';
import { HOVER_SCALE } from '@/common/consts';
import Think from '@/component/teachingPlan/Think';
import { cn, getRelevantBlogsMdText } from '@/lib/utils';
import MarkdownRenderer from './MarkdownRenderer';
import { Input } from '@/component/ui/input';
import { isAnswerCorrect } from '@/lib/quizUtils';
import Card from './teachingPlan/Card';

function QuizContainerCommon({ children, index, isCorrect, quiz, showFeedbacks }) {
  const relevantBlogsMdText = getRelevantBlogsMdText(quiz.relevantBlogs);

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
      {children}
      {showFeedbacks[index] && (
        <>
          <motion.div
            className={cn(
              styles.feedback,
              isCorrect ? styles.correct : styles.incorrect
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div>{isCorrect ? '✔️' : '❌'}</div>
            <div className={styles.explanationArea}>
              <MarkdownRenderer
                className={cn(
                  isCorrect
                    ? 'text-(--quiz-correct-feedback-color)'
                    : 'text-(--quiz-incorrect-feedback-color)'
                )}
                content={quiz.explanation}
              />
            </div>
          </motion.div>
          {
            Array.isArray(quiz.thinks) && (
              <div>
                {
                  quiz.thinks.map((think, index) => {
                    return (
                      <Think
                        key={index}
                        {...think}
                      />
                    );
                  })
                }
              </div>
            )
          }
          {
            Array.isArray(quiz.relevantBlogs) && (
              <Card
                className={cn(
                  'transition-colors duration-300',
                  'border-2 border-[var(--tpm-hover-border)] hover:border-[var(--tpm-primary)]'
                )}
                whileHover={{ scale: 1 }}
              >
                <MarkdownRenderer
                  content={relevantBlogsMdText}
                />
              </Card>
            )
          }
        </>
      )}
    </motion.div>
  );
}

function QuizFill({ index, quiz, showFeedbacks }) {
  const [userAnswer, setUserAnswer] = useState('');
  const isCorrect = isAnswerCorrect(userAnswer, quiz);

  return (
    <QuizContainerCommon
      index={index}
      isCorrect={isCorrect}
      quiz={quiz}
      showFeedbacks={showFeedbacks}
    >
      <Input
        name="内容"
        placeholder="请输入"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
    </QuizContainerCommon>
  );
}

function QuizChoice({ index, quiz, showFeedbacks }) {
  const [userAnswer, setUserAnswer] = useState(-1);
  const isCorrect = isAnswerCorrect(userAnswer, quiz);

  return (
    <QuizContainerCommon
      index={index}
      isCorrect={isCorrect}
      quiz={quiz}
      showFeedbacks={showFeedbacks}
    >
      <div className={styles.options}>
        {
          quiz.options.map((option, optIndex) => (
            <div
              key={optIndex}
              className={`${styles.option} ${userAnswer === optIndex ? styles.selected : ''}`}
              onClick={() => setUserAnswer(optIndex)}
            >
              <span>{String.fromCharCode(65 + optIndex)}. </span>
              <MarkdownRenderer
                className="flex-1 transition-colors duration-300 text-inherit"
                content={option}
              />
            </div>
          ))
        }
      </div>
    </QuizContainerCommon>
  );
}

export default function QuizContainer({ index, quiz, showFeedbacks }) {
  if (quiz.type === 'fill') {
    return <QuizFill index={index} quiz={quiz} showFeedbacks={showFeedbacks} />;
  }
  return <QuizChoice index={index} quiz={quiz} showFeedbacks={showFeedbacks} />;
}
