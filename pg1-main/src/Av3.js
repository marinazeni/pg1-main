import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMediaQuery } from 'react-responsive';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "unity3/Build/buildCasa.loader.js",
    dataUrl: "unity3/Build/buildCasa.data",
    frameworkUrl: "unity3/Build/buildCasa.framework.js",
    codeUrl: "unity3/Build/buildCasa.wasm",
    streamingAssetsUrl: "unity3/StreamingAssets"
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
