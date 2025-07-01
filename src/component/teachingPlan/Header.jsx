import { motion } from 'motion/react';
import styles from './Header.module.scss';
import { HOVER_SCALE } from '@/common/consts';

export default function Header({ children, ...rest }) {
  return (
    <motion.header
      className={styles.teachingPlanHeader}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      whileHover={{
        scale: HOVER_SCALE,
      }}
      {...rest}
    >
      {children}
    </motion.header>
  );
}
