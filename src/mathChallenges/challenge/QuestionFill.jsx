import { Input } from '@/component/ui/input';
import QuestionCommon from './QuestionCommon';

export default function QuestionFill({
  currentQuestion,
  isCorrect,
  setUserAnswer,
  showExplanation,
  userAnswer,
}) {
  return (
    <QuestionCommon
      currentQuestion={currentQuestion}
      isCorrect={isCorrect}
      showExplanation={showExplanation}
    >
      <Input
        name="内容"
        placeholder="请输入"
        disabled={showExplanation}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
    </QuestionCommon>
  );
}
