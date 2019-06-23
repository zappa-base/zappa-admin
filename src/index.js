import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

// global css
import { App } from './components/App';
import { client } from './graphql/createClient';

ReactDOM.render(<App apolloClient={client} />, document.getElementById('root'));
