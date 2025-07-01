import Card from './Card';
import styles from './LearningPartnerCard.module.scss';
import { cn } from '@/lib/utils';

export default function LearningPartnerCard({ children, imgNode }) {
  return (
    <Card className="flex items-center gap-5">
      <div className={styles.conanContainer}>
        {/* conanContainer 移到 Card 内之后，发现没有这第二层 div 就没法设置 img 尺寸 */}
        <div
          className={cn(
            styles.floating,
            'w-45'
          )}
        >
          {imgNode(styles)}
        </div>
      </div>
      <div>
        {children}
      </div>
    </Card>
  );
}
