import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import QuestionCommon from './QuestionCommon';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import { cn } from '@/lib/utils';

export default function QuestionChoice({
  currentQuestion,
  isCorrect,
  setUserAnswer,
  showExplanation,
  userAnswer,
}) {
  const onOptionClick = (optIndex) => {
    if (showExplanation) return;
    setUserAnswer(optIndex);
  };

  return (
    <QuestionCommon
      currentQuestion={currentQuestion}
      isCorrect={isCorrect}
      showExplanation={showExplanation}
    >
      {
        currentQuestion.options.map((option, optIndex) => (
          <div
            key={optIndex}
            className={cn(
              'group w-full text-left p-4 rounded-xl border-2',
              'transition-colors duration-300',
              showExplanation ? 'cursor-not-allowed' : 'cursor-pointer',
              showExplanation && [
                optIndex === currentQuestion.correct
                  ? 'border-green-500 bg-green-50'
                  : userAnswer === optIndex
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-gray-50',
              ],

              !showExplanation && [
                userAnswer === optIndex
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50',
              ]
            )}
            onClick={() => onOptionClick(optIndex)}
          >
            <div className="flex items-center">
              <div
                className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center mr-3',
                  'transition-colors duration-300',
                  showExplanation && [
                    optIndex === currentQuestion.correct
                      ? 'bg-green-500 text-white'
                      : userAnswer === optIndex
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200',
                  ],
                  !showExplanation && [
                    userAnswer === optIndex
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 group-hover:bg-blue-300 group-hover:text-white',
                  ]
                )}
              >
                {String.fromCharCode(65 + optIndex)}
              </div>
              <MarkdownRenderer
                className={cn(
                  'transition-colors duration-300',
                  showExplanation && [
                    optIndex === currentQuestion.correct
                      ? 'text-green-500'
                      : userAnswer === optIndex
                        ? 'text-red-500'
                        : 'text-inherit',
                  ],
                  !showExplanation && [
                    userAnswer === optIndex
                      ? 'text-blue-500'
                      : 'text-inherit group-hover:text-blue-300',
                  ]
                )}
                content={option}
              />
              {showExplanation && optIndex === currentQuestion.correct && (
                <FaCheckCircle className="text-green-500 ml-auto" />
              )}
              {showExplanation && userAnswer === optIndex && !isCorrect && (
                <FaTimesCircle className="text-red-500 ml-auto" />
              )}
            </div>
          </div>
        ))
      }
    </QuestionCommon>
  );
}
