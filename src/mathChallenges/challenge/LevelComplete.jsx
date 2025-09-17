import basicStyles from '@/component/teachingPlan/basic.module.scss';
import TpmDivInsideSection from '@/component/TpmDivInsideSection';
import TpmSection from '@/component/TpmSection';
import { FaArrowLeft, FaRegCheckCircle, FaStar, FaClock, FaCheck, FaChartPie } from 'react-icons/fa';
import { FaCircleDollarToSlot, FaCircleInfo, FaTrophy } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useMathChallengesStore } from '../mathChallengesState';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';
import LearningPartnerImg from '@/component/teachingPlan/LearningPartnerImg';
import { sample } from 'lodash-es';
import {
  LEARNING_PARTNER_MAP,
  LEARNING_PARTNER_TEXT_COLOR,
  learningPartnerKeys,
  lpCount,
} from '@/common/learningPartnerData';
import TpmAvatarFallback from '@/component/TpmAvatarFallback';
import TpmAudio from '@/component/TpmAudio';
import completeOrFinishMp3Url from '@/assets/challenge/complete-or-finish.mp3';
import { useEffect, useRef } from 'react';
import { playAudio } from './utils';
import { getTimerText } from '../utils';
import NewRecordBadge from './NewRecordBadge';

function CompletedCircle() {
  return (
    <div className="w-20 h-20 md:w-30 md:h-30 p-5 rounded-full bg-green-100">
      <FaRegCheckCircle className="w-full h-full text-green-600" />
    </div>
  );
}

function FinishedCircle() {
  return (
    <div className="w-20 h-20 md:w-30 md:h-30 p-5 rounded-full bg-blue-200">
      <FaCircleInfo className="w-full h-full text-blue-600" />
    </div>
  );
}

function CompletedCirclePart({ lpKey }) {
  if (!lpKey) {
    return <CompletedCircle />;
  }
  return (
    <LearningPartnerImg
      className="w-20 h-20 md:w-30 md:h-30 rounded-full border border-(--tpm-primary) transition-all duration-300 hover:rotate-6 hover:scale-108 floating"
      name={lpKey}
      status="thinking"
      unloader={(
        <TpmAvatarFallback
          className="w-20 h-20 md:w-30 md:h-30 hover:scale-100"
          iconClassName="text-3xl md:text-5xl"
        />
      )}
    />
  );
}

function CompletedTitleH2() {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-green-700">
      恭喜
    </h2>
  );
}

function FinishedTitleH2() {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
      恭喜
    </h2>
  );
}

function CompletedTitleH2Part({ lpKey }) {
  if (!lpKey) {
    return <CompletedTitleH2 />;
  }
  return (
    <h2 className="text-2xl md:text-5xl text-center font-bold text-green-700">
      来自
      <span className={LEARNING_PARTNER_TEXT_COLOR[lpKey]}>{LEARNING_PARTNER_MAP[lpKey]}</span>
      的祝贺
    </h2>
  );
}

export default function LevelComplete({
  currentLevelTitle,
  score,
  scoreAddition,
  elapsedTime,
  enableTimer,
  enableShuffle,
  correctQuestionCount,
  totalQuestions,
  isNewRecord,
}) {
  const {
    isCompleted,
    getBestTime,
  } = useMathChallengesStore();
  const completed = isCompleted(currentLevelTitle);
  const shouldShowLP = Math.random() * (lpCount + 1) >= 1;
  const lpKey = shouldShowLP ? sample(learningPartnerKeys) : '';

  const enableSpeedrun = enableTimer && enableShuffle;
  const accuracy = Math.round((correctQuestionCount / totalQuestions) * 100);
  const allCorrect = correctQuestionCount === totalQuestions;

  const currentBestTime = getBestTime(currentLevelTitle);

  const completeOrFinishMp3Ref = useRef(null);

  useEffect(() => {
    const completeOrFinishMp3 = completeOrFinishMp3Ref.current;
    playAudio(completeOrFinishMp3Ref, completeOrFinishMp3Url);

    return () => {
      // TODO: 这样写不能解决音频加载失败的情况下，组件卸载时莫名其妙弹出的“播放失败”提示
      if (!completeOrFinishMp3) return;
      completeOrFinishMp3.pause();
      completeOrFinishMp3.currentTime = 0;
    };
  });

  return (
    <div className={basicStyles.container}>
      <TpmSection className="items-center bounce-in gap-3 md:gap-6 p-3 md:p-6">
        {
          completed ? <CompletedCirclePart lpKey={lpKey} /> : <FinishedCircle />
        }

        {
          completed ? <CompletedTitleH2Part lpKey={lpKey} /> : <FinishedTitleH2 />
        }
        <p className="text-base md:text-xl text-(--tpm-primary) text-center">
          {completed ? '🎉 已通关' : '已完成'}《{currentLevelTitle}》
        </p>

        {isNewRecord && (
          <NewRecordBadge duration={3} />
        )}

        <div className="flex flex-col 2xs:flex-row items-center 2xs:items-stretch gap-3 md:gap-6">
          <TpmDivInsideSection
            className="flex flex-col items-center gap-3 p-3 md:p-6 rounded-2xl shadow-md text-(--tpm-primary)"
          >
            <div className="flex justify-center items-center gap-2 text-sm md:text-lg font-bold">
              <FaCircleDollarToSlot className="w-6 h-6 text-yellow-500" />
              <span>+<CountUp end={scoreAddition} />积分</span>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm md:text-lg font-bold">
              <FaStar className="w-6 h-6 text-yellow-500" />
              <div>
                现有：<CountUp start={score - scoreAddition} end={score} />
              </div>
            </div>
          </TpmDivInsideSection>

          <TpmDivInsideSection
            className="flex flex-col items-center gap-3 p-3 md:p-6 rounded-2xl shadow-md text-(--tpm-primary)"
          >
            <div className="flex justify-center items-center gap-2 text-sm md:text-lg font-bold">
              <FaCheck className="text-green-500" />
              <span>答对：<CountUp end={correctQuestionCount} />/<CountUp end={totalQuestions} />题</span>
            </div>

            <div className="flex justify-center items-center gap-2 text-sm md:text-lg font-bold">
              <FaChartPie className="text-green-500" />
              <span>正确率：<CountUp end={accuracy} />%</span>
            </div>

            {enableTimer && (
              <div className="flex justify-center items-center gap-2 text-sm md:text-lg font-bold">
                <FaClock className="text-blue-500" />
                <span>用时：{getTimerText(elapsedTime)}</span>
              </div>
            )}

            {enableSpeedrun && allCorrect && (
              <div className="flex justify-center items-center gap-2 text-sm md:text-lg font-bold">
                <FaTrophy className="text-yellow-500" />
                <span>速通纪录：{getTimerText(currentBestTime)}</span>
              </div>
            )}
          </TpmDivInsideSection>
        </div>

        <div className="w-full">
          <Link
            to="/math-challenges"
            className={cn(
              completed ? 'bg-green-600 hover:bg-green-700' : 'bg-(--tpm-btn-primary-bg) hover:bg-(--tpm-btn-primary-hover-bg)',
              'transition-colors duration-300',
              'group flex justify-center items-center gap-2 py-3 text-white text-lg font-medium rounded-2xl'
            )}
          >
            <FaArrowLeft className="w-5 h-5 group-hover:scale-x-150 group-hover:-translate-x-1.25 transition-scale duration-600" />
            返回闯关界面
          </Link>
        </div>
      </TpmSection>

      <TpmAudio ref={completeOrFinishMp3Ref} src={completeOrFinishMp3Url} />
    </div>
  );
}
