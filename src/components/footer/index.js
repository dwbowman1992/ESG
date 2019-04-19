import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import './styles.css';

class footer extends React.Component {
    // <span>&#176;</span>
    //                 <Link to="/info"><FontAwesomeIcon icon={faInfoCircle} /></Link>
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    render() {
        const contracted = !this.state.expanded ? 'contracted' : null;
        const navBtn = this.state.expanded ? 'xBtn' : 'barBtn';
        return (
          <nav className="Nav">
            <div className={`${contracted} expandedNav`}>
              <button className="navBtn" onClick={() => this.setState({ expanded: !this.state.expanded })}>
                <FontAwesomeIcon className={`${navBtn} navBtn`} size="lg" icon={this.state.expanded ? faTimes : faBars} />
              </button>
              {this.state.expanded ?
                <ul>
                  <li>
                    <h3 className="menuTitle">OutSigned</h3>
                  </li>
                  <li>
                    <Link to="/" onClick={() => this.setState({ expanded: !this.state.expanded })}><h4>Dashboard</h4></Link>
                  </li>
                  <li>
                    <Link to="/settings" onClick={() => this.setState({ expanded: !this.state.expanded })}><h4>Settings</h4></Link>
                  </li>
                  <li>
                    <Link to="/info" onClick={() => this.setState({ expanded: !this.state.expanded })}><h4>Information</h4></Link>
                  </li>
                </ul>
              :
                null
              }
            </div>
          </nav>
        );
    }
}

export default footer;
