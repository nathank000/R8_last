import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';


function Step4() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
    {step === 4 && (
      <a-scene
         renderer="logarithmicDepthBuffer: true;"
         embedded
         loading-screen="enabled: false;"
         arjs="sourceType: webcam; debugUIEnabled: false;"
     >
         <a-assets>
             <a-asset-item
                 id="animated-asset"
                 src="../Assets/models/asset.glb"
             ></a-asset-item>
         </a-assets>

             <a-entity
                 look-at="[gps-camera]"
                 animation-mixer="loop: repeat"
                 gltf-model="#animated-asset"
                 scale="1.2998996555779017 1.2998996555779017 1.2998996555779017"
                 gps-entity-place="latitude: 40.74324157954704; longitude: -73.99424096589156;"
             ></a-entity>

         <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    )}
    </div>
  );
}

export default Step4;
