import basicStyles from '@/component/teachingPlan/basic.module.scss';
import TpmDivInsideSection from '@/component/TpmDivInsideSection';
import TpmSection from '@/component/TpmSection';
import { FaArrowLeft, FaRegCheckCircle, FaStar } from 'react-icons/fa';
import { FaCircleDollarToSlot, FaCircleInfo } from 'react-icons/fa6';
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
}) {
  const {
    isCompleted,
  } = useMathChallengesStore();
  const completed = isCompleted(currentLevelTitle);
  const shouldShowLP = Math.random() * (lpCount + 1) >= 1;
  const lpKey = shouldShowLP ? sample(learningPartnerKeys) : '';

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
      <TpmSection className="items-center bounce-in">
        {
          completed ? <CompletedCirclePart lpKey={lpKey} /> : <FinishedCircle />
        }

        {
          completed ? <CompletedTitleH2Part lpKey={lpKey} /> : <FinishedTitleH2 />
        }
        <p className="text-base md:text-xl text-(--tpm-primary) text-center">
          {completed ? '🎉 已通关' : '已完成'}《{currentLevelTitle}》
        </p>

        <TpmDivInsideSection
          className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl shadow-md text-(--tpm-primary)"
        >
          <div className="flex justify-center items-center gap-2 text-lg md:text-2xl font-bold">
            <FaCircleDollarToSlot className="w-6 h-6 text-yellow-500" />
            <span>+<CountUp end={scoreAddition} />积分</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-lg md:text-2xl font-bold">
            <FaStar className="w-6 h-6 text-yellow-500" />
            <div>
              现有：<CountUp start={score - scoreAddition} end={score} />
            </div>
          </div>
        </TpmDivInsideSection>

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
