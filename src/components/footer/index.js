import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faInfoCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import './styles.css';

class footer extends React.Component {
    // <span>&#176;</span>
    render() {
        return (
          <div className="container col-xs-12 footer">
            <div className="row">
              <div className="col-4">
                <Link className="white" to="/settings"><FontAwesomeIcon icon={faCog} /></Link>
              </div>
              <div className="col-4 text-center">
                <Link className="white" to="/"><FontAwesomeIcon icon={faTachometerAlt} /></Link>
              </div>
              <div className="col-4 text-right">
                <Link className="white" to="/info"><FontAwesomeIcon icon={faInfoCircle} /></Link>
              </div>
            </div>
          </div>
        );
    }
}

export default footer;
