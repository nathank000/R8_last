import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import StepsContext from './StepsContext';

//import { Utils } from './functions/componentFunctions';
import { StepsProvider } from './StepsContext';
import DataLoader from './components/IO/DataLoader';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';
import Step6 from './components/steps/Step6';
import Step7 from './components/steps/Step7';
import MainAppView from './components/MainAppView';
import ProgressHeader from './components/ProgressHeader';
import logo from './logo.svg';
import './App.css';
import LoaderScreen from './components/LoaderScreen';

const App = () => {
  
  
  const [data, setData] = useState(null);
  // const {APP_DATA , set_APP_DATA} = useContext(StepsContext);

  useEffect(() => {
    console.log('this is the useEffect of App.js');
  }, []);


  return (
    <StepsProvider>
      <LoaderScreen />
      <DataLoader />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
      <MainAppView />
    </StepsProvider>
  );
}

export default App;
