import { useEffect, useRef } from 'react';
import ChevronDown from '@/assets/fa-chevron-down.svg';
import DownloadSvg from '@/assets/fa-download.svg';
import { CODE_BODY_INITIAL_MAX_HEIGHT } from '@/common/consts';
import { toast } from 'sonner';
import hljsLangToExtName from '@/lib/hljsLangToExtName';
import { localDownloadFile } from '@/lib/utils';
import { useSettingsStore } from '@/component/layout/states/settingsState';

function changeCodeExpandStatus(img, svgChevronDownWrapper, targetCodeBlockWrapper) {
  const hasExpanded = img.classList.contains('expanded');
  img.classList.toggle('expanded');

  svgChevronDownWrapper.title = hasExpanded ? '展开代码块' : '收起代码块';
  const codeBody = targetCodeBlockWrapper.querySelector('.code-body');
  if (!codeBody) {
    console.error('[tpm] failed to find .code-body');
    return;
  }
  // 每行其实不到 28px ，但设置这个稍大的数并不太影响动画效果
  const maxHeight = hasExpanded ? CODE_BODY_INITIAL_MAX_HEIGHT : (28 + targetCodeBlockWrapper.dataset.lineCount * 28);
  codeBody.classList.toggle('expanded');
  codeBody.style.maxHeight = `${maxHeight}px`;

  const codeNode = codeBody.querySelector('.highlighted-code');
  if (!codeNode) {
    console.error('[tpm] failed to find .highlighted-code');
    return;
  }
  codeNode.style.maxHeight = `${maxHeight}px`;
}

function downloadCode(codeBlockWrapper) {
  const copyBtn = codeBlockWrapper.querySelector('.copy-button');
  if (!copyBtn) {
    console.error('[tpm] failed to find .copy-button');
    return;
  }
  const language = codeBlockWrapper.dataset.language;
  const extName = hljsLangToExtName(language);
  const code = decodeURI(copyBtn.dataset.code);
  localDownloadFile({
    data: code,
    fileName: `tpm-${document.title}.${extName}`,
    onSuccess: () => toast.success('下载成功！'),
  });
}

export default function useCodeBlockSetup() {
  const tpmMdContainerRef = useRef(null);
  const { expandCode } = useSettingsStore();

  useEffect(() => {
    const codeBlockWrapperSetup = () => {
      tpmMdContainerRef.current?.querySelectorAll('.code-block-wrapper .svg-chevron-down-wrapper')?.forEach((svgChevronDownWrapper) => {
        if (svgChevronDownWrapper.children.length) {
          return;
        }

        // 依赖 src\lib\hljsRenderer.js 所定义的结构
        const targetCodeBlockWrapper = svgChevronDownWrapper.parentElement.parentElement.parentElement;

        const img = document.createElement('img');
        img.classList.add('svg-chevron-down-wrapper-img', 'not-prose');
        img.src = ChevronDown;
        if (expandCode) {
          changeCodeExpandStatus(img, svgChevronDownWrapper, targetCodeBlockWrapper);
        }
        img.addEventListener('click', () => {
          changeCodeExpandStatus(img, svgChevronDownWrapper, targetCodeBlockWrapper);
        });
        svgChevronDownWrapper.appendChild(img);
      });

      tpmMdContainerRef.current?.querySelectorAll('.code-block-wrapper')?.forEach((codeBlockWrapper) => {
        const downloadWrapper = codeBlockWrapper.querySelector('.svg-download-wrapper');
        if (downloadWrapper.children.length) {
          return;
        }

        const img = document.createElement('img');
        img.classList.add('svg-download-wrapper-img', 'not-prose');
        img.src = DownloadSvg;
        img.addEventListener('click', () => {
          downloadCode(codeBlockWrapper);
        });
        downloadWrapper.appendChild(img);
      });

      tpmMdContainerRef.current?.querySelectorAll('.code-block-wrapper .copy-button')?.forEach((button) => {
        button.addEventListener('click', () => {
          const code = decodeURI(button.dataset.code);
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
  }, [expandCode]);

  return tpmMdContainerRef;
}
