import React from 'react';
import styles from '../stylesheets/style.css';
var TestView = require('./views/TestView.js');

var App = (
    <div>
        <div className={styles.app}> bar </div>
        <TestView/>
    </div>
);

module.exports = App;
