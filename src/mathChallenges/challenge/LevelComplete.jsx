import basicStyles from '@/component/teachingPlan/basic.module.scss';
import TpmDivInsideSection from '@/component/TpmDivInsideSection';
import TpmSection from '@/component/TpmSection';
import { FaRegCheckCircle, FaSearch } from 'react-icons/fa';
import { FaCircleDollarToSlot, FaCircleInfo } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useMathChallengesStore } from '../mathChallengesState';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';

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
            <div className="p-5 bg-green-100 rounded-full">
              <FaRegCheckCircle className="w-16 h-16 text-green-600" />
            </div>
          ) : (
            <div className="p-5 bg-blue-200 rounded-full">
              <FaCircleInfo className="w-10 h-10 text-blue-600" />
            </div>
          )
        }

        <h2 className={cn('text-3xl font-bold', completed ? 'text-green-700' : 'text-blue-700')}>恭喜</h2>
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
              'flex justify-center items-center gap-2 py-3 text-white text-lg font-medium rounded-2xl'
            )}
          >
            <FaSearch />
            返回闯关界面
          </Link>
        </div>
      </TpmSection>
    </div>
  );
}
