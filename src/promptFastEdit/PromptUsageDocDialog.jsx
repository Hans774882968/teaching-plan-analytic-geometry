import { FaRegQuestionCircle } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/component/ui/dialog';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import {
  genSchemaPromptUsageDoc,
} from 'virtual:prompt-display';

export default function PromptUsageDocDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="p-2 rounded-lg cursor-pointer hover:bg-white/[0.2] transition-colors"
          title="提示词食用方式"
        >
          <FaRegQuestionCircle />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-85 sm:max-w-140 md:max-w-170 lg:max-w-200">
        <DialogHeader>
          <DialogTitle>食用方式</DialogTitle>
          <DialogDescription>
            提示词食用方式
          </DialogDescription>
        </DialogHeader>
        <MarkdownRenderer content={genSchemaPromptUsageDoc} />
      </DialogContent>
    </Dialog>
  );
}
