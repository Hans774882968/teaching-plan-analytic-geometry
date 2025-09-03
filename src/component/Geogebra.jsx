import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './Geogebra.module.scss';
import { cn } from '@/lib/utils';
import { getGeogebraHTML5Codebase } from '../lib/getWebsiteBasePath';

const ggbHTML5Codebase = getGeogebraHTML5Codebase();

const Geogebra = (props) => {
  const defaultProps = {
    appName: 'classic',
    height: 600,
    showToolBar: true,
    showAlgebraInput: true,
    showMenuBar: true,
  };
  const mergedProps = { ...defaultProps, ...props };
  const refProps = useRef(mergedProps);

  const { onReady, appletOnLoad } = refProps.current;
  let { id, LoadComponent, debug } = refProps.current;
  if (!id) {
    id = 'ggb-applet';
  }
  if (!debug) {
    debug = false;
  }
  // if a JSX Component is not given as a prop, use h3 with children
  if (!LoadComponent) {
    LoadComponent = ({ children }) => <h3>{children}</h3>;
  }

  const [watchPropsChange, setWatchPropsChange] = useState(false);
  // gets called by Geogebra after the Applet is ready
  const onAppletReady = useCallback(
    (ggbApi) => {
      if (appletOnLoad) appletOnLoad(ggbApi);
      if (onReady) onReady();
      debug && console.log(`Applet with id "${id}" is ready`);
    },
    [appletOnLoad, debug, id, onReady]
  );

  useEffect(() => {
    if (window.GGBApplet) {
      const parameter = JSON.parse(JSON.stringify(refProps.current));
      parameter.appletOnLoad = onAppletReady;
      const ggbApp = new window.GGBApplet(parameter, true);
      ggbApp.setHTML5Codebase(ggbHTML5Codebase);
      ggbApp.inject(id);
      setWatchPropsChange(false);
      debug &&
        console.log(`applet with id "${id}" successfully injected into the DOM`);
    }

    return () => {
      const tag = document.getElementById(`${id}-holder`);
      if (tag) {
        tag.lastChild.textContent = '';
      }
    };
  }, [watchPropsChange, debug, id, onAppletReady]);

  return (
    <div id={`${id}-holder`} className={cn(styles.geogebraWrapper, props.className)}>
      <div id={id} style={{ width: '100%' }}></div>
    </div>
  );
};

export default Geogebra;
