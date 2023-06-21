import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import StepsContext from '../../StepsContext';

function DataLoader() {
    const { step, setStep, userRegion, APP_DATA, set_APP_DATA} = useContext(StepsContext);

    
    function parseAppData(incomingData) {
      
      let totalSteps = incomingData.steps.length;
      console.log("DATA_LOADER::: data loaded  = ", totalSteps);
      set_APP_DATA(incomingData);
    }
    
    
    useEffect(() => {
        //load the app data on component load
        axios.get('/APP_DATA/app_info.json')
          .then(
            response => parseAppData(response.data),
          )
          .catch(error => console.error('Error fetching data', error));
      }, []);

return(
    <></>
);
};

export default DataLoader ;