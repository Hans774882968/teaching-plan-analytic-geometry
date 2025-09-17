import basicStyles from '@/component/teachingPlan/basic.module.scss';
import { useRef, useState, useEffect } from 'react';
import { useMathChallengesStore } from '../mathChallengesState';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { isAnswerCorrect } from '@/lib/quizUtils';
import QuestionFill from './QuestionFill';
import QuestionChoice from './QuestionChoice';
import { levels } from '../levels';
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaStar,
  FaClock,
} from 'react-icons/fa';
import LevelComplete from './LevelComplete';
import CountUp from 'react-countup';
import Tag from '@/component/Tag';
import { Popover, PopoverContent, PopoverTrigger } from '@/component/ui/popover';
import { getTimerText, getQuestionScore } from '../utils';
import { Helmet } from 'react-helmet-async';
import correctMp3Url from '@/assets/challenge/correct.mp3';
import wrongMp3Url from '@/assets/challenge/wrong.mp3';
import TpmAudio from '@/component/TpmAudio';
import { playAudio } from './utils';
import { shuffle } from 'lodash-es';

function onUnmountComponent(mp3Refs) {
  mp3Refs.forEach((mp3Ref) => {
    if (!mp3Ref.current) {
      return;
    }
    mp3Ref.current.pause();
    mp3Ref.current.currentTime = 0;
  });
}

function Inner() {
  const {
    score,
    setScore,
    isScored,
    markScored,
    isCompleted,
    getBestTime,
    updateBestTime,
  } = useMathChallengesStore();
  const [scoreAddition, setScoreAddition] = useState(0);
  const { title: currentLevelTitle } = useParams();
  const [searchParams] = useSearchParams();
  const currentLevel = levels.find(l => l.title === currentLevelTitle);

  const enableTimer = searchParams.get('timer') === 'true';
  const enableShuffle = searchParams.get('shuffle') === 'true';
  const enableSpeedrun = enableTimer && enableShuffle;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const currentQuestion = enableShuffle ? shuffledQuestions[currentQuestionIdx] : currentLevel.quiz[currentQuestionIdx];
  const scoreDelta = getQuestionScore(currentQuestion);
  const [currentScreen, setCurrentScreen] = useState('question');

  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const [finishedQuestionCount, setFinishedQuestionCount] = useState(0);
  const totalQuestions = currentLevel.quiz.length;
  const challengeProgress = finishedQuestionCount / totalQuestions * 100;

  const [correctQuestionCount, setCorrectQuestionCount] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);

  const [elapsedTime, setElapsedTime] = useState(0);
  const elapsedTimeText = getTimerText(elapsedTime);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (enableTimer && !startTime) {
      setStartTime(Date.now());
    }
  }, [enableTimer, startTime]);

  useEffect(() => {
    if (enableShuffle) {
      setShuffledQuestions(shuffle([...currentLevel.quiz]));
    }
  }, [currentLevel.quiz, enableShuffle]);

  useEffect(() => {
    let interval;
    if (enableTimer && startTime && currentScreen === 'question') {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [enableTimer, startTime, currentScreen]);

  const nextQuestionBtnText = currentQuestionIdx < totalQuestions - 1 ? '下一题' : (
    isCompleted(currentLevelTitle) ? '通关' : '完成关卡'
  );

  const correctMp3Ref = useRef(null);
  const wrongMp3Ref = useRef(null);
  const mp3Refs = [correctMp3Ref, wrongMp3Ref];

  function handleSubmitAnswer() {
    const newIsCorrect = isAnswerCorrect(userAnswer, currentQuestion);
    setIsCorrect(newIsCorrect);
    if (newIsCorrect) {
      setCorrectQuestionCount(correctQuestionCount + 1);
      playAudio(correctMp3Ref, correctMp3Url);
      if (!isScored(currentLevelTitle, currentQuestion.qid)) {
        markScored(currentLevelTitle, currentQuestion.qid);
        setScore(score + scoreDelta);
        setScoreAddition(scoreAddition + scoreDelta);
      }
    } else {
      playAudio(wrongMp3Ref, wrongMp3Url);
    }
    setFinishedQuestionCount(finishedQuestionCount + 1);
    setShowExplanation(true);
  }

  function onCompleteLevel() {
    onUnmountComponent(mp3Refs);
    setCurrentScreen('levelComplete');

    const allCorrect = correctQuestionCount === totalQuestions;
    const previousBestTime = getBestTime(currentLevelTitle);
    const nextIsNewRecord = enableSpeedrun && allCorrect &&
      (!previousBestTime || elapsedTime < previousBestTime);
    if (nextIsNewRecord) {
      setIsNewRecord(true);
      updateBestTime(currentLevelTitle, elapsedTime);
    }
  }

  function getNextQuestion() {
    setUserAnswer('');
    setIsCorrect(null);
    setShowExplanation(false);
    const level = levels.find(l => l.title === currentLevelTitle);
    if (currentQuestionIdx < level.quiz.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      onCompleteLevel();
    }
  }

  if (enableShuffle && !shuffledQuestions.length) {
    return <div>加载中...</div>;
  }

  if (currentScreen === 'levelComplete') {
    return (
      <LevelComplete
        currentLevelTitle={currentLevelTitle}
        score={score}
        scoreAddition={scoreAddition}
        elapsedTime={elapsedTime}
        enableTimer={enableTimer}
        enableShuffle={enableShuffle}
        correctQuestionCount={correctQuestionCount}
        totalQuestions={totalQuestions}
        isNewRecord={isNewRecord}
      />
    );
  }

  return (
    <div className={basicStyles.container}>
      <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-xl p-6 md:p-8 bounce-in">
        <div className="flex flex-col gap-2">
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
            <div className="flex items-center gap-2 text-lg font-semibold text-yellow-500">
              <FaStar />
              <CountUp end={scoreAddition} />
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap gap-2">
              {enableTimer && (
                <Tag className="bg-blue-200 text-blue-800 hover:opacity-90 transition-opacity">
                  计时模式
                </Tag>
              )}
              {enableShuffle && (
                <Tag className="bg-purple-200 text-purple-800 hover:opacity-90 transition-opacity">
                  打乱题目
                </Tag>
              )}
              {enableSpeedrun && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Tag className="bg-red-200 text-red-800 hover:opacity-90 transition-opacity cursor-help">
                      速通模式
                    </Tag>
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    align="center"
                    className="bg-primary border-primary text-primary-foreground text-sm rounded-lg shadow-lg max-w-xs"
                  >
                    <div>• 计时模式和打乱模式都打开时，进入速通模式</div>
                    <div>• 速通模式下，如果你答对所有题，我们就会记录你的最短通关用时</div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            {enableTimer && (
              <div className={cn(
                'flex items-center gap-2 text-lg font-semibold text-gray-700',
                currentLevel.textColor
              )}>
                <FaClock />
                <span>{elapsedTimeText}</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-base text-gray-700">
            <span>问题 {currentQuestionIdx + 1}/{totalQuestions}</span>
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
            className="group flex items-center gap-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:opacity-80 transition-opacity duration-300"
            onClick={() => onUnmountComponent(mp3Refs)}
          >
            <FaArrowLeft className="w-4 h-4 group-hover:scale-x-150 group-hover:-translate-x-1 transition-scale duration-600" />
            返回
          </Link>
          {
            !showExplanation ? (
              <button
                className={cn(
                  currentLevel.bgColor,
                  'flex items-center gap-1',
                  'cursor-pointer text-white px-4 py-2 rounded-xl font-semibold hover:opacity-80 transition-opacity duration-300'
                )}
                onClick={handleSubmitAnswer}
              >
                <FaSearch />提交
              </button>
            ) : (
              <button
                className={cn(
                  currentLevel.bgColor,
                  'group flex items-center gap-1',
                  'cursor-pointer text-white px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity'
                )}
                onClick={getNextQuestion}
              >
                {nextQuestionBtnText}
                <FaArrowRight className="w-4 h-4 group-hover:scale-x-150 group-hover:translate-x-1 transition-scale duration-600" />
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

      <TpmAudio ref={correctMp3Ref} src={correctMp3Url} />
      <TpmAudio ref={wrongMp3Ref} src={wrongMp3Url} />
    </div>
  );
}

export default function Challenge() {
  const { title: currentLevelTitle } = useParams();

  return (
    <>
      <Helmet>
        <title>闯关-《{currentLevelTitle}》</title>
      </Helmet>
      <Inner />
    </>
  );
}
