import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import {
  FaBolt,
  FaBook,
  FaCopy,
  FaDatabase,
  FaFileExport,
  FaKeyboard,
  FaRegQuestionCircle,
  FaSyncAlt,
} from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import basicStyles from '@/component/teachingPlan/basic.module.scss';
import TpmHeader from '@/component/TpmHeader';
import TpmDivInsideSection from '@/component/TpmDivInsideSection';
import EditorWrapper from '@/component/EditorWrapper';
import PromptContainer from './PromptContainer';
import PromptOpBtn from './PromptOpBtn';
import { localDownloadFile } from '@/lib/utils';
import { toast } from 'sonner';
import {
  genSchemaPrompt,
} from 'virtual:prompt-display';
import { LEARNING_PARTNER_DEFAULT_VALUE_MP } from '@/common/teachingPlanPromptData';
import { LEARNING_PARTNER_MAP } from '@/common/learningPartnerData';
import { Link } from 'react-router-dom';
import { getPromptVariablesMd } from './utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/ui/select';
import { usePromptEditStore } from './promptEditState';
import PromptUsageDocDialog from './PromptUsageDocDialog';

const shouldShowManualResetToast = true;

const renderTemplate = (template, data) => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] || match;
  });
};

export default function PromptFastEdit() {
  const {
    values,
    learningPartner,
    setValues,
    setLearningPartner,
    reset,
  } = usePromptEditStore();
  const [promptMarkdown, setPromptMarkdown] = useState('');

  const onLearningPartnerChange = (lpName) => {
    setLearningPartner(lpName);
    setValues({
      learningPartner: LEARNING_PARTNER_DEFAULT_VALUE_MP[lpName] || '',
    });
  };

  const handleInputChange = (key) => (newValue) => {
    setValues({ [key]: newValue });
  };

  useEffect(() => {
    if (shouldShowManualResetToast) {
      toast.info(
        '学习伙伴/标准页类型定义/GeoGebra组件文档默认值更新了。请点击“重置”查看~',
        { position: 'bottom-right' }
      );
    }
  }, []);

  // 生成预览
  useEffect(() => {
    const prompt = renderTemplate(genSchemaPrompt, values);
    setPromptMarkdown(prompt);
  }, [values]);

  // 重置所有字段
  const handleReset = () => {
    reset();
    toast.success('已重置所有字段~');
  };

  // 复制提示词
  const copyPrompt = () => {
    const promptText = renderTemplate(genSchemaPrompt, values).trim();
    navigator.clipboard.writeText(promptText);
    toast.success('提示词已复制到剪贴板~');
  };

  const exportVariablesMd = () => {
    const mdContent = getPromptVariablesMd(values);
    const fileName = `tpm-${values.title || document.title}-变量.md`;
    localDownloadFile({
      data: mdContent,
      fileName,
      onSuccess: () => toast.success('导出变量成功~'),
    });
  };

  const exportPrompt = () => {
    const promptText = renderTemplate(genSchemaPrompt, values).trim();
    const fileName = `tpm-${values.title || document.title}-提示词.md`;
    localDownloadFile({
      data: promptText,
      fileName,
      onSuccess: () => toast.success('导出提示词文档成功~'),
    });
  };

  return (
    <div className={basicStyles.container}>
      <TpmHeader className="gap-6" title="🔭 数学教案提示词快速生成 📚">
        <div className="flex flex-wrap justify-center gap-4">
          <PromptOpBtn
            onClick={handleReset}
            className="bg-gradient-to-r from-blue-700 to-blue-500"
          >
            <FaSyncAlt className="mr-2" />
            重置
          </PromptOpBtn>
          <PromptOpBtn
            onClick={copyPrompt}
            className="bg-gradient-to-r from-indigo-700 to-indigo-500"
          >
            <FaCopy className="mr-2" />
            复制
          </PromptOpBtn>
          <PromptOpBtn
            onClick={exportVariablesMd}
            className="bg-gradient-to-r from-blue-700 to-blue-500"
          >
            <FaFileExport className="mr-2" />
            导出变量
          </PromptOpBtn>
          <PromptOpBtn
            onClick={exportPrompt}
            className="bg-gradient-to-r from-indigo-700 to-indigo-500"
          >
            <FaBook className="mr-2" />
            导出整篇提示词
          </PromptOpBtn>
        </div>
      </TpmHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PromptContainer>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--tpm-primary)] flex items-center">
              <FaKeyboard className="mr-3" />
              编辑区
            </h2>
            <span className="flex items-center gap-1 bg-white/60 hover:bg-white/80 text-[var(--tpm-primary)] font-bold px-3 py-1 rounded-full text-sm">
              <FaBolt />实时同步
            </span>
          </div>

          <EditorWrapper
            type="input"
            label="课件标题"
            value={values.title}
            onChange={handleInputChange('title')}
          />

          <EditorWrapper
            label="知识点"
            value={values.knowledgePoints}
            onChange={handleInputChange('knowledgePoints')}
          />

          <EditorWrapper
            type="textarea"
            label="文件结构"
            value={values.fileStructure}
            onChange={handleInputChange('fileStructure')}
          />

          <div className="sm:flex sm:items-center">
            <label className="flex justify-start sm:justify-end items-center gap-2 font-medium mb-2 sm:mb-0 sm:w-1/3 sm:text-right sm:pr-4">
              <FaRegQuestionCircle className="cursor-pointer" title="预设的学习伙伴提示词" />
              学习伙伴
            </label>
            <Select onValueChange={onLearningPartnerChange} value={learningPartner}>
              <SelectTrigger className="sm:w-2/3">
                <SelectValue placeholder="请选择" />
              </SelectTrigger>
              <SelectContent>
                {
                  Object.entries(LEARNING_PARTNER_MAP).map(([value, label]) => {
                    return (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    );
                  })
                }
              </SelectContent>
            </Select>
          </div>

          <EditorWrapper
            type="textarea"
            label="学习伙伴"
            value={values.learningPartner}
            onChange={handleInputChange('learningPartner')}
            tags={['通常无需修改']}
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
          <div className="flex flex-wrap items-center gap-2 justify-between">
            <h2 className="text-2xl font-bold text-[var(--tpm-primary)] flex items-center">
              <FaMagnifyingGlass className="mr-3" />
              预览区
              <PromptUsageDocDialog />
            </h2>
            <Link
              className="flex items-center gap-1 bg-white/60 hover:bg-white/80 text-[var(--tpm-primary)] font-bold px-3 py-1 rounded-full text-sm"
              to="/prompt-display-schema"
              title="查看原始文档"
            >
              <FaDatabase />原始文档
            </Link>
          </div>

          <TpmDivInsideSection
            className="hover:bg-white/80 rounded-xl shadow-lg p-5 h-[calc(100%-80px)]"
          >
            <MarkdownRenderer className="overflow-y-auto" content={promptMarkdown} />
          </TpmDivInsideSection>
        </PromptContainer>
      </div>
    </div>
  );
}
