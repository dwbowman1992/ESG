// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import ApiUtilities from './containers/api/Apiutilities';
//
// function App() {
//     return (
//         <div>
//             <ApiUtilities/>
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App/>,
//     document.getElementById('app')
// );
//
//
// module.hot.accept();

import 'core-js';
import React from 'react';
import { render } from 'react-dom';
// import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './containers/App';


// render app component as the root component for the app
render(<App />, document.getElementById('app'));
