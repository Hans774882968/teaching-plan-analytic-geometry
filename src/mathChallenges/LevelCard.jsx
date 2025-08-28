import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { FaCheck, FaLockOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMathChallengesStore } from './mathChallengesState';

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
  } = useMathChallengesStore();
  const completed = isCompleted(level.title);
  const scoredQuestionCount = (scoredMp[level.title] || []).length;

  return (
    <motion.div
      className="bg-gradient-to-r from-white/75 to-white/85 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl"
      variants={levelCardVariants}
      whileHover={{
        y: -4,
      }}
    >
      <Link to={`/math-challenge/${level.title}`}>
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
            <span className="text-sm text-gray-600">
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
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={cn(level.bgColor, 'h-2 rounded-full')}
              style={{ width: `${scoredQuestionCount / level.quiz.length * 100}%` }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
