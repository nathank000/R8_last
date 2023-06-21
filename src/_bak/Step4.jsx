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
      <div class="main">
        <ProgressHeader />
        <div class="d-flex flex-nowrap">
        <LeftColumn />
          <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
          <h1>This is Step {step}</h1>
          (decide which token- not seen by user)<br/>
          (include 8th wall or similiar)<br/>
          open your phone and look around - floating AR thing!<br/>
	          -- user taps to capture - then next step
          <p>Hello, {name}!</p>
          <BottomButtons />
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Step4;
