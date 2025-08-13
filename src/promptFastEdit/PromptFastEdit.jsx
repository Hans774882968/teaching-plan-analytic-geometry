import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import {
  FaBolt,
  FaCopy,
  FaDatabase,
  FaGlasses,
  FaKeyboard,
  FaSyncAlt,
} from 'react-icons/fa';
import basicStyles from '@/component/teachingPlan/basic.module.scss';
import PromptContainer from './PromptContainer';
import EditorWrapper from './EditorWrapper';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import {
  genSchemaPrompt,
} from 'virtual:prompt-display';
import { tpPromptDefaultValueMp } from '@/common/teachingPlanPromptData';
import { Link } from 'react-router-dom';

const renderTemplate = (template, data) => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] || match;
  });
};

export default function PromptFastEdit() {
  const [values, setValues] = useState(tpPromptDefaultValueMp);
  const [promptMarkdown, setPromptMarkdown] = useState('');

  const handleInputChange = (key) => (newValue) => {
    setValues(prev => ({
      ...prev,
      [key]: newValue,
    }));
  };

  // 生成预览
  useEffect(() => {
    const prompt = renderTemplate(genSchemaPrompt, values);
    setPromptMarkdown(prompt);
  }, [values]);

  // 重置所有字段
  const handleReset = () => {
    setValues(tpPromptDefaultValueMp);
    toast.success('已重置所有字段~');
  };

  // 复制提示词
  const copyPrompt = () => {
    const promptText = renderTemplate(genSchemaPrompt, values).trim();
    navigator.clipboard.writeText(promptText);
    toast.success('提示词已复制到剪贴板~');
  };

  return (
    <div className={basicStyles.container}>
      <motion.header
        className={cn(
          'transition-colors duration-300',
          'border-2 border-[var(--prompt-fast-edit-border)] hover:border-[var(--tpm-primary)]',
          'flex flex-col items-center gap-6 bg-gradient-to-br from-sky-100 to-sky-50 text-white px-5 py-7.5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] text-center relative overflow-hidden'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="inline-block relative">
          <h1 className={cn(basicStyles.teachingPlanH1, 'animate-tpm-shake', '!text-[var(--tpm-primary)]')}>
            🔭 数学教案提示词快速生成 📚
          </h1>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleReset}
            className="px-5 py-2.5 leading-[1.3] cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300 flex items-center"
          >
            <FaSyncAlt className="mr-2" />
            重置
          </button>
          <button
            onClick={copyPrompt}
            className="px-5 py-2.5 leading-[1.3] cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300 flex items-center"
          >
            <FaCopy className="mr-2" />
            复制提示词
          </button>
        </div>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PromptContainer>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--tpm-primary)] flex items-center">
              <FaKeyboard className="mr-3" />
              编辑提示词
            </h2>
            <span className="flex items-center gap-1 bg-white/60 hover:bg-white/80 text-[var(--tpm-primary)] font-bold px-3 py-1 rounded-full text-sm">
              <FaBolt />实时同步
            </span>
          </div>

          <EditorWrapper
            label="课件标题"
            value={values.title}
            onChange={handleInputChange('title')}
            height={120}
          />

          <EditorWrapper
            label="知识点"
            value={values.knowledgePoints}
            onChange={handleInputChange('knowledgePoints')}
          />

          <EditorWrapper
            label="文件结构"
            value={values.fileStructure}
            onChange={handleInputChange('fileStructure')}
          />

          <EditorWrapper
            label="学习伙伴"
            value={values.learningPartner}
            onChange={handleInputChange('learningPartner')}
          />

          <EditorWrapper
            label="标准页类型定义"
            value={values.standardPageTypes}
            onChange={handleInputChange('standardPageTypes')}
            tags={['通常无需修改']}
          />

          <EditorWrapper
            label="GeoGebra组件文档"
            value={values.geogebraUsageDoc}
            onChange={handleInputChange('geogebraUsageDoc')}
            tags={['通常无需修改']}
          />
        </PromptContainer>

        <PromptContainer>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--tpm-primary)] flex items-center">
              <FaGlasses className="mr-3" />
              提示词预览
            </h2>
            <Link
              className="flex items-center gap-1 bg-white/60 hover:bg-white/80 text-[var(--tpm-primary)] font-bold px-3 py-1 rounded-full text-sm"
              to="/prompt-display-schema"
            >
              <FaDatabase />原始文档
            </Link>
          </div>

          <div className={cn(
            'transition-colors duration-300',
            'border border-[var(--prompt-fast-edit-border)] hover:border-[var(--tpm-primary)]',
            'bg-white/40 hover:bg-white/80 rounded-xl shadow-lg p-5 h-[calc(100%-80px)]'
          )}>
            <MarkdownRenderer className="overflow-y-auto" content={promptMarkdown} />
          </div>
        </PromptContainer>
      </div>
    </div>
  );
}
