import React from 'react';
import ApiUtilities from "../api/Apiutilities";

import './styles.css';

class ApplicationShell extends React.Component {
    render() {
        return (
          <div className="col-sm-12">
            <div className="col-sm-12 text-center">
              <h1>ESG</h1>
            </div>
            <div className="col-sm-12">
              <ApiUtilities/>
            </div>
          </div>
        );
    }
}

export default ApplicationShell;
