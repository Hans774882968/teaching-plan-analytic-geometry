import { useState } from 'react';
import { motion } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Think.module.scss';
import { cn } from '@/lib/utils';
import MarkdownRenderer from '@/component/MarkdownRenderer';

const Think = ({ think, answer, answerRowMaxHeight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className={styles.thinkBox}
    >
      <div className={cn(
        styles.questionRow,
        isOpen && 'border-b-1 border-dashed border-[#cbd5e0]'
      )}>
        <span className="px-2 py-1 rounded-md text-xs font-semibold bg-[#FFD166]">思考</span>
        <div className={styles.questionText}>
          <MarkdownRenderer content={think} />
        </div>
        <motion.button
          className="flex items-center gap-1 cursor-pointer text-blue-600 hover:text-blue-800 font-bold"
          onClick={toggleOpen}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{isOpen ? '收起答案' : '看答案'}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {<FaChevronDown />}
          </motion.span>
        </motion.button>
      </div>

      <motion.div
        className={styles.answerRow}
        initial={{ maxHeight: 0, marginTop: '0' }}
        animate={{
          maxHeight: isOpen ? answerRowMaxHeight || '100px' : 0,
          marginTop: isOpen ? '8px' : '0',
        }}
        transition={{ duration: 0.3 }}
      >
        <MarkdownRenderer content={answer} />
      </motion.div>
    </motion.div>
  );
};

export default Think;
