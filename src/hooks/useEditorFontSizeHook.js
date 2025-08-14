import { useSettingsStore } from '@/component/layout/states/settingsState';
import { ctrlPressed } from '@/lib/getPlatform';
import { useEffect, useRef } from 'react';

export default function useEditorFontSizeHook() {
  const { editorFontSize, setEditorFontSize } = useSettingsStore();
  const editorRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (ctrlPressed(e) && e.key === '+') {
        e.preventDefault();
        setEditorFontSize(Math.min(editorFontSize + 1, 24));
      } else if (ctrlPressed(e) && e.key === '-') {
        e.preventDefault();
        setEditorFontSize(Math.max(editorFontSize - 1, 12));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editorFontSize, setEditorFontSize]);

  useEffect(() => {
    const editor = editorRef.current?.editor;
    const handleEditorWheel = (e) => {
      if (!ctrlPressed(e)) {
        return;
      }
      e.preventDefault();
      // 类似于 VSCode 往上滚放大，往下滚缩小
      const delta = e.deltaY > 0 ? -1 : 1;
      const newEditorFontSize = Math.min(Math.max(editorFontSize + delta, 12), 24);
      setEditorFontSize(newEditorFontSize);
    };

    editor?.addEventListener('wheel', handleEditorWheel, { passive: false });
    return () => editor?.removeEventListener('wheel', handleEditorWheel);
  }, [editorFontSize, setEditorFontSize]);

  return {
    editorFontSize,
    editorRef,
    setEditorFontSize,
  };
}
