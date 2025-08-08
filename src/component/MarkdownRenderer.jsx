import { processMarkdown } from '@/lib/marked';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import useCodeBlockSetup from '../hooks/useCodeBlockSetup';
import './MarkdownRenderer.scss';

export default function MarkdownRenderer({ className, content, ...rest }) {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const tpmMdContainerRef = useCodeBlockSetup();

  useEffect(() => {
    setIsLoading(true);
    const parseResult = processMarkdown(content);
    parseResult
      .then(result => {
        setHtmlContent(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('[tpm] Error processing markdown:', error);
        setHtmlContent(content);
        setIsLoading(false);
      });
  }, [content]);

  if (isLoading) {
    return <div className={className} {...rest}>加载中...</div>;
  }
  if (typeof content === 'string') {
    return (
      <div
        ref={tpmMdContainerRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className={cn(
          'tpm-markdown-container max-w-none prose dark:prose-invert',
          className
        )}
        {...rest}
      />
    );
  }
  return content;
}
