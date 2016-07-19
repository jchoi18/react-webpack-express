import React from 'react';
import styles from './App.css';
var LoginView = require('./LoginView.js');

var App = (
    <div>
        <div className={styles.app}> bar </div>
        <LoginView/>
    </div>
);

module.exports = App;
// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {test: 'foo'};
//     }
//     render() {
//         return (
//             <div>
//             <div className={styles.app}>
//                 bar
//             </div>
//             <LoginView />
//             </div>
//         );
//     }
// }
