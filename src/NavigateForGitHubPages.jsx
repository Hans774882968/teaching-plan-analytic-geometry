import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavigateForGitHubPages({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 处理从 GitHub Pages 的 404 页面重定向过来的请求
    const urlParams = new URLSearchParams(location.search);
    const redirectPath = urlParams.get('redirect');

    if (redirectPath) {
      // 移除重定向参数
      const cleanPath = window.location.pathname + window.location.search.replace(/\?redirect=.*/, '');
      window.history.replaceState(null, '', cleanPath);

      // 导航到目标路径
      navigate(redirectPath);
    }
  }, [location, navigate]);

  return children;
}
