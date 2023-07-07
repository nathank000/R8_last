import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';


function Step2() {
  const { step, setStep, name, setName, userRegion } = useContext(StepsContext);


  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {step === 2 && (
        <div class="main">
          <ProgressHeader />
          <div class="d-flex flex-nowrap">
          <LeftColumn />
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
              <h1>This is Step {step}</h1>
              (verifyMessage) - enter your phone number and we will verify with an SMS
              <p>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter your phone number" />
              </p>
              <p>welcome to the <strong>{userRegion}</strong> region</p>
             <BottomButtons />
            </div>
          </div>
        </div>
    )}
  </div>
  );
}

export default Step2;