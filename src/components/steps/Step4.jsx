import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';
import ReactDOM from "react-dom"
import 'aframe';


function Step4() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
    {step === 4 && (
      <>
        This is step 4 with the scene
        <a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true'>
          <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
          <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: <your-lat>; longitude: <your-loon>" scale="10 10 10"></a-entity>
        </a-scene>
      </>
    )}
    </div>
  );
}

export default Step4;