import { useEffect, useRef } from 'react';
import ChevronDown from '@/assets/fa-chevron-down.svg';
import { CODE_BODY_INITIAL_MAX_HEIGHT } from '@/common/consts';

export default function useCodeBlockSetup() {
  const tpmMdContainerRef = useRef(null);

  useEffect(() => {
    const codeBlockWrapperSetup = () => {
      document.querySelectorAll('.code-block-wrapper .svg-wrapper')?.forEach((svgWrapper) => {
        if (svgWrapper.children.length) {
          return;
        }
        const img = document.createElement('img');
        img.classList.add('svg-wrapper-img');
        img.src = ChevronDown;
        img.addEventListener('click', () => {
          const hasExpanded = img.classList.contains('expanded');
          img.classList.toggle('expanded');

          // 依赖 src\lib\hljsRenderer.js 所定义的结构
          const targetCodeBlockWrapper = svgWrapper.parentElement.parentElement.parentElement;
          svgWrapper.title = hasExpanded ? '展开代码块' : '收起代码块';
          const codeBody = targetCodeBlockWrapper.querySelector('.code-body');
          if (!codeBody) return;
          // 每行其实不到 28px ，但设置这个稍大的数并不太影响动画效果
          const maxHeight = hasExpanded ? CODE_BODY_INITIAL_MAX_HEIGHT : (28 + targetCodeBlockWrapper.dataset.lineCount * 28);
          codeBody.classList.toggle('expanded');
          codeBody.style.maxHeight = `${maxHeight}px`;

          const codeNode = codeBody.querySelector('.code-body .highlighted-code');
          if (!codeNode) return;
          codeNode.style.maxHeight = `${maxHeight}px`;
        });
        svgWrapper.appendChild(img);
      });

      tpmMdContainerRef.current?.querySelectorAll('.code-block-wrapper .copy-button')?.forEach((button) => {
        button.addEventListener('click', () => {
          const code = decodeURIComponent(button.dataset.code);
          navigator.clipboard.writeText(code);
          button.classList.add('copied');
          setTimeout(() => button.classList.remove('copied'), 2000);
        });
      });
    };

    codeBlockWrapperSetup();

    const setupObserver = new MutationObserver(codeBlockWrapperSetup);
    tpmMdContainerRef.current && setupObserver.observe(tpmMdContainerRef.current, {
      subtree: true,
      childList: true,
    });

    return () => {
      setupObserver.disconnect();
    };
  }, []);

  return tpmMdContainerRef;
}
