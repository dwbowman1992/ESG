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
                <Link to="/settings"><FontAwesomeIcon icon={faCog} /></Link>
              </div>
              <div className="col-4 text-center">
                <Link to="/"><FontAwesomeIcon icon={faTachometerAlt} /></Link>
              </div>
              <div className="col-4 text-right">
                <Link to="/info"><FontAwesomeIcon icon={faInfoCircle} /></Link>
              </div>
            </div>
          </div>
        );
    }
}

export default footer;
