import React, { useEffect } from 'react';
import axios from 'axios';
import { Utils } from './functions/componentFunctions';


const StepsContext = React.createContext();

export default StepsContext;

export function StepsProvider({ children }) {
    const [step, setStep] = React.useState(1);
    const [name, setName] = React.useState('');
    const [userRegion, setUserRegion] = React.useState('Northeast');

    let defaultAppData = {
                          "campaign":{
                            "title": "defaultCampaignTitle",
                            "requirements":{
                              age: "18"
                            },
                            "organization": {
                              "title": "defaultOrgTitle"
                            }
                          },
                          "steps": [
                            {
                              "title": "Step 7",
                              "main_data": "Main data for Step 7",
                              "button_next": "Next",
                              "button_previous": "Previous",
                              "button_previous_icon": "prev_icon.png",
                              "button_next_icon": "next_icon.png",
                              "main_data_image": "main_data_image7.png",
                              "left_explainer_data": "Explainer data for Step 7",
                              "left_explainer_image": "explainer_image7.png"
                            }
                          ],
                          token_options:[
                            {
                              "title": "Step 1",
                              "main_data": "Main data for Step 1",
                              "button_next": "Next",
                              "button_previous": "Previous",
                              "button_previous_icon": "prev_icon.png",
                              "button_next_icon": "next_icon.png",
                              "main_data_image": "main_data_image7.png",
                              "left_explainer_data": "Explainer data for Step 7",
                              "left_explainer_image": "explainer_image7.png"
                            }
                          ],
                          application_data: {
                            "totalSteps": 1
                          }
                        }

    const [APP_DATA, set_APP_DATA] = React.useState(defaultAppData);
    
    return (
      <>
        {/* <StepsContext.Provider value={{ step, setStep, name, setName, userRegion, setUserRegion }}> */}
        <StepsContext.Provider value={{ step, setStep, name, setName, userRegion, setUserRegion, APP_DATA, set_APP_DATA }}>
          {children}
        </StepsContext.Provider>
      </>
    );
  }