import React, { useContext, useState } from 'react';
import StepsContext from '../StepsContext';
import Overlay from 'react-bootstrap/Overlay';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function LoaderScreen() {
    console.log("LOADER:::: Loader rendering...");

    const { step, setStep, name, setName, APP_DATA } = useContext(StepsContext);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);
    let headerText = "Loading...";
    let loaderVisibilityClass = "invisible";
    let loaderINvisibilityClass = "visible";
    
    if(APP_DATA['application_data']['data_loaded'] === "finally"){
        console.log("DATA IS FINALLY LOADED");
        headerText = "Experience Loaded"
        loaderINvisibilityClass = "invisible"
        loaderVisibilityClass = "visible";
    }
    else {
        console.log("LOADER:::: nothing loaded now");
    }

    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
    const handleClose = () => setShow(false);
  
    return (
        <>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header>
            <Modal.Title>Welcome!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{ headerText }</div>
                <div class="d-flex align-items-center">
                    <div className={loaderINvisibilityClass} class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
                <br />
                <Button className={loaderVisibilityClass} variant="primary" onClick={handleClose}>
                    Let's Go!
                </Button>
            </Modal.Body>
        </Modal>
    </>
    );
  }
  
  export default LoaderScreen;