import React from 'react';
import ReactDOM from 'react-dom';

import ApiUtilities from './api/Apiutilities';

function App() {
    return (
        <div>
            <ApiUtilities/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);


module.hot.accept();
