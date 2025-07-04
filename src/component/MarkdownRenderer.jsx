import { processMarkdown } from '@/lib/marked';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import 'highlight.js/styles/paraiso-light.css';

export default function MarkdownRenderer({ className, content, ...rest }) {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const parseResult = processMarkdown(content);
    parseResult
      .then(result => {
        setHtmlContent(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error processing markdown:', error);
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
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className={cn('max-w-none', className)}
        {...rest}
      />
    );
  }
  return content;
}
