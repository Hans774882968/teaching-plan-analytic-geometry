import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import {
  FaCheck,
  FaClock,
  FaLockOpen,
  FaUserClock,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMathChallengesStore } from './mathChallengesState';
import { useState } from 'react';
import { getTimerText } from './utils';
import { FaShuffle } from 'react-icons/fa6';
import { Switch } from '@/component/ui/switch';

const levelCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function LevelCard({
  level,
}) {
  const {
    scoredMp,
    isCompleted,
    getBestTime,
  } = useMathChallengesStore();
  const [enableTimer, setEnableTimer] = useState(false);
  const [enableShuffle, setEnableShuffle] = useState(false);
  const enableSpeedrun = enableTimer && enableShuffle;
  const completed = isCompleted(level.title);
  const scoredQuestionCount = (scoredMp[level.title] || []).length;
  const levelBestTime = getBestTime(level.title);
  const levelBestTimeText = getTimerText(levelBestTime);

  function getBeginBtnIcon() {
    if (enableSpeedrun) return <FaUserClock />;
    if (enableTimer) return <FaClock />;
    if (enableShuffle) return <FaShuffle />;
    return null;
  }

  const buildChallengeUrl = () => {
    const params = new URLSearchParams();
    if (enableTimer) params.append('timer', 'true');
    if (enableShuffle) params.append('shuffle', 'true');
    const queryString = params.toString();
    return `/math-challenge/${level.title}${queryString ? `?${queryString}` : ''}`;
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-white/75 to-white/85 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl"
      variants={levelCardVariants}
      whileHover={{
        y: -4,
      }}
    >
      <div className={cn(level.bgColor, 'p-5 flex items-center')}>
        <div className="bg-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
          {level.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{level.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm">
            {level.quiz.length} 道题目
          </span>
          {
            completed ? (
              <div className="flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                <FaCheck />已通关
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                <FaLockOpen />做对{scoredQuestionCount}/{level.quiz.length}
              </div>
            )
          }
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className={cn(level.bgColor, 'h-2 rounded-full')}
            style={{ width: `${scoredQuestionCount / level.quiz.length * 100}%` }}
          />
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <FaUserClock />
              <span>速通纪录</span>
            </div>
            <span>{levelBestTimeText}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <FaClock />
              <span>计时模式</span>
            </div>
            <Switch
              checked={enableTimer}
              onCheckedChange={setEnableTimer}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <FaShuffle />
              <span>打乱题目</span>
            </div>
            <Switch
              checked={enableShuffle}
              onCheckedChange={setEnableShuffle}
            />
          </div>
        </div>

        <Link
          to={buildChallengeUrl()}
          className={cn(
            level.bgColor,
            'w-full flex justify-center items-center gap-2 text-white py-1 rounded-xl font-semibold hover:opacity-80 transition-opacity duration-300'
          )}
        >
          {getBeginBtnIcon()}
          开始
        </Link>
      </div>
    </motion.div>
  );
}
