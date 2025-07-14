import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import styles from './NoData.module.scss';
import noData from '@/assets/no-data.svg';

export default function NoData({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn('flex justify-center items-center flex-col gap-4', styles.bounceInAnimation)}>
      <img src={noData} />
      <div className="text-black/[0.45]">{text || '暂无数据'}</div>
    </motion.div>
  );
}
