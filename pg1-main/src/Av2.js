import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMediaQuery } from 'react-responsive';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "unity2/Build/buildRestaurante.loader.js",
    dataUrl: "unity2/Build/buildRestaurante.data",
    frameworkUrl: "unity2/Build/buildRestaurante.framework.js",
    codeUrl: "unity2/Build/buildRestaurante.wasm",
    streamingAssetsUrl: "unity2/StreamingAssets"
  });

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
      <div >
       <Header />
        <div className='page'>
          {isMobile ? (
            <Unity
              style={{
                width: "fit-content",
                height: "80%",
                justifySelf: "center",
                alignSelf: "center",
              }}
              unityProvider={unityProvider}
            />
          ) : (
            <Unity
              style={{
                width: "80%",
                height: "fit-content",
                justifySelf: "center",
                alignSelf: "center",
              }}
              unityProvider={unityProvider}
            />
          )}
        </div>
      </div>
  );
}

export default App;
