import React from 'react';
/** Boostrap */
import Table from 'react-bootstrap/Table';

/** Propios */
import Filas from './Filas';

/** Icon fonts */
import { FaCoins } from 'react-icons/fa';

class TablaSearch extends React.Component {
	render(){
		const productos = [
			{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
		  	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
		  	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
		  	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
		  	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
		];

		/**
		 * Funcion que permite recorrer el objeto para formar el body de la tabla
		 *
		 * @author 🏅 Glendy Covarrubias <glendycovarrubias@hotmail.com>
		 * date 2019-06-20
		 * @version [1.0]
		 * @param   {[type]} (producto, key           [description]
		 * @return  {[type]}            [description]
		 */
		const listItemsBody = productos.map((producto, key) =>
			/** Siempre dentro de un element padre Recordar eso */
			<tr key={key}>
				<Filas value={producto.name}/>
				<Filas value={producto.category}/>
				<Filas value={producto.price} />
			</tr>
		);

		const template = 
			<Table striped bordered hover>
				<thead>
			    	<tr>
			      		<th>Producto</th>
			      		<th>Categoria</th>
			      		<th>Precio <span><FaCoins /></span></th>
			    	</tr>
			  	</thead>
			  	<tbody>
			    	{listItemsBody}
			  	</tbody>
			</Table>
		;

		return(template);
	}
}

export default TablaSearch;