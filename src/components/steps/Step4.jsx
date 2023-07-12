import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';
import ReactDOM from "react-dom"
  


function Step4() {
  const { step, setStep, name } = useContext(StepsContext);

  {step === 4 && (
      <h1>F O U R</h1>
  )}
}

export default Step4;