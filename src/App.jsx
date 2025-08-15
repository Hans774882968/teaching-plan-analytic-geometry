import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'katex/dist/katex.min.css';
import { Toaster } from 'sonner';
import TeachingPlanList from './teachingPlanList/TeachingPlanList';
import NotFound from './NotFound';
import RotationDefinition from './rotation/RotationDefinition';
import RealNumExpPowers from './exponentialFunction/RealNumExpPowers';
import ExpFunction from './exponentialFunction/ExpFunction';
import LogOperation from './logarithmicFunction/LogOperation';
import FunctionRepresentation from './functionDefinition/FunctionRepresentation';
import FunctionMonotonicity from './functionDefinition/FunctionMonotonicity';
import FunctionEvenOdd from './functionDefinition/FunctionEvenOdd';
import PlaneVectorDefinition from './planeVectorDefinition/PlaneVectorDefinition';
import ObliqueDrawing from './solidGeometryIntro/ObliqueDrawing';
import SpVecFundamentalTheorem from './spatialVector/SpVecFundamentalTheorem';
import EllipseDefinition from './ellipseDefinition/EllipseDefinition';
import EllipseHardQuestions from './ellipseDefinition/EllipseHardQuestions';
import HyperbolaDefinition from './hyperbolaDefinition/HyperbolaDefinition';
import HyperbolaHardQuestions from './hyperbolaDefinition/HyperbolaHardQuestions';
import ParabolaDefinition from './parabolaDefinition/ParabolaDefinition';
import ParabolaHardQuestions from './parabolaDefinition/ParabolaHardQuestions';
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

const routes = [
  { path: '/', element: <TeachingPlanList /> },
  { path: '/rotation/definition', element: <RotationDefinition /> },
  { path: '/exponential/real-num-exp-powers', element: <RealNumExpPowers /> },
  { path: '/exponential/exp-function', element: <ExpFunction /> },
  { path: '/logarithmic/log-operation', element: <LogOperation /> },
  { path: '/function-definition/representation', element: <FunctionRepresentation /> },
  { path: '/function-definition/monotonicity', element: <FunctionMonotonicity /> },
  { path: '/function-definition/even-odd', element: <FunctionEvenOdd /> },
  { path: '/plane-vector-definition', element: <PlaneVectorDefinition /> },
  { path: '/solid-geometry-intro/oblique-drawing', element: <ObliqueDrawing /> },
  { path: '/spatial-vector/fundamental-theorem', element: <SpVecFundamentalTheorem /> },
  { path: '/ellipse-definition', element: <EllipseDefinition /> },
  { path: '/hyperbola-definition', element: <HyperbolaDefinition /> },
  { path: '/parabola-definition', element: <ParabolaDefinition /> },
  { path: '/ellipse-hard-questions', element: <EllipseHardQuestions /> },
  { path: '/hyperbola-hard-questions', element: <HyperbolaHardQuestions /> },
  { path: '/parabola-hard-questions', element: <ParabolaHardQuestions /> },
  { path: '/prompt-display-schema', element: <PromptDisplaySchema /> },
  { path: '/prompt-display-jsx', element: <PromptDisplayJsx /> },
  { path: '/prompt-fast-edit', element: <PromptFastEdit /> },
  { path: '/tpm-dev-doc', element: <ReadmeDisplay /> },
  { path: '/blogs', element: <BlogList /> },
  { path: '/blog/:title', element: <BlogDetail /> },
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
