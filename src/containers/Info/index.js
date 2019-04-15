import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Info extends React.Component {
    render() {
        return (
          <div className="container col-sm-12">
            <div className="row">
              <div className="col-sm-12 text-center text">
                <h1 class="text">Infomation</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text">
                <h2>Product Overview</h2>
                <h6>
                  The OutSigned Alert System (OSAS) is a haptic feedback integrated
                  system that monitors for select directional sounds and provides
                  users with haptic directional indicators.
                  The OutSigned Alert System is developed as a small form-factor,
                  convenient, and efficient haptic feedback system. This device
                  shall provide sufficient directional sound indication for users
                  with hearing impairments, or in environments that may have otherwise
                  hindered the user’s ability to locate and identify said sounds.
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text">
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
              <div class="col-sm-12 text"><h3>Issues?</h3></div>
              <div class="col-sm-12 text">
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
