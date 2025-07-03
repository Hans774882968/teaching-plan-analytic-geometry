import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'katex/dist/katex.min.css';
import EllipseDefinition from './ellipseDefinition/EllipseDefinition';
import TeachingPlanList from './TeachingPlanList';
import EllipseHardQuestions from './ellipseDefinition/EllipseHardQuestions';
import NotFound from './NotFound';
import HyperbolaDefinition from './hyperbolaDefinition/HyperbolaDefinition';
import HyperbolaHardQuestions from './hyperbolaDefinition/HyperbolaHardQuestions';
import ParabolaDefinition from './parabolaDefinition/ParabolaDefinition';
import Layout from './component/layout/Layout';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TeachingPlanList />} />
            <Route path="/ellipse-definition" element={<EllipseDefinition />} />
            <Route path="/hyperbola-definition" element={<HyperbolaDefinition />} />
            <Route path="/parabola-definition" element={<ParabolaDefinition />} />
            <Route path="/ellipse-hard-questions" element={<EllipseHardQuestions />} />
            <Route path="/hyperbola-hard-questions" element={<HyperbolaHardQuestions />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
