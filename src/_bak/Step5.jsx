import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';

function Step5() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
    {step === 5 && (
      <div class="main">
        <ProgressHeader />
        <div class="d-flex flex-nowrap">
        <LeftColumn />
          <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
          <h1>This is Step {step}</h1>
          congratulations, you got a BLANK thing<br />
          (show the thing in a 3d viewer)
          <img width="190" src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?w=190' />
          <p>Hello, {name}!</p>
          <BottomButtons />
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Step5;
