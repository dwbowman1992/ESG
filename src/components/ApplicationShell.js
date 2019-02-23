import React from 'react';
import ApiUtilities from "../api/Apiutilities";

const shell = {
    border: '1px solid black',
    width: '100vw',
    height: '100vh',
    maxHeight: '480px',
    maxWidth: '320px'
};


class ApplicationShell extends React.Component {
    render() {
        return (
            <div style={shell}>
                <h1>Shell is being rendered with a temporary black border to show placement</h1>
                <ApiUtilities/>
            </div>
        );
    }
}

export default ApplicationShell;
