import basicStyles from '@/component/teachingPlan/basic.module.scss';
import TpmDivInsideSection from '@/component/TpmDivInsideSection';
import TpmSection from '@/component/TpmSection';
import { FaArrowLeft, FaRegCheckCircle } from 'react-icons/fa';
import { FaCircleDollarToSlot, FaCircleInfo } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useMathChallengesStore } from '../mathChallengesState';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';

function CompletedCircle() {
  return (
    <div className="p-5 bg-green-100 rounded-full">
      <FaRegCheckCircle className="w-20 h-20 text-green-600" />
    </div>
  );
}

function FinishedCircle() {
  return (
    <div className="p-5 bg-blue-200 rounded-full">
      <FaCircleInfo className="w-20 h-20 text-blue-600" />
    </div>
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

  return (
    <div className={basicStyles.container}>
      <TpmSection className="items-center">
        {
          completed ? (
            <CompletedCircle />
          ) : (
            <FinishedCircle />
          )
        }

        <h2 className={cn('text-5xl font-bold', completed ? 'text-green-700' : 'text-blue-700')}>恭喜</h2>
        <p className="text-xl text-(--tpm-primary)">
          {completed ? '🎉 已通关' : '已完成'}《{currentLevelTitle}》
        </p>

        <TpmDivInsideSection
          className="flex flex-col items-center gap-3 p-6 rounded-2xl shadow-md text-(--tpm-primary)"
        >
          <div className="flex justify-center items-center gap-4">
            <FaCircleDollarToSlot className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold">+<CountUp end={scoreAddition} />积分</span>
          </div>
          <div className="text-2xl font-bold">现有积分：<CountUp start={score - scoreAddition} end={score} /></div>
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
    </div>
  );
}
