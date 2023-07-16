import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import { Utils } from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';
import 'aframe';
import 'arjs';

function Step4() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
      {step === 4 && (
        <>
          <div class="main">
            <ProgressHeader />
            <div class="d-flex flex-nowrap">
              <LeftColumn />
              <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
                <h1>This is Step {step}</h1>
                (verify enter) enter the verification code you received
                <a-scene embedded>
                  <a-box
                    position="-1 0.5 -3"
                    rotation="0 45 0"
                    color="#4CC3D9"
                  ></a-box>
                  <a-sphere
                    position="0 1.25 -5"
                    radius="1.25"
                    color="#EF2D5E"
                  ></a-sphere>
                  <a-cylinder
                    position="1 0.75 -3"
                    radius="0.5"
                    height="1.5"
                    color="#FFC65D"
                  ></a-cylinder>
                  <a-plane
                    position="0 0 -4"
                    rotation="-90 0 0"
                    width="4"
                    height="4"
                    color="#7BC8A4"
                  ></a-plane>
                  <a-sky color="#ECECEC"></a-sky>
                </a-scene>
                <BottomButtons />
              </div>
            </div>
          </div>
          {/* <a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true'>
          <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
          <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: <your-lat>; longitude: <your-loon>" scale="10 10 10"></a-entity>
        </a-scene> */}
        </>
      )}
    </div>
  );
}

export default Step4;
