import React from 'react';
/** Boostrap */
import Table from 'react-bootstrap/Table';

/** Propios */
import Filas from './Filas';

/** Icon fonts */
import { FaCoins } from 'react-icons/fa';

class TablaSearch extends React.Component {
	render(){
	
		const filterText = this.props.filterText; //Pedidomos la propiedad del input de busqueda para poder filtrar
		const stock 	 = this.props.stock; //Pedimos la propiedad del check para poder filtrar

		/**
		 * Nuestro array de productos ya que por el momento no consumo ninguna api
		 * @type {Array}
		 */
		const productos = [
			{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football 5'},
		  	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
		  	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
		  	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
		  	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexús 7'}
		];

		const rows = [];

		/**
		 * Determinamos la entrada de lo que captura en el filtro de busqueda
		 *
		 * @author 🏅 Glendy Covarrubias <glendycovarrubias@hotmail.com>
		 * date 2019-06-21
		 * @version [1.0]
		 * @param   {[type]} (product [description]
		 * @return  {[type]}          [description]
		 */
		productos.forEach((product) => {
			/* Vamos a formatear para no tener conflictos al momento de realizar busquedas
			 * con entradas en Mayusculas, Minusculas y Acentos
			 * Formateamos a mayuscula todo
			*/
	    	if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
	        	return;
	      	}

	      	/* Valida que registros va mostrar con respecto al value del check */
	      	if (stock && !product.stocked) {
        		return;
      		}

		    rows.push(product);
	    });
		
		/**
		 * Busqueda del catalogo de productos
		 *
		 * @author 🏅 Glendy Covarrubias <glendycovarrubias@hotmail.com>
		 * date 2019-06-21
		 * @version [1.1] Version dinamica busqueda funcionalidad
		 * @param   {[type]} (row, key           [description]
		 * @return  {[type]}       [description]
		 */
		const listItemsBody = rows.map((row, key) =>
			<tr key={key}>
				<Filas value={row.name} />
				<Filas value={row.category} />
				<Filas value={row.price} />
			</tr>
		)

		/**
		 * Template de la tabla de catalogo de productos
		 * @type {[type]}
		 */
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