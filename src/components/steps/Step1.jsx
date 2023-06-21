import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';


function Step1() {
  const { step, setStep, userRegion, APP_DATA } = useContext(StepsContext);
  
  let thisStepArrayNum = parseInt(Number(step)-1);

  if(thisStepArrayNum < APP_DATA.application_data.totalSteps) {
    let stepTitleText = APP_DATA.steps[thisStepArrayNum].title;
    let stepMainImage = APP_DATA.steps[thisStepArrayNum].main_data_image;
    let stepMainData = APP_DATA.steps[thisStepArrayNum].main_data;

    return (
      <div>
          <div class="main">
            
            <ProgressHeader />
            
            <div class="d-flex flex-nowrap">
              <LeftColumn />
              <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
                <h1>{ stepTitleText }</h1>
                
                {/* https://www.pluralsight.com/guides/return-html-elements-in-json */}
                
                <div dangerouslySetInnerHTML={ {__html: stepMainData} } />
                <div>
                <BottomButtons />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Step1;