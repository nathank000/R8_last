import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import StepsContext from './StepsContext';

//import { Utils } from './functions/componentFunctions';
import { StepsProvider } from './StepsContext';
import DataLoader from './components/IO/DataLoader';
import Step1 from './components/steps/Step1';
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
      <MainAppView />
    </StepsProvider>
  );
}

export default App;
