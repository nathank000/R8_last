import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';


function Step7() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
    {step === 7 && (
      <div class="main">
        <ProgressHeader />
        <div class="d-flex flex-nowrap">
        <LeftColumn />
          <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
          <h1>This is Step {step}</h1>
          <p>Hello, {name}!</p>
          how do I find more? <br />
          another tab to show participants/locations<br />
          <BottomButtons />
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Step7;
