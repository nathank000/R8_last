import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';
import { AFrame } from 'aframe';
import { AScene } from 'aframe';


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

                {step === 4 && (
                  <>  
                      aframe scene below
                     <AScene
                        vr-mode-ui="enabled: false"
		                    embedded
                        arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: true;'>
        
                        <a-entity camera="active: true" look-controls wasd-controls position="0 1.6 0" data-aframe-default-camera>
                          <a-entity gltf-model="./Assets/magnemite/scene.gltf" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: 18.03500205893282; latitude: -63.094682445833605;" animation-mixer/>
                        </a-entity>
                      </AScene>
                  </>
                )}

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