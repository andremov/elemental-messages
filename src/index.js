import React from 'react';
import ReactDOM from 'react-dom';
import './Style/main.scss';
import { App } from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faExclamation, faQuestion
} from '@fortawesome/free-solid-svg-icons'
library.add(
    faExclamation, faQuestion
);

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('root')
);

