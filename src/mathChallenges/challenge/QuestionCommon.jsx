import { motion } from 'motion/react';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import { cn, getRelevantBlogsMdText } from '@/lib/utils';
import { FaInfoCircle, FaLightbulb } from 'react-icons/fa';
import Think from '@/component/teachingPlan/Think';
import Card from '@/component/teachingPlan/Card';

export default function QuestionCommon({
  children,
  currentQuestion,
  isCorrect,
  showExplanation,
}) {
  const explanationTextColor = isCorrect
    ? 'text-(--quiz-correct-feedback-color)'
    : 'text-(--quiz-incorrect-feedback-color)';

  const relevantBlogsMdText = getRelevantBlogsMdText(currentQuestion.relevantBlogs);

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
        <>
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
              <div className={cn(explanationTextColor, 'overflow-x-auto overflow-y-hidden')}>
                <h4 className="font-semibold mb-1">
                  {isCorrect ? '回答正确！' : '回答错误！'}
                </h4>
                <div className="overflow-x-auto overflow-y-hidden">
                  <MarkdownRenderer
                    className={cn(explanationTextColor, 'overflow-x-auto overflow-y-hidden')}
                    content={currentQuestion.explanation}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {
            Array.isArray(currentQuestion.thinks) && (
              <div>
                {
                  currentQuestion.thinks.map((think, index) => {
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
            Array.isArray(currentQuestion.relevantBlogs) && (
              <Card>
                <MarkdownRenderer
                  content={relevantBlogsMdText}
                />
              </Card>
            )
          }
        </>
      )}
    </div>
  );
}
