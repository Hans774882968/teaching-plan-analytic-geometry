import { motion } from 'motion/react';
import basicStyles from '@/component/teachingPlan/basic.module.scss';
import TpmHeader from '@/component/TpmHeader';
import { TypeAnimation } from 'react-type-animation';
import {
  FaCrown,
  FaFire,
  FaMedal,
  FaStar,
  FaTrophy,
  FaUser,
} from 'react-icons/fa';
import { useMathChallengesStore } from './mathChallengesState';
import { cn } from '@/lib/utils';
import TpmSection from '@/component/TpmSection';
import LevelCard from './LevelCard';
import { levels } from './levels';
import TpmCard from '@/component/TpmCard';
import NoData from '@/component/NoData';
import AchievementCard from './AchievementCard';

const levelCardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function MathChallenges() {
  const {
    score,
    countCompletedLevels,
  } = useMathChallengesStore();
  const completedLevelsCount = countCompletedLevels();

  const has1 = completedLevelsCount >= 1;
  const has3 = completedLevelsCount >= 3;
  const has5 = completedLevelsCount >= 5;
  const has7 = completedLevelsCount >= 7;
  const has9 = completedLevelsCount >= 9;
  const has11 = completedLevelsCount >= 11;

  return (
    <div className={basicStyles.container}>
      <TpmHeader title="🔭 数学闯关 🔥">
        <p>
          <TypeAnimation
            sequence={[
              '闯关式巩固各个方向的数学知识',
              1000,
              '',
              1000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </p>
      </TpmHeader>

      <TpmSection>
        <h2 className={cn(
          basicStyles.teachingPlanH2,
          'flex items-center gap-2'
        )}>
          <FaUser className="text-yellow-500" />
          我的进度
        </h2>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center">
            <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center text-white mr-3">
              <FaStar />
            </div>
            <div>
              <p className="text-lg text-gray-600">总积分</p>
              <p className="text-2xl font-bold text-gray-800">{score}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white mr-3">
              <FaTrophy />
            </div>
            <div>
              <p className="text-lg text-gray-600">已完成关卡</p>
              <p className="text-2xl font-bold text-gray-800">{completedLevelsCount}</p>
            </div>
          </div>
        </div>
      </TpmSection>
      {
        levels.length ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={levelCardContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {
              levels.map((level) => {
                return (
                  <LevelCard
                    key={level.title}
                    level={level}
                  />
                );
              })
            }
          </motion.div>
        ) : (
          <TpmCard>
            <NoData text="暂无关卡" />
          </TpmCard>
        )
      }

      <TpmSection bgColor="bg-gradient-to-r from-white/70 to-white/80">
        <h2 className={cn(
          basicStyles.teachingPlanH2,
          'flex items-center gap-2'
        )}>
          <FaMedal className="text-yellow-500" />
          我的成就
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AchievementCard
            bgColor="bg-yellow-100"
            borderColor="border-yellow-400"
            condition={has1}
            description="完成第一个关卡"
            icon={<FaStar />}
            iconBgColor="bg-yellow-400"
            title="初出茅庐"
            textColor="text-yellow-600"
          />
          <AchievementCard
            bgColor="bg-green-100"
            borderColor="border-green-400"
            condition={has3}
            description="完成三个关卡"
            icon={<FaFire />}
            iconBgColor="bg-green-400"
            title="数学萌新"
            textColor="text-green-600"
          />
          <AchievementCard
            bgColor="bg-blue-100"
            borderColor="border-blue-400"
            condition={has5}
            description="完成五个关卡"
            icon={<FaFire />}
            iconBgColor="bg-blue-400"
            title="渐入佳境"
            textColor="text-blue-600"
          />
          <AchievementCard
            bgColor="bg-purple-100"
            borderColor="border-purple-400"
            condition={has7}
            description="完成七个关卡"
            icon={<FaFire />}
            iconBgColor="bg-purple-400"
            title="数学达人"
            textColor="text-purple-600"
          />
          <AchievementCard
            bgColor="bg-orange-100"
            borderColor="border-orange-400"
            condition={has9}
            description="完成九个关卡"
            icon={<FaFire />}
            iconBgColor="bg-orange-400"
            title="数学大师"
            textColor="text-orange-600"
          />
          <AchievementCard
            bgColor="bg-red-100"
            borderColor="border-red-400"
            condition={has11}
            description="完成11个关卡"
            icon={<FaCrown />}
            iconBgColor="bg-red-400"
            title="一代宗师"
            textColor="text-red-600"
          />
        </div>
      </TpmSection>
    </div>
  );
}
