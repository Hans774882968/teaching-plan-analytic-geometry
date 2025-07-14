import { FaBookOpen, FaGithub, FaLink } from 'react-icons/fa';
import styles from './Navbar.module.scss';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={cn(
      styles.navbar,
      'sticky top-0 z-114514 text-white text-lg md:text-2xl py-4 px-6 shadow-[0_4px_12px_0px_rgba(0,0,0,0.3)]'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/" className="flex items-center space-x-2 md:space-x-4" rel="noopener noreferrer">
            <div className="bg-white/[0.2] p-2 rounded-lg">
              <FaBookOpen />
            </div>
            <h1 className={cn(styles.logoText, 'font-bold')}>
              数学教案库
            </h1>
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-8">
          <Link
            to="https://www.52pojie.cn/home.php?mod=space&uid=1906177"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              styles.linkBtn,
              'flex items-center space-x-2 font-bold'
            )}>
            <FaLink />
            <span>52破解</span>
          </Link>
          <Link
            to="https://github.com/Hans774882968/teaching-plan-analytic-geometry"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              styles.linkBtn,
              'flex items-center space-x-2 font-bold'
            )}>
            <FaGithub />
            <span>项目源码</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
