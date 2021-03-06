import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import MainInformationView from "../MainInformationView";

import './styles.css';

class ApplicationShell extends React.Component {
    render() {
        return (
          <div className="col-sm-12">
            <div className="col-sm-12 iconContainer">
                <MainInformationView />
                <div className="outterCircle">
                  <div className="middleCircle">
                    <div className="middleCircle2">
                      <div className="innerCircle">
                        <div className="iconWrapper">
                          <FontAwesomeIcon className="rotateIcon" icon={faLocationArrow} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ApplicationShell;
