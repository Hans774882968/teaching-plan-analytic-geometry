import { motion } from 'motion/react';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import { cn } from '@/lib/utils';
import { FaInfoCircle, FaLightbulb } from 'react-icons/fa';

export default function QuestionCommon({
  children,
  currentQuestion,
  isCorrect,
  showExplanation,
}) {
  const explanationTextColor = isCorrect
    ? 'text-(--quiz-correct-feedback-color)'
    : 'text-(--quiz-incorrect-feedback-color)';

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <div>
          <MarkdownRenderer content={currentQuestion.question} />
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </div>
      {showExplanation && (
        <motion.div
          className={cn(
            'p-4 rounded-xl',
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className={cn('mr-3 mt-2', isCorrect ? 'text-green-500' : 'text-red-500')}>
              {
                isCorrect ? <FaLightbulb /> : <FaInfoCircle />
              }
            </div>
            <div className={explanationTextColor}>
              <h4 className="font-semibold mb-1">
                {isCorrect ? '回答正确！' : '回答错误！'}
              </h4>
              <div>
                <MarkdownRenderer
                  className={explanationTextColor}
                  content={currentQuestion.explanation}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
