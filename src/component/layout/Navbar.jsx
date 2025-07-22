import { FaBookOpen, FaGithub, FaLink } from 'react-icons/fa';
import styles from './Navbar.module.scss';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            <h1 className={cn(styles.logoText, 'p-2 rounded-lg font-bold hover:bg-white/[0.1]')}>
              数学教案库
            </h1>
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={cn(
                styles.linkBtn,
                'flex items-center space-x-2 font-bold p-2 rounded-lg transition-colors duration-200 hover:bg-white/[0.1]'
              )}
            >
              <span>提示词公开</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-4 bg-transparent">
                <div className={cn(
                  styles.navDropdown,
                  'rounded-lg shadow-lg overflow-hidden min-w-45 border border-white/20'
                )}>
                  <Link
                    to="/prompt-display-schema"
                    className={cn(
                      styles.navDropdownItem,
                      'block px-4 py-3 hover:bg-white/[0.1] transition-colors duration-200 text-base font-bold'
                    )}
                  >
                    生成schema（新）
                  </Link>
                  <Link
                    to="/prompt-display-jsx"
                    className={cn(
                      styles.navDropdownItem,
                      'block px-4 py-3 hover:bg-white/[0.1] transition-colors duration-200 text-base font-bold border-t border-white'
                    )}
                  >
                    生成jsx（旧）
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-8">
          <Link
            to="https://www.52pojie.cn/home.php?mod=space&uid=1906177"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              styles.linkBtn,
              'p-2 rounded-lg flex items-center space-x-2 font-bold hover:bg-white/[0.1]'
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
              'p-2 rounded-lg flex items-center space-x-2 font-bold hover:bg-white/[0.1]'
            )}>
            <FaGithub />
            <span>项目源码</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
