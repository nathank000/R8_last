import React, { useContext } from 'react';
import StepsContext from '../StepsContext';
import {Utils} from '../functions/componentFunctions';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { WalletFill } from 'react-bootstrap-icons';

// https://icons.getbootstrap.com/

// import ProgressHeader from '../ProgressHeader';
// import LeftColumn from '../LeftColumn';


function BottomButtons() {
    const { step, setStep, userRegion, APP_DATA} = useContext(StepsContext);

return(
    <div>
    {step !== 1 && (
        <button class="m-2 btn btn-secondary btn-sm" onClick={() => setStep(step - 1)}>
            <ArrowLeftCircleFill class="m-2" />
            Previous Step &nbsp;
        </button>
    )}
    
    {step !== 7 && (
        <button class="m-2 btn btn-success btn-sm" onClick={() => setStep(step + 1)}>
             &nbsp; Next Step
            <ArrowRightCircleFill class="m-2" />
        </button>
    )}

    {step === 7 && (
        <button class="m-2 btn btn-success btn-sm" onClick={() => setStep(step + 1)}>
             &nbsp; Go to your Wallet
            <WalletFill class="m-2" />
        </button>
    )}
    </div>
)

};

export default BottomButtons;