import { motion } from 'motion/react';
import styles from './KnowledgePoint.module.scss';
import { HOVER_SCALE } from '@/common/consts';

export default function KnowledgePoint({ children, ...rest }) {
  return (
    <motion.div
      className={styles.knowledgePoint}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      whileHover={{
        scale: HOVER_SCALE,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
