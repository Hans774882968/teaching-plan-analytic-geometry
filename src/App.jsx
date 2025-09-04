import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'katex/dist/katex.min.css';
import { Toaster } from 'sonner';
import TeachingPlanList from './teachingPlanList/TeachingPlanList';
import NotFound from './NotFound';
import Layout from './component/layout/Layout';
import PromptDisplaySchema from './promptDisplay/promptDisplaySchema';
import PromptDisplayJsx from './promptDisplay/promptDisplayJsx';
import PromptFastEdit from './promptFastEdit/PromptFastEdit';
import ReadmeDisplay from './readmeDisplay/ReadmeDisplay';
import { getWebsiteBasePath } from './lib/getWebsiteBasePath';
import BlogDetail from './mathBlog/BlogDetail';
import BlogList from './mathBlog/BlogList';
import NavigateForGitHubPages from './NavigateForGitHubPages';
import { ThemeProvider } from '@/component/theme-provider';
import Dashboard from './dashboard/Dashboard';
import MathChallenges from './mathChallenges/MathChallenges';
import Challenge from './mathChallenges/challenge/Challenge';
import DailyQuestion from './mathChallenges/dailyQuestion/DailyQuestion';
import { hardQuestionsRoutes } from '@/common/hardQuestionsRoutes';
import { lessonRoutes } from '@/common/lessonRoutes';

const routes = [
  { path: '/', element: <TeachingPlanList /> },
  ...lessonRoutes,
  { path: '/prompt-display-schema', element: <PromptDisplaySchema /> },
  { path: '/prompt-display-jsx', element: <PromptDisplayJsx /> },
  { path: '/prompt-fast-edit', element: <PromptFastEdit /> },
  { path: '/tpm-dev-doc', element: <ReadmeDisplay /> },
  { path: '/blogs', element: <BlogList /> },
  { path: '/blog/:title', element: <BlogDetail /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/math-challenges', element: <MathChallenges /> },
  { path: '/math-challenge/:title', element: <Challenge /> },
  { path: '/daily-question', element: <DailyQuestion /> },
  ...hardQuestionsRoutes,
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <NotFound /> },
];

const basePath = getWebsiteBasePath();

function App() {
  return (
    <HelmetProvider>
      <Router basename={basePath}>
        <Toaster
          position='top-center'
          toastOptions={{
            style: {
              color: 'white',
              background: 'var(--vivid-blue-bg)',
              borderColor: 'var(--vivid-blue-bg-start)',
            },
            classNames: {
              title: '!font-(family-name:--tpm-font-family) !font-bold !text-base',
            },
          }}
        />
        <NavigateForGitHubPages>
          <ThemeProvider defaultTheme="light">
            <Layout>
              <Routes>
                {
                  routes.map((route, index) => (
                    <Route
                      key={route.path || `route-${index}`}
                      path={route.path}
                      element={route.element}
                    />
                  ))
                }
              </Routes>
            </Layout>
          </ThemeProvider>
        </NavigateForGitHubPages>
      </Router>
    </HelmetProvider>
  );
}

export default App;
