//imports
import React, { useContext } from 'react';
import StepsContext from '../StepsContext';
import {Utils} from '../functions/componentFunctions';
import { Tabs, Tab, Col, Nav, Row, Container } from "react-bootstrap";
import '../css/MainAppView.css';
import { ArrowRightCircleFill, ChatLeftHeartFill, CompassFill, HouseDoorFill } from 'react-bootstrap-icons';
import { SafeFill } from 'react-bootstrap-icons';
import { CashCoin } from 'react-bootstrap-icons';
import { WalletFill } from 'react-bootstrap-icons';
import { BellFill } from 'react-bootstrap-icons';
import { Safe } from 'react-bootstrap-icons';
import { Safe2 } from 'react-bootstrap-icons';

// working from this doc
// https://www.copycat.dev/blog/bootstrap-tabs/

//function
function MainAppView() {
    const { step, setStep, userRegion, APP_DATA } = useContext(StepsContext);

    //retur1`
    // https://react-bootstrap.netlify.app/docs/layout/grid
    return (
        <div id="MainAppView_holder" class="MainAppView_holder">
            {step === 8 && (
             <>
             <Container>
                <Row>
                    <Col lg={11}>
                        <Tabs defaultActiveKey="wallet">
                        <Tab eventKey="home" title={<span><HouseDoorFill class="m-2" /> Home</span>}>
                            Welcome
                        </Tab>
                        <Tab title={<span><WalletFill class="m-2" /> Wallet</span>} eventKey="wallet" >
                            <div class="row">
                            <div class="col-6 border bg-light" style={{opacity: .7}}>
                            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
                            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                                &nbsp; Mint to ETH
                                <Safe class="m-2" />
                            </button>
                            </div>
                            <div class="col-6 border bg-light" style={{opacity: .7}}>
                            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
                            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                                &nbsp; Mint to ETH
                                <Safe class="m-2" />
                            </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 border bg-light" style={{opacity: .7}}>

                            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
                            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                                &nbsp; Mint to ETH
                                <Safe class="m-2" />
                            </button>
                            </div>
                            <div class="col-6 border bg-light" style={{opacity: .7}}>
                            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
                            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                                &nbsp; Mint to ETH
                                <Safe class="m-2" />
                            </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 border bg-light" style={{opacity: .7}}>
                            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
                            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                                &nbsp; Mint to ETH
                                <Safe class="m-2" />
                            </button>
                            </div>
                            <div class="col-6 border bg-light" style={{opacity: .7}}>
                            <img src='https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60' />
                            <button class="m-2 btn btn-info btn-sm" onClick={() => setStep(step + 1)}>
                                &nbsp; Mint to ETH
                                <Safe class="m-2" />
                            </button>
                            </div>
                        </div>
                        </Tab>
                        <Tab eventKey="navigator" title={<span>Navigator <CompassFill class="m-2" /> </span>} />
                        <Tab eventKey="community" title={<span>Community <ChatLeftHeartFill class="m-2" /> </span>} />
                        <Tab eventKey="updates" title={<span>Updates <BellFill class="m-2" /> </span>} />
                        <Tab eventKey="redeem" title={<span>Redeem <CashCoin class="m-2" /> </span>} />
                        </Tabs>
                    </Col>
                    <Col lg={1}>
                        <svg class="bd-placeholder-img rounded-circle" width="80" height="80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    </Col>
                </Row>
             </Container>
             </>
            )}
        </div>
    )
}
    
//export
export default MainAppView;