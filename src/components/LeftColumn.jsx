import React, { useContext } from 'react';
import StepsContext from '../StepsContext';
import {Utils} from '../functions/componentFunctions';



function LeftColumn() {
    const { step, setStep, name, setName, APP_DATA } = useContext(StepsContext);
  
    let thisStepArrayNum = parseInt(Number(step)-1);
    let leftText = APP_DATA.steps[thisStepArrayNum].left_explainer_data;
    let leftImage = APP_DATA.steps[thisStepArrayNum].left_explainer_image;

    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{
            width:300,
            height:400,
            backgroundImage: "url(" + "./assets/headerBG.jpg" + ")",
            }}>
            { leftText }
        </div>
    );
  }
  
  export default LeftColumn;