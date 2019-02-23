import React from 'react';
import ReactDOM from 'react-dom';

import ApplicationShell from './components/ApplicationShell';


function App() {
    return (<ApplicationShell/>);
}

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();
