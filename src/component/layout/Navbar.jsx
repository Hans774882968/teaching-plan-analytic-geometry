import {
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
  FaUser,
} from 'react-icons/fa';
import styles from './Navbar.module.scss';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const promptDisplayUrls = [
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
];

const blogUrls = [
  {
    label: (
      <>
        <FaBook />
        博客列表
      </>
    ),
    url: '/blogs',
  },
];

const aboutUsUrls = [
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
];

const aboutThisProjectUrls = [
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
];

export default function Navbar() {
  return (
    <nav className={cn(
      styles.navbar,
      'sticky top-0 z-114514 text-white text-lg md:text-2xl py-4 px-6 shadow-[0_4px_12px_0px_rgba(0,0,0,0.3)]'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/" className="flex items-center space-x-2 md:space-x-4" rel="noopener noreferrer">
            <div className={cn(styles.logoIcon, 'bg-white/[0.2] p-2 rounded-lg')}>
              <FaDraftingCompass />
            </div>
            <h1 className={cn(styles.logoText, 'p-2 rounded-lg font-bold hover:bg-white/[0.2]')}>
              数学教案库
            </h1>
          </Link>

          <NavDropdown items={promptDisplayUrls}>
            <FaKey />
            <span>提示词公开</span>
          </NavDropdown>

          <NavDropdown items={blogUrls}>
            <FaBook />
            <span>博客</span>
          </NavDropdown>
        </div>

        <div className="flex items-center space-x-4 md:space-x-8">
          <NavDropdown items={aboutThisProjectUrls} navDropdownClasses="min-w-36">
            <FaInfoCircle />
            <span>关于此项目</span>
          </NavDropdown>
          <NavDropdown items={aboutUsUrls} navDropdownClasses="min-w-36">
            <FaUser />
            <span>我的个人主页</span>
          </NavDropdown>
        </div>
      </div>
    </nav>
  );
}
