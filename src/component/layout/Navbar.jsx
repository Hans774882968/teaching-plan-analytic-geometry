import { motion } from 'motion/react';
import {
  FaBars,
  FaBlog,
  FaBook,
  FaCode,
  FaDatabase,
  FaDraftingCompass,
  FaGem,
  FaGithub,
  FaInfoCircle,
  FaKey,
  FaLockOpen,
  FaReact,
  FaTachometerAlt,
  FaTimes,
  FaUser,
} from 'react-icons/fa';
import styles from './Navbar.module.scss';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import SettingsDialog from './SettingsDialog';
import { useState } from 'react';
import { FaBookOpenReader, FaRegPenToSquare } from 'react-icons/fa6';

const promptDisplayDropdown = {
  key: 'promptDisplay',
  children: (
    <>
      <FaKey />
      <span>提示词</span>
    </>
  ),
  urls: [
    {
      label: (
        <>
          <FaRegPenToSquare />
          快速编辑
        </>
      ),
      url: '/prompt-fast-edit',
    },
    {
      label: (
        <>
          <FaDatabase />
          生成schema
          <span className={cn(
            'px-1.5 py-0.5 rounded-md text-xs font-semibold transition-colors duration-300',
            'bg-red-400 text-white'
          )}>
            NEW
          </span>
        </>
      ),
      url: '/prompt-display-schema',
    },
    {
      label: (
        <>
          <FaReact />
          生成jsx
        </>
      ),
      url: '/prompt-display-jsx',
    },
  ],
};

const blogDropdown = {
  key: 'blog',
  children: (
    <>
      <FaBook />
      <span>博客</span>
    </>
  ),
  urls: [
    {
      label: (
        <>
          <FaBookOpenReader />
          博客列表
        </>
      ),
      url: '/blogs',
    },
  ],
};

const dashboardDropdown = {
  key: 'dashboard',
  children: (
    <>
      <FaTachometerAlt />
      <span>仪表盘</span>
    </>
  ),
  urls: [
    {
      label: (
        <>
          <FaTachometerAlt />
          仪表盘
        </>
      ),
      url: '/dashboard',
    },
  ],
};

const aboutUsDropdown = {
  key: 'aboutUs',
  children: (
    <>
      <FaUser />
      <span>关于作者</span>
    </>
  ),
  urls: [
    {
      label: (
        <>
          <FaGithub />
          GitHub
        </>
      ),
      url: 'https://github.com/Hans774882968',
      openInNewTab: true,
    },
    {
      label: (
        <>
          <FaLockOpen />
          52破解
        </>
      ),
      url: 'https://www.52pojie.cn/home.php?mod=space&uid=1906177',
      openInNewTab: true,
    },
    {
      label: (
        <>
          <FaGem />
          掘金
        </>
      ),
      url: 'https://juejin.cn/user/1464964842528888',
      openInNewTab: true,
    },
    {
      label: (
        <>
          <FaBlog />
          CSDN
        </>
      ),
      url: 'https://blog.csdn.net/hans774882968',
      openInNewTab: true,
    },
  ],
};

const aboutThisProjectDropdown = {
  key: 'aboutThisProject',
  children: (
    <>
      <FaInfoCircle />
      <span>关于此项目</span>
    </>
  ),
  urls: [
    {
      label: (
        <>
          <FaBook />
          开发笔记
        </>
      ),
      url: '/tpm-dev-doc',
    },
    {
      label: (
        <>
          <FaCode />
          项目源码
        </>
      ),
      url: 'https://github.com/Hans774882968/teaching-plan-analytic-geometry',
      openInNewTab: true,
    },
  ],
};

const navigationItems = [
  promptDisplayDropdown,
  blogDropdown,
  dashboardDropdown,
  aboutThisProjectDropdown,
  aboutUsDropdown,
].map((dropdown) => {
  return {
    label: dropdown.children,
    items: dropdown.urls,
    ...dropdown,
  };
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn(
      styles.navbar,
      // 让 z-index 比 shadcn-ui dialog 小
      // md 以下都展示 hamburger ，所以文字反而可以大一点
      'sticky top-0 z-49 text-white text-2xl md:text-base lg:text-2xl py-4 px-6 shadow-[0_4px_12px_0px_rgba(0,0,0,0.3)]'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 lg:space-x-3">
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3" rel="noopener noreferrer">
            <div className={cn(styles.logoIcon, 'bg-white/[0.2] p-2 rounded-lg')}>
              <FaDraftingCompass />
            </div>
            <h1 className={cn(styles.logoText, 'p-2 rounded-lg font-bold hover:bg-white/[0.2]')}>
              数学教案库
            </h1>
          </Link>

          <div className="hidden md:flex items-center lg:space-x-3">
            {/* 默认字体比站酷快乐体大，默认宽度 200px 不够 */}
            <NavDropdown items={promptDisplayDropdown.urls} navDropdownClasses="min-w-54">
              {promptDisplayDropdown.children}
            </NavDropdown>
            <NavDropdown items={blogDropdown.urls} navDropdownClasses="min-w-36">
              {blogDropdown.children}
            </NavDropdown>
            <NavDropdown items={dashboardDropdown.urls} navDropdownClasses="min-w-36">
              {dashboardDropdown.children}
            </NavDropdown>
          </div>

          <button
            className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-white/[0.2] transition-colors"
            onClick={toggleMenu}
            aria-label="菜单"
            title="菜单"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <SettingsDialog />
        </div>

        <div className="hidden md:flex items-center lg:space-x-3">
          <NavDropdown items={aboutThisProjectDropdown.urls} navDropdownClasses="min-w-36">
            {aboutThisProjectDropdown.children}
          </NavDropdown>
          <NavDropdown items={aboutUsDropdown.urls} navDropdownClasses="min-w-36">
            {aboutUsDropdown.children}
          </NavDropdown>
        </div>

        {isMenuOpen && (
          <motion.div
            className="flex md:hidden absolute top-full flex-col bg-[#67cbeb] shadow-lg py-4 gap-4 rounded-lg overflow-hidden min-w-50 border-2 border-white/20"
            initial={{ left: '-100%' }}
            animate={{ left: isMenuOpen ? 0 : '-100%' }}
            transition={{ duration: 0.2 }}
          >
            {navigationItems.map((item) => {
              const openInNewTabProps = item.openInNewTab && {
                target: '_blank',
                rel: 'noopener noreferrer',
              };

              return (
                <div key={item.key}>
                  <div className="flex flex-col gap-2">
                    {item.url ? (
                      <Link
                        to={item.url}
                        className="px-3 flex justify-between items-center hover:bg-white/[0.2]"
                        {...openInNewTabProps}
                      >
                        <span className="text-lg">{item.label}</span>
                      </Link>
                    ) : (
                      <motion.p
                        className="px-3 text-xl font-bold flex items-center gap-2"
                        animate={{
                          scale: [0.99, 1.02, 0.99],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        {item.label}
                      </motion.p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => {
                        const subOpenInNewTabProps = subItem.openInNewTab && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        };

                        return (
                          <Link
                            key={subItem.url}
                            to={subItem.url}
                            className="px-3 text-sm flex justify-between items-center hover:bg-white/[0.2]"
                            {...subOpenInNewTabProps}
                          >
                            <p className="py-1 w-full flex items-center gap-2 transition-transform duration-200 ease-in-out hover:translate-x-1">
                              {subItem.label}
                            </p>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
