import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { SafeFill } from 'react-bootstrap-icons';
import { CashCoin } from 'react-bootstrap-icons';
import { Safe } from 'react-bootstrap-icons';
import { Safe2 } from 'react-bootstrap-icons';


function Step6() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
    {step === 6 && (
      <div class="main">
        <ProgressHeader />
        <div class="d-flex flex-nowrap">
        <LeftColumn />
          <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
          <h1>This is Step {step}</h1>
          show "wallet" - this thing is now in your wallet<br />
	        -- there is a "MINT" option<br />
	        -- user connects their actual wallet<br />
	        -- estimate for mint provided - this will be 10 dollars!!<br />
	        -- if the user has enough cash, a mint confirmation is displayed<br />
          <p>Hello, {name}!</p>
          <div class="row">
            <div class="col-6 border bg-light">
              <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
              <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                &nbsp; Mint to ETH
                <Safe class="m-2" />
              </button>
            </div>
            <div class="col-6 border bg-light">
              <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                &nbsp; Mint to ETH
                <Safe class="m-2" />
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-6 border bg-light">

            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
              <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                &nbsp; Mint to ETH
                <Safe class="m-2" />
              </button>
            </div>
            <div class="col-6 border bg-light">
            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                &nbsp; Mint to ETH
                <Safe class="m-2" />
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-6 border bg-light">
            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
              <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                &nbsp; Mint to ETH
                <Safe class="m-2" />
              </button>
            </div>
            <div class="col-6 border bg-light">
            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                &nbsp; Mint to ETH
                <Safe class="m-2" />
              </button>
            </div>
          </div>
          <br />
          <BottomButtons />
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Step6;
