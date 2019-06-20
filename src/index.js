import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import HeaderSearch from './HeaderSearch';
// import SubHeaderSearch from './SubHeaderSearch';
// import TablaSearch from './TablaSearch';
import FiltroBusqueda from './FiltroBusqueda';
import * as serviceWorker from './serviceWorker';

// Inicando
// ReactDOM.render(<HeaderSearch />, document.getElementById('contendHeader'));
// ReactDOM.render(<SubHeaderSearch />, document.getElementById('contendSubHeader'));
// ReactDOM.render(<TablaSearch />, document.getElementById('contendTabla'));

// ReactDOM.render(<App />, document.getElementById('root'));

// Final
ReactDOM.render(<FiltroBusqueda />, document.getElementById('contenedorGral'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
