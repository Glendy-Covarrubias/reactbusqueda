import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FiltroBusqueda from './FiltroBusqueda';
import * as serviceWorker from './serviceWorker';

/**	
 * Renderizar el componente a la vista del Index
 */
ReactDOM.render(<FiltroBusqueda />, document.getElementById('contenedorGral'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
