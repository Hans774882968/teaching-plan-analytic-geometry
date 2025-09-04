import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import {
  FaEdit,
} from 'react-icons/fa';
import { editorLightThemes } from '@/common/editorThemeOptions';
import { useSettingsStore } from '@/component/layout/states/settingsState';
import { cn } from '@/lib/utils';
import useEditorFontSizeHook from '@/hooks/useEditorFontSizeHook';
import { Input } from '@/component/ui/input';
import { Textarea } from '@/component/ui/textarea';

function EditorFieldTag({ children }) {
  return (
    <span className="bg-white/20 hover:bg-white/30 transition-colors duration-300 px-2 py-1 rounded-full text-sm text-white font-bold">
      {children}
    </span>
  );
}

export default function EditorWrapper({
  value,
  onChange,
  label,
  type = 'code-mirror',
  tags = [],
}) {
  const { lightEditorTheme } = useSettingsStore();
  const currentThemes = editorLightThemes;
  const currentEditorTheme = currentThemes.find(t =>
    t.value === (lightEditorTheme)
  )?.theme;

  const {
    editorFontSize,
    editorRef,
  } = useEditorFontSizeHook();

  return (
    <div className={cn(
      'transition-all duration-300',
      'hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]',
      'border border-[var(--prompt-fast-edit-border)] hover:border-(--navbar-bg-start) bg-white rounded-xl shadow-lg overflow-hidden'
    )}>
      <div className="flex flex-wrap items-center gap-2 justify-between bg-gradient-to-r from-[var(--navbar-bg-start)] to-[var(--navbar-bg-end)] p-3 rounded-t-lg">
        <h3 className="text-lg text-white font-bold flex items-center">
          <FaEdit className="mr-2" />
          {label}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {
            Array.isArray(tags) && tags.map((tag, index) => {
              return (
                <EditorFieldTag key={index}>{tag}</EditorFieldTag>
              );
            })
          }
          <EditorFieldTag>Markdown</EditorFieldTag>
        </div>
      </div>
      <div>
        {
          type === 'code-mirror' && (
            <CodeMirror
              ref={editorRef}
              style={{ fontSize: `${editorFontSize}px` }}
              value={value}
              onChange={onChange}
              extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
              theme={currentEditorTheme}
              maxHeight="600px"
            />
          )
        }
        {
          type === 'textarea' && (
            <Textarea
              className="max-h-60 focus-visible:border-(--navbar-bg-start) focus-visible:ring-0 rounded-none"
              rows={3} // somehow useless
              name={label}
              placeholder="请输入"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )
        }
        {
          type === 'input' && (
            <Input
              className="focus-visible:border-(--navbar-bg-start) focus-visible:ring-0 rounded-none"
              name={label}
              placeholder="请输入"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )
        }
      </div>
    </div>
  );
}
