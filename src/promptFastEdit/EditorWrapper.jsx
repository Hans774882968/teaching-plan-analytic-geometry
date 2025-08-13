import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import {
  FaEdit,
} from 'react-icons/fa';
import { editorLightThemes } from '@/common/editorThemeOptions';
import { useSettingsStore } from '@/component/layout/states/settingsState';
import { cn } from '@/lib/utils';

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
  tags = [],
}) {
  const { lightEditorTheme } = useSettingsStore();
  const currentThemes = editorLightThemes;
  const currentEditorTheme = currentThemes.find(t =>
    t.value === (lightEditorTheme)
  )?.theme;

  return (
    <div className={cn(
      'transition-all duration-300',
      'hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]',
      'border border-[var(--prompt-fast-edit-border)] hover:border-[var(--tpm-primary)] bg-white rounded-xl shadow-lg overflow-hidden'
    )}>
      <div className="flex items-center justify-between bg-gradient-to-r from-[var(--navbar-bg-start)] to-[var(--navbar-bg-end)] p-3 rounded-t-lg">
        <h3 className="text-lg text-white font-bold flex items-center">
          <FaEdit className="mr-2" />
          {label}
        </h3>
        <div className="flex items-center gap-2">
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
        <CodeMirror
          value={value}
          onChange={onChange}
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
          theme={currentEditorTheme}
        />
      </div>
    </div>
  );
}