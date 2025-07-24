import { useState } from 'react';
import styles from './NavDropdown.module.scss';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function NavDropdown({
  children,
  items,
  navDropdownClasses,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button
        className={cn(
          styles.linkBtn,
          'flex items-center space-x-2 font-bold p-2 rounded-lg transition-colors duration-200 hover:bg-white/[0.2]'
        )}
      >
        {children}
      </button>

      {
        isDropdownOpen && (
          <div className="absolute top-full left-0 pt-4 bg-transparent">
            <div className={cn(
              styles.navDropdown,
              'rounded-lg shadow-lg overflow-hidden min-w-50 border-2 border-white/20',
              navDropdownClasses
            )}>
              {
                items.map((item, index) => {
                  const openInNewTabProps = item.openInNewTab && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  };

                  return (
                    <div
                      key={item.url}
                      className={cn(
                        'text-base font-bold hover:bg-white/[0.2] transition-colors duration-200',
                        index > 0 && 'border-t-2 border-white'
                      )}
                    >
                      <Link
                        to={item.url}
                        className={styles.navDropdownItem}
                        {...openInNewTabProps}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })
              }
            </div>
          </div>
        )
      }
    </div>
  );
}
