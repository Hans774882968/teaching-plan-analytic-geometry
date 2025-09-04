import RotationDefinition from '@/rotation/RotationDefinition';
import RealNumExpPowers from '@/exponentialFunction/RealNumExpPowers';
import ExpFunction from '@/exponentialFunction/ExpFunction';
import LogOperation from '@/logarithmicFunction/LogOperation';
import LogCalculation from '@/logarithmicFunction/LogCalculation';
import LogFunction from '@/logarithmicFunction/LogFunction';
import InverseFunction from '@/logarithmicFunction/InverseFunction';
import FunctionRepresentation from '@/functionDefinition/FunctionRepresentation';
import FunctionMonotonicity from '@/functionDefinition/FunctionMonotonicity';
import FunctionEvenOdd from '@/functionDefinition/FunctionEvenOdd';
import PlaneVectorDefinition from '@/planeVectorDefinition/PlaneVectorDefinition';
import ObliqueDrawing from '@/solidGeometryIntro/ObliqueDrawing';
import SpVecFundamentalTheorem from '@/spatialVector/SpVecFundamentalTheorem';
import EllipseDefinition from '@/ellipseDefinition/EllipseDefinition';
import HyperbolaDefinition from '@/hyperbolaDefinition/HyperbolaDefinition';
import ParabolaDefinition from '@/parabolaDefinition/ParabolaDefinition';

export const lessonRoutes = [
  { path: '/rotation/definition', element: <RotationDefinition /> },
  { path: '/exponential/real-num-exp-powers', element: <RealNumExpPowers /> },
  { path: '/exponential/exp-function', element: <ExpFunction /> },
  { path: '/logarithmic/log-operation', element: <LogOperation /> },
  { path: '/logarithmic/log-calculation', element: <LogCalculation /> },
  { path: '/logarithmic/log-function', element: <LogFunction /> },
  { path: '/logarithmic/inv-function', element: <InverseFunction /> },
  { path: '/function-definition/representation', element: <FunctionRepresentation /> },
  { path: '/function-definition/monotonicity', element: <FunctionMonotonicity /> },
  { path: '/function-definition/even-odd', element: <FunctionEvenOdd /> },
  { path: '/plane-vector-definition', element: <PlaneVectorDefinition /> },
  { path: '/solid-geometry-intro/oblique-drawing', element: <ObliqueDrawing /> },
  { path: '/spatial-vector/fundamental-theorem', element: <SpVecFundamentalTheorem /> },
  { path: '/ellipse-definition', element: <EllipseDefinition /> },
  { path: '/hyperbola-definition', element: <HyperbolaDefinition /> },
  { path: '/parabola-definition', element: <ParabolaDefinition /> },
];

export const lessonUrls = lessonRoutes.map(({ path }) => path);
