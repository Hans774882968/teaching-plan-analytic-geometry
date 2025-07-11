import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'katex/dist/katex.min.css';
import TeachingPlanList from './TeachingPlanList';
import NotFound from './NotFound';
import FunctionRepresentation from './functionDefinition/FunctionRepresentation';
import FunctionMonotonicity from './functionDefinition/FunctionMonotonicity';
import PlaneVectorDefinition from './planeVectorDefinition/PlaneVectorDefinition';
import EllipseDefinition from './ellipseDefinition/EllipseDefinition';
import EllipseHardQuestions from './ellipseDefinition/EllipseHardQuestions';
import HyperbolaDefinition from './hyperbolaDefinition/HyperbolaDefinition';
import HyperbolaHardQuestions from './hyperbolaDefinition/HyperbolaHardQuestions';
import ParabolaDefinition from './parabolaDefinition/ParabolaDefinition';
import ParabolaHardQuestions from './parabolaDefinition/ParabolaHardQuestions';
import Layout from './component/layout/Layout';

const routes = [
  { path: '/', element: <TeachingPlanList /> },
  { path: '/function-definition/representation', element: <FunctionRepresentation /> },
  { path: '/function-definition/monotonicity', element: <FunctionMonotonicity /> },
  { path: '/plane-vector-definition', element: <PlaneVectorDefinition /> },
  { path: '/ellipse-definition', element: <EllipseDefinition /> },
  { path: '/hyperbola-definition', element: <HyperbolaDefinition /> },
  { path: '/parabola-definition', element: <ParabolaDefinition /> },
  { path: '/ellipse-hard-questions', element: <EllipseHardQuestions /> },
  { path: '/hyperbola-hard-questions', element: <HyperbolaHardQuestions /> },
  { path: '/parabola-hard-questions', element: <ParabolaHardQuestions /> },
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <NotFound /> },
];

function App() {
  return (
    <HelmetProvider>
      <Router>
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
