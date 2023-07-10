import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';
import ReactDOM from "react-dom"
  
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs"
  


function Step4() {
  const { step, setStep, name } = useContext(StepsContext);

  {step === 4 && (
    ReactDOM.render(
        <ARCanvas
          camera={ { position: [0, 0, 0] } }
          onCreated={ ({ gl }) => {
            gl.setSize(window.innerWidth, window.innerHeight)
          } }>
          <ambientLight />
          <pointLight position={ [10, 10, 0] }  />
          <ARMarker
            type={ "pattern" }
            patternUrl={ "data/hiro.patt" }>
            <mesh>
              <boxBufferGeometry args={ [1, 1, 1] } />
              <meshStandardMaterial color={ "green" } />
            </mesh>
          </ARMarker>
        </ARCanvas>,
        document.getElementById("root")
    )
  )}
}

export default Step4;