import Geogebra from './Geogebra';

function App() {
  const drawEllipse = (applet) => {
    applet.evalCommand('ellipse: x^2/25 + y^2/9 = 1');
    applet.setColor('ellipse', 255, 0, 0);
    applet.setLineThickness('ellipse', 3);
    applet.setCaption('ellipse', '椭圆: \\frac{x^2}{25} + \\frac{y^2}{9} = 1');

    applet.evalCommand('A: Point(ellipse)');
    applet.evalCommand('C1: (4, 0)');
    applet.evalCommand('C2: (-4, 0)');
    applet.evalCommand('s1: Segment(C1, A)');
    applet.evalCommand('s2: Segment(C2, A)');
    applet.evalCommand('lenSum: s1 + s2');

    applet.setCoordSystem(-6, 6, -4, 4);
  };

  return (
    <div>
      <div>foo</div>
      <Geogebra
        id="geogebra"
        width={1200}
        height={600}
        showToolbar={true}
        showMenuBar={true}
        allowStyleBar={true}
        showAlgebraInput={true}
        enableLabelDrags={false}
        enableShiftDragZoom={true}
        capturingThreshold={null}
        showToolBarHelp={false}
        errorDialogsActive={true}
        showTutorialLink={true}
        appletOnLoad={drawEllipse}
      />
    </div>
  );
}

export default App;
