import React from "react";

import './styles.css';

class Notification extends React.Component {
    render() {
        return (
            <div className="alert alert-success alert-dismissible" role="alert">
                <h4 className="alert-heading">Header</h4>
                <p>this.props.something</p>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default Notification;
