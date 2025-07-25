import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'katex/dist/katex.min.css';
import { Toaster } from 'sonner';
import TeachingPlanList from './TeachingPlanList';
import NotFound from './NotFound';
import RotationDefinition from './rotation/RotationDefinition';
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
import ReadmeDisplay from './readmeDisplay/ReadmeDisplay';

const routes = [
  { path: '/', element: <TeachingPlanList /> },
  { path: '/rotation/definition', element: <RotationDefinition /> },
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
  { path: '/tpm-dev-doc', element: <ReadmeDisplay /> },
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <NotFound /> },
];

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Toaster
          position='top-center'
          toastOptions={{
            style: {
              color: 'white',
              backgroundColor: 'var(--vivid-blue-bg)',
              borderColor: '#4cc9f0',
            },
            classNames: {
              title: '!font-(family-name:--tpm-font-family) !font-bold !text-base',
            },
          }}
        />
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
      </Router>
    </HelmetProvider>
  );
}

export default App;
