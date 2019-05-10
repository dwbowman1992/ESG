import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Info extends React.Component {
    render() {
        return (
          <div className="container col-sm-12 fontColor">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="pgHeader">Infomation</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h2>Product Overview</h2>
                <h6>
                  The system defined in this report will increase safe vehicle operability through the use of sound localization and visual warning systems. This system is intended as a safety system for drivers. Current vehicle safety systems do not have the ability to locate external sounds. This system will be able to detect sounds according to their frequencies, localize them, and visually represent the expected source location. During the localization process, if a specific frequency is detected, the source location is identified and an indicator appears on a screen. This indicator will be displayed on a 360° span and placed in a way to show the localized direction to the operator. Device settings are malleable, where system settings such as target frequency and display information can be customized by the operator. Information collected by the system is stored in a local database and may be recovered in the event of an accident. The device is a safety warning system and adds another layer to safe vehicle operability. The sensitivity and accuracy of the system proves to be robust enough to locate sounds ranging from the human voice to emergency sirens.
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 ">
                <h2>Our Motivation</h2>
                <h6>
                  Our motivation is derived from our group’s want to create a
                  product that helps locate sound in environments that would
                  have otherwise been hard to locate given the environmental
                  circumstances. 
                </h6>
                <h2>Problem Statement</h2>
                <h6>
                  The problem we are targeting is that in certain environments
                  critical sounds can be hard to locate. This hinders an individual’s
                  ability to respond accordingly if the need arises. An example of
                  this problem would be for a first responder or security personnel.
                  Being able to locate the source of a sound, say a siren,
                  bullet crack, or cry for help may be the difference between
                  success and failure in highly intense situations. Other use cases
                  may include hazardous work environments, such as working on heavy
                  machinery with hearing protection.
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 "><h3>Issues?</h3></div>
              <div className="col-sm-12 ">
                <h6>Email us at ThirdEarCo@gmail.com</h6>
              </div>
              <div className="col-sm-12 version">
                Running verion 1.0
              </div>
            </div>
          </div>
        );
    }
}

export default Info;
