import React from 'react';
import {
  FaCrown,
  FaMedal,
  FaTrophy,
  FaFireAlt,
  FaChartBar,
  FaRegClock,
} from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { mockPlayers } from './leaderboardData';
import { useMathChallengesStore } from './mathChallengesState';
import dayjs from 'dayjs';
import TpmSection from '@/component/TpmSection';
import { Img } from 'react-image';
import TpmAvatarFallback from '@/component/TpmAvatarFallback';

const getRankIcon = (rank) => {
  if (rank === 1) return <FaCrown className="text-(--gold) text-xl" />;
  if (rank === 2) return <FaMedal className="text-(--silver) text-xl" />;
  if (rank === 3) return <FaMedal className="text-(--bronze) text-xl" />;
  return <span className="text-sm font-bold">{rank}</span>;
};

function PlayerCard({ className, player, rank }) {
  return (
    <div
      className={cn(
        'flex items-center p-4 rounded-xl transition-all duration-300 transform',
        'hover:-translate-y-0.5 hover:shadow-lg',
        player.isCurrentUser
          ? 'bg-gradient-to-r from-white/10 to-white/50 border-2 border-blue-300 shadow-md'
          : 'bg-white shadow-sm',
        rank <= 3 ? 'border-l-4' : '',
        // 卡片 border
        rank === 1 && (player.isCurrentUser ? 'border-(--gold)' : 'border-l-(--gold)'),
        rank === 2 && (player.isCurrentUser ? 'border-(--silver)' : 'border-l-(--silver)'),
        rank === 3 && (player.isCurrentUser ? 'border-(--bronze)' : 'border-l-(--bronze)'),
        className
      )}
    >
      <div
        className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center mr-4',
          rank <= 3 && 'border',
          rank === 1 ? 'border-(--gold) bg-yellow-100' : '',
          rank === 2 ? 'border-(--silver) bg-gray-100' : '',
          rank === 3 ? 'border-(--bronze) bg-yellow-100' : '',
          rank > 3 && (player.isCurrentUser ? 'bg-blue-400 text-white' : 'bg-gray-100')
        )}
      >
        {getRankIcon(rank)}
      </div>

      <div className="flex-1 flex items-center overflow-hidden mr-3">
        {
          player.avatar ? (
            <Img
              src={player.avatar}
              alt={player.name}
              className="w-10 h-10"
              container={(children) => {
                return (
                  <div className={cn(
                    'w-12 h-12 rounded-full hover:rotate-12 mr-3 flex justify-center items-center transition-[colors,rotate] duration-300',
                    'border-2',
                    rank === 1 && 'border-(--gold)',
                    rank === 2 && 'border-(--silver)',
                    rank === 3 && 'border-(--bronze)',
                    rank > 3 && 'border-(--tpm-primary)'
                  )}>
                    {children}
                  </div>
                );
              }}
              unloader={(
                <TpmAvatarFallback
                  iconClassName={player.isCurrentUser ? 'text-blue-600' : 'text-gray-600'}
                />
              )}
            />
          ) : (
            <TpmAvatarFallback iconClassName={player.isCurrentUser ? 'text-blue-600' : 'text-gray-600'} />
          )
        }
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center">
            {/* 用户名把右侧元素挤出卡片的问题：加了两个 overflow-hidden 和 truncate 解决的 */}
            <span
              title={player.name}
              className={cn('font-bold truncate', player.isCurrentUser ? 'text-blue-600' : 'text-gray-800')}
            >
              {player.name}
            </span>
            {player.isCurrentUser && (
              <span className="ml-2 text-xs bg-blue-200 text-blue-600 px-2 py-1 rounded-full">
                我
              </span>
            )}
          </div>
          <div className={cn('text-xs', player.isCurrentUser ? 'text-blue-600 font-bold' : 'text-gray-500')}>
            ID: {player.id.toString().padStart(4, '0')}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-right mr-3">
          <div className={cn(
            player.isCurrentUser ? 'font-black' : 'font-bold',
            player.isCurrentUser ? 'text-blue-600' : 'text-gray-800',
            // 分数颜色
            rank === 1 && 'text-(--gold)',
            rank === 2 && 'text-(--silver)',
            rank === 3 && 'text-(--bronze)'
          )}>
            {player.score}
          </div>
        </div>
        {
          // 右侧奖杯
          rank <= 3 ? (
            <FaTrophy className={cn(
              rank === 1 ? 'text-(--gold)' : '',
              rank === 2 ? 'text-(--silver)' : '',
              rank === 3 ? 'text-(--bronze)' : ''
            )} />
          ) : (
            <FaMedal className="text-(--tpm-primary)" />
          )
        }
      </div>
    </div>
  );
}

export default function Leaderboard() {
  const { score } = useMathChallengesStore();

  const rankedPlayers = [
    ...mockPlayers,
    { id: mockPlayers.length + 1, name: '我', score, isCurrentUser: true },
  ];
  const sortedRankedPlayers = rankedPlayers.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    return b.id - a.id;
  });

  const playerCardWidths = ['w-full', 'w-[96%]', 'w-[92%]', 'w-[88%]'];

  return (
    <TpmSection bgColor="bg-gradient-to-r from-white/70 to-white/80">
      <div className="text-center">
        <h1 className="flex justify-center items-center gap-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">
          <FaChartBar className="text-(--tpm-primary)" />积分排行榜
        </h1>
        <p className="flex justify-center items-center gap-1 mt-1 text-(--tpm-primary)">
          <FaFireAlt className="text-red-500" />看看谁是最强玩家
        </p>
        <div className="flex justify-center items-center gap-1 mt-1 text-(--tpm-primary) text-sm">
          <FaRegClock />更新时间: {dayjs().format('YYYY-MM-DD')}
        </div>
      </div>

      <div className="space-y-4 flex flex-col items-end">
        {
          sortedRankedPlayers
            .map((player, index) => (
              <PlayerCard
                key={player.id}
                className={playerCardWidths[index] ?? playerCardWidths[3]}
                player={player}
                rank={index + 1}
              />
            ))
        }
      </div>
    </TpmSection>
  );
}
