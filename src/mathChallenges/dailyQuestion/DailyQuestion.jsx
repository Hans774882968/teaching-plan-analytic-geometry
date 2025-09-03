import { motion } from 'motion/react';
import basicStyles from '@/component/teachingPlan/basic.module.scss';
import { useState, useEffect, useRef } from 'react';
import {
  FaQuestionCircle,
  FaStar,
  FaTrophy,
  FaUser,
} from 'react-icons/fa';
import { Button } from '@/component/ui/button';
import { cn } from '@/lib/utils';
import { useMathChallengesStore } from '../mathChallengesState';
import { useDailyQuestionStore } from './dailyQuestionState';
import { calculateStreakBonus, shouldNotifyCheckIn } from './utils';
import TpmSection from '@/component/TpmSection';
import TpmHeader from '@/component/TpmHeader';
import { TypeAnimation } from 'react-type-animation';
import { Separator } from '@/component/ui/separator';
import dayjs from 'dayjs';
import { allQuestions, allQuestionsMp } from '../levels';
import { isAnswerCorrect } from '@/lib/quizUtils';
import { useMemo } from 'react';
import QuestionChoice from '../challenge/QuestionChoice';
import QuestionFill from '../challenge/QuestionFill';
import { getQuestionScore } from '../utils';
import CountUp from 'react-countup';
import Tag from '@/component/Tag';
import { toast } from 'sonner';
import CheckInCalendar from './CheckInCalendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/component/ui/popover';
import { sample } from 'lodash-es';

const quotes = [
  '学习就像爬山，每一步都是向上的进步',
  '知识是力量，坚持是成功的关键',
  '今天的努力，是明天的收获',
  '每天进步一点点，成就未来的自己',
  '思考比答案更重要，过程比结果更珍贵',
  '挑战自我，超越极限',
  '学而时习之，不亦说乎',
  '知识改变命运，学习成就未来',
  '坚持不懈，金石可镂',
  '智慧源于思考，成功源于坚持',
];

function HeaderSection() {
  const randomQuote = sample(quotes);
  const currentQuote = useRef(randomQuote);

  return (
    <TpmHeader title="🔥 每日一题 🧩">
      <p className="text-lg italic">
        <TypeAnimation
          sequence={[
            currentQuote.current,
            3000,
            '',
            3000,
          ]}
          speed={30}
          wrapper="span"
          repeat={Infinity}
        />
      </p>
    </TpmHeader>
  );
}

function QuestionAnswerSection({
  currentQuestion,
  handleSubmitAnswer,
  isCorrect,
  setUserAnswer,
  showExplanation,
  userAnswer,
}) {
  const {
    isTodayCheckedIn,
  } = useDailyQuestionStore();

  if (!currentQuestion) return null;
  const scoreDelta = getQuestionScore(currentQuestion);
  const tagBgColor = currentQuestion.belongLevel.bgColor;

  return (
    <TpmSection>
      <div className="flex flex-wrap items-center gap-4">
        <Tag className={cn(tagBgColor, 'text-white hover:opacity-90 transition-opacity flex items-center gap-1')}>
          <FaStar />{scoreDelta}分
        </Tag>
        {
          isTodayCheckedIn() && (
            <Tag className={cn(tagBgColor, 'text-white hover:opacity-90 transition-opacity')}>已签到</Tag>
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
      {
        !showExplanation && (
          <Button
            className="w-full transition-all duration-150 hover:shadow-lg active:scale-95"
            onClick={handleSubmitAnswer}
          >
            提交
          </Button>
        )
      }
    </TpmSection>
  );
}

function StatusAndCalendarSection({ currentQuestion }) {
  const {
    score,
  } = useMathChallengesStore();

  const {
    checkInDates,
    getStreakDays,
    isTodayCheckedIn,
  } = useDailyQuestionStore();
  const streakDays = getStreakDays();
  const bonusScore = calculateStreakBonus(streakDays + !isTodayCheckedIn());
  const questionScore = getQuestionScore(currentQuestion);
  const totalAddScore = questionScore + bonusScore;

  return (
    <TpmSection>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center text-white mr-3">
            <FaStar className="text-2xl" />
          </div>
          <div>
            <p className="text-lg text-yellow-500">总积分</p>
            <p className="text-2xl font-bold text-yellow-500">
              <CountUp end={score} />
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white mr-3">
            <FaTrophy className="text-2xl" />
          </div>
          <div>
            <p className="text-lg text-green-500">连胜</p>
            <div className="flex items-center text-2xl font-bold text-green-500">
              <CountUp end={streakDays} />天
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center text-white mr-3">
            <FaUser className="text-2xl" />
          </div>
          <div>
            <p className="text-lg text-purple-500">累计签到</p>
            <div className="flex items-center text-2xl font-bold text-purple-500">
              <CountUp end={checkInDates.length} />天
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center text-white mr-3">
            <FaStar className="text-2xl" />
          </div>
          <div>
            <p className="text-lg text-primary">今日{isTodayCheckedIn() ? '已' : '可'}加</p>
            <div className="flex items-center text-2xl font-bold text-primary">
              {totalAddScore}分
              <Popover>
                <PopoverTrigger asChild>
                  <FaQuestionCircle className="ml-2 text-primary cursor-help" />
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  align="center"
                  className="bg-primary text-primary-foreground text-sm rounded-lg shadow-lg max-w-xs"
                >
                  <div className="mb-1">
                    {totalAddScore} = {questionScore} + {bonusScore}
                  </div>
                  <div className="mb-2">连胜得分规则：</div>
                  <div className="text-xs space-y-1">
                    <div>• 第1到6天，每天签到加10分</div>
                    <div>• 连胜第7天，加70分</div>
                    <div>• 第8到14天，每天加15分</div>
                    <div>• 连胜第15天，加150分</div>
                    <div>• 第16到29天，每天加20分</div>
                    <div>• 连胜第30天，加300分</div>
                    <div>• 第31到59天，每天加25分</div>
                    <div>• 连胜第60天，加600分</div>
                    <div>• 第61天之后，每天加30分</div>
                    <div>• 第61天之后，每隔30天赠送1000分</div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-(--tpm-primary)" />

      <CheckInCalendar />
    </TpmSection>
  );
}

export default function DailyQuestion() {
  // 用户每天有无数次答题机会，已签到视为已回答正确
  const { score, setScore } = useMathChallengesStore();
  const {
    getStreakDays,
    todayQuestion,
    setTodayQuestion,
    isTodayCheckedIn,
    performCheckIn,
  } = useDailyQuestionStore();
  const streakDays = getStreakDays();

  const currentQuestion = useMemo(() => {
    if (!todayQuestion) return null;
    return allQuestionsMp[todayQuestion.qid] || null;
  }, [todayQuestion]);

  const [userAnswer, setUserAnswer] = useState(isTodayCheckedIn() ? currentQuestion.correct : '');
  const [showExplanation, setShowExplanation] = useState(isTodayCheckedIn());
  const [isCorrect, setIsCorrect] = useState(isTodayCheckedIn() || null);

  useEffect(() => {
    if (!shouldNotifyCheckIn()) return;
    if (isTodayCheckedIn()) return;
    toast.info('大佬，你今天还没有签到喔qwq');
  }, [isTodayCheckedIn]);

  useEffect(() => {
    if (todayQuestion && todayQuestion.date === dayjs().format('YYYY-MM-DD')) return;
    const randomQuestion = sample(allQuestions);
    const newTodayQuestion = {
      qid: randomQuestion.qid,
      date: dayjs().format('YYYY-MM-DD'),
    };
    setTodayQuestion(newTodayQuestion);
  }, [todayQuestion, setTodayQuestion]);

  const handleSubmitAnswer = () => {
    if (!currentQuestion) return;
    setShowExplanation(true);
    const newIsCorrect = isAnswerCorrect(userAnswer, currentQuestion);
    setIsCorrect(newIsCorrect);
    if (!newIsCorrect) return;
    if (isTodayCheckedIn()) return;
    toast.success('签到成功~');
    const currentBonusScore = calculateStreakBonus(streakDays + 1);
    const totalAddScore = getQuestionScore(currentQuestion) + currentBonusScore;
    setScore(score + totalAddScore);
    performCheckIn();
  };

  if (!currentQuestion) {
    return <div className="flex items-center justify-center min-h-screen">加载中...</div>;
  }

  return (
    <div className={basicStyles.container}>
      <HeaderSection />
      <QuestionAnswerSection
        currentQuestion={currentQuestion}
        handleSubmitAnswer={handleSubmitAnswer}
        isCorrect={isCorrect}
        setUserAnswer={setUserAnswer}
        showExplanation={showExplanation}
        userAnswer={userAnswer}
      />
      <StatusAndCalendarSection
        currentQuestion={currentQuestion}
      />
    </div>
  );
}
