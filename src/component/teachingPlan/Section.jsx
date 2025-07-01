import { motion } from 'motion/react';
import styles from './Section.module.scss';
import { HOVER_SCALE } from '@/common/consts';

export default function Section({ children, ...rest }) {
  return (
    <motion.section
      className={styles.teachingPlanSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      whileHover={{
        scale: HOVER_SCALE,
      }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
