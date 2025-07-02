import styles from './Footer.module.scss';
import { cn } from '@/lib/utils';

export default function Footer({ children, className }) {
  return (
    <footer className={cn(
      styles.teachingPlanFooter,
      className
    )}>
      {children}
    </footer>
  );
}
