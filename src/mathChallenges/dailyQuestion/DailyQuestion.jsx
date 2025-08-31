import { motion } from 'motion/react';
import basicStyles from '@/component/teachingPlan/basic.module.scss';
import { useState, useEffect, Fragment, useRef } from 'react';
import { FaQuestionCircle, FaChevronLeft, FaChevronRight, FaStar, FaTrophy } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/component/ui/tooltip';
import { Button } from '@/component/ui/button';
import { cn } from '@/lib/utils';
import { useMathChallengesStore } from '../mathChallengesState';
import { useDailyQuestionStore } from './dailyQuestionState';
import { calculateStreakBonus, generateCalendarData } from './utils';
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
  const currentQuote = useRef(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <TpmHeader title="🔥 每日一题 🧩">
      <p className="text-lg text-center text-muted-foreground italic">
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
  if (!currentQuestion) return null;

  return (
    <TpmSection>
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
            className="w-full transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            onClick={handleSubmitAnswer}
          >
            提交
          </Button>
        )
      }
    </TpmSection>
  );
}

function StatusCalendarSection({ currentQuestion }) {
  const {
    score,
  } = useMathChallengesStore();

  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const {
    streakDays,
    checkInDates,
    isTodayCheckedIn,
  } = useDailyQuestionStore();
  const bonusScore = calculateStreakBonus(streakDays + !isTodayCheckedIn());
  const totalAddScore = getQuestionScore(currentQuestion) + bonusScore;

  const calendarData = generateCalendarData(
    currentMonth.year(),
    currentMonth.month(),
    checkInDates
  );

  const changeMonth = (delta) => {
    setCurrentMonth(currentMonth.add(delta, 'month'));
  };

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
            <div className="flex items-center text-lg text-green-500">
              {streakDays}天
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center text-white mr-3">
            <FaStar className="text-2xl" />
          </div>
          <div>
            <p className="text-lg text-primary">今日</p>
            <div className="flex items-center text-lg text-primary">
              {isTodayCheckedIn() ? '已' : '可'}+{totalAddScore}分
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <FaQuestionCircle className="ml-2 text-primary cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="text-sm rounded-lg shadow-lg max-w-xs">
                    <div className="font-medium mb-2">连胜得分规则：</div>
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
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-(--tpm-primary)" />
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer hover:text-(--tpm-primary)"
          onClick={() => changeMonth(-1)}
        >
          <FaChevronLeft />
        </Button>
        <h3 className="text-lg font-medium text-foreground">
          {currentMonth.format('YYYY年M月')}
        </h3>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer hover:text-(--tpm-primary)"
          onClick={() => changeMonth(1)}
        >
          <FaChevronRight />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
          <div key={day} className="flex justify-center items-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}

        {calendarData.map((week, weekIndex) => (
          <Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={cn(
                  'flex justify-center items-center py-2 text-sm',
                  day.isCurrentMonth ? 'text-gray-800' : 'text-gray-300'
                )}
              >
                {day.isCheckedIn && day.isCurrentMonth ? (
                  <div className="w-8 h-8 rounded-full bg-(--tpm-primary) flex items-center justify-center text-white font-bold">
                    {day.day}
                  </div>
                ) : (
                  <span>{day.day}</span>
                )}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </TpmSection>
  );
}

export default function DailyQuestion() {
  // 用户每天有无数次答题机会，已签到视为已回答正确
  const { score, setScore } = useMathChallengesStore();
  const {
    streakDays,
    todayQuestion,
    setTodayQuestion,
    isTodayCheckedIn,
    performCheckIn,
  } = useDailyQuestionStore();

  const currentQuestion = useMemo(() => {
    if (!todayQuestion) return null;
    return allQuestionsMp[todayQuestion.qid] || null;
  }, [todayQuestion]);

  const [userAnswer, setUserAnswer] = useState(isTodayCheckedIn() ? currentQuestion.correct : '');
  const [showExplanation, setShowExplanation] = useState(isTodayCheckedIn());
  const [isCorrect, setIsCorrect] = useState(isTodayCheckedIn() || null);

  useEffect(() => {
    if (todayQuestion && todayQuestion.date === dayjs().format('YYYY-MM-DD')) return;
    const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
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
      <StatusCalendarSection
        currentQuestion={currentQuestion}
      />
    </div>
  );
}
