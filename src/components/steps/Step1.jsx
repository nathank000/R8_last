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
                      <a-scene
                        tap-place
                        landing-page="mediaSrc: https://media.giphy.com/media/UIQc7mECaH5nw0Y03Y/giphy.mp4"
                        xrextras-loading
                        xrextras-runtime-error
                        renderer="antialias: true; colorManagement: true; physicallyCorrectLights: true;"
                        xrweb>
                        {/* <!-- We can define assets here to be loaded when A-Frame initializes --> */}

                        <a-assets>
                          {/* <!-- Credit to Poly by Google for the model: https://poly.google.com/view/6pwiq7hSrHr --> */}
                        
                          <a-asset-item id="treeModel" src="../../../assets/tree.glb"></a-asset-item>
                        </a-assets>
                        
                        {/* <!-- The raycaster will emit mouse events on scene objects specified with the cantap class --> */}
                        <a-camera
                          position="0 8 0"
                          raycaster="objects: .cantap"
                          cursor="
                            fuse: false;
                            rayOrigin: mouse;">
                        </a-camera>
                        <a-entity
                          light="type: directional;
                                intensity: 0.8;"
                          position="1 4.3 2.5">
                        </a-entity>
                        <a-light type="ambient" intensity="1"></a-light>
                        {/* <!-- Adding the cantap class allows the ground to be clicked --> */}
                        
                        <a-entity
                          id="ground"
                          class="cantap"
                          geometry="primitive: box"
                          material="color: #ffffff; transparent: true; opacity: 0.0"
                          scale="1000 2 1000"
                          position="0 -1 0">
                        </a-entity>
                      </a-scene>
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