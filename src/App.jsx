import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'katex/dist/katex.min.css';
import EllipseDefinition from './ellipseDefinition/EllipseDefinition';
import TeachingPlanList from './TeachingPlanList';
import EllipseHardQuestions from './ellipseDefinition/EllipseHardQuestions';
import NotFound from './NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TeachingPlanList />} />
          <Route path="/ellipse-definition" element={<EllipseDefinition />} />
          <Route path="/ellipse-hard-questions" element={<EllipseHardQuestions />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
