import basicStyles from '@/component/teachingPlan/basic.module.scss';
import { useState } from 'react';
import { useMathChallengesStore } from '../mathChallengesState';
import { Link, useParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { isAnswerCorrect } from '@/lib/quizUtils';
import QuestionFill from './QuestionFill';
import QuestionChoice from './QuestionChoice';
import { levels } from '../levels';
import {
  FaStar,
} from 'react-icons/fa';
import LevelComplete from './LevelComplete';
import CountUp from 'react-countup';
import Tag from '@/component/Tag';

export default function Challenge() {
  const {
    score,
    setScore,
    isScored,
    markScored,
    isCompleted,
  } = useMathChallengesStore();
  const [scoreAddition, setScoreAddition] = useState(0);
  const { title: currentLevelTitle } = useParams();
  const currentLevel = levels.find(l => l.title === currentLevelTitle);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const currentQuestion = currentLevel.quiz[currentQuestionIdx];
  const scoreDelta = currentQuestion.score || 10;
  const [currentScreen, setCurrentScreen] = useState('question');

  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const [finishedQuestionCount, setFinishedQuestionCount] = useState(0);
  const challengeProgress = finishedQuestionCount / currentLevel.quiz.length * 100;

  const nextQuestionBtnText = currentQuestionIdx < currentLevel.quiz.length - 1 ? '下一题' : (
    isCompleted(currentLevelTitle) ? '通关' : '完成关卡'
  );

  function handleSubmitAnswer() {
    const newIsCorrect = isAnswerCorrect(userAnswer, currentQuestion);
    setIsCorrect(newIsCorrect);
    if (newIsCorrect) {
      if (!isScored(currentLevelTitle, currentQuestion.qid)) {
        markScored(currentLevelTitle, currentQuestion.qid);
        setScore(score + scoreDelta);
        setScoreAddition(scoreAddition + scoreDelta);
      }
    }
    setFinishedQuestionCount(finishedQuestionCount + 1);
    setShowExplanation(true);
  }

  function getNextQuestion() {
    setUserAnswer('');
    setIsCorrect(null);
    setShowExplanation(false);
    const level = levels.find(l => l.title === currentLevelTitle);
    if (currentQuestionIdx < level.quiz.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setCurrentScreen('levelComplete');
    }
  }

  if (currentScreen === 'levelComplete') {
    return (
      <LevelComplete
        currentLevelTitle={currentLevelTitle}
        score={score}
        scoreAddition={scoreAddition}
      />
    );
  }

  return (
    <div className={basicStyles.container}>
      <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-xl p-6 md:p-8 bounce-in">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className={cn(
              currentLevel.bgColor,
              'flex-[0_0_40px] h-10 rounded-full flex items-center justify-center text-white'
            )}>
              {currentLevel.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{currentLevel.title}</h2>
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <FaStar className="text-yellow-500" />
            <CountUp end={scoreAddition} />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-4 text-base text-gray-600 mb-2">
            <span>问题 {currentQuestionIdx + 1}/{currentLevel.quiz.length}</span>
            <Tag className={cn(currentLevel.bgColor, 'text-white hover:opacity-90 transition-opacity flex items-center gap-1')}><FaStar />{scoreDelta}分</Tag>
            {
              isScored(currentLevelTitle, currentQuestion.qid) && (
                <Tag className={cn(currentLevel.bgColor, 'text-white hover:opacity-90 transition-opacity')}>已得分</Tag>
              )
            }
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={cn(
                currentLevel.bgColor,
                'h-2.5 rounded-full transition-all duration-500'
              )}
              style={{ width: `${challengeProgress}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to="/math-challenges"
            className="bg-gray-300 text-gray-700 px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            返回
          </Link>
          {
            !showExplanation ? (
              <button
                className={cn(
                  currentLevel.bgColor,
                  'cursor-pointer text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity'
                )}
                onClick={handleSubmitAnswer}
              >
                提交
              </button>
            ) : (
              <button
                className={cn(
                  currentLevel.bgColor,
                  'cursor-pointer text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity'
                )}
                onClick={getNextQuestion}
              >
                {nextQuestionBtnText}
              </button>
            )
          }
        </div>
        {
          currentQuestion.type === 'fill' ? (
            <QuestionFill
              currentQuestion={currentQuestion}
              isCorrect={isCorrect}
              setUserAnswer={setUserAnswer}
              showExplanation={showExplanation}
              userAnswer={userAnswer}
            />
          ) : (
            <QuestionChoice
              currentQuestion={currentQuestion}
              isCorrect={isCorrect}
              setUserAnswer={setUserAnswer}
              showExplanation={showExplanation}
              userAnswer={userAnswer}
            />
          )
        }
      </div>
    </div>
  );
}
