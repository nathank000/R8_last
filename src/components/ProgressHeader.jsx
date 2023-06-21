import React, { useContext } from 'react';
import StepsContext from '../StepsContext';

function ProgressHeader() {
  const { step, setStep, name, setName, APP_DATA } = useContext(StepsContext);
  
  const currentStepClass = "p-2 highlight flex-grow-1 badge bg-dark";
  const otherStepClass = "p-2 bd-highlight badge bg-secondary"
  const totalSteps = APP_DATA.steps;

  return (
    <div class="d-flex"
    style={{
      height:60,
      backgroundImage: "url(" + "./assets/headerBG.jpg" + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      

      {totalSteps.map((value, index) => {
        index +=1;
        let itemClass = "p-2 bd-highlight badge bg-secondary";
        let stepText = "Step " +index;

        if (index == step) {
          itemClass = "p-2 highlight flex-grow-1 badge bg-dark"
          stepText += " - " +APP_DATA.steps[index-1].title;
        }
          return <div class={itemClass} style={{height:30,margin:10}}>{ stepText }</div>
      })}

      </div>
  );
}

export default ProgressHeader;