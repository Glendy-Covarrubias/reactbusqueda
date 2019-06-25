import React from 'react';
/** Boostrap */
import Table from 'react-bootstrap/Table';

/** Propios */
import Filas from './Filas';
import Paginador from './Paginador';

/** Icon fonts */
import { FaCoins } from 'react-icons/fa';

class TablaSearch extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			pag : 1		
		}

		this.filterPag = this.filterPag.bind(this);
	}

	filterPag(pag){
		this.setState({
			pag: pag
		});
	}

	render(){
	
		const filterText = this.props.filterText; //Pedidomos la propiedad del input de busqueda para poder filtrar
		const stock 	 = this.props.stock; //Pedimos la propiedad del check para poder filtrar

		/**
		 * Nuestro array de productos ya que por el momento no consumo ninguna api
		 * @type {Array}
		 */
		const productos = [
			{category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Football 5'},
		  	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
		  	{category: 'Sporting Goods', price: '$29.99', stocked: true, name: 'Basketball'},
		  	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
		  	{category: 'Electronics', price: '$399.99', stocked: true, name: 'iPhone 5'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
		  	{category: 'Electronics', price: '$199.99', stocked: false, name: 'Nexús 7'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Samsung'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Lg'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Xiaome'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 8'},
		  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexús 9'},
		  	{category: 'Sporting', price: '$199.99', stocked: true, name: 'Samsung 16'},
		  	{category: 'Sporting', price: '$199.99', stocked: true, name: 'Lg 56'},
		  	{category: 'Sporting', price: '$199.99', stocked: true, name: 'Xiaome jjaja'}
		];

		const rows 			= [];
		var agrupacionGral 	= 5;
		var agrupacion 		= 0; //Almacen de agrupacion
		var pag 			= 0; //Paginacion

		/**
		 * Determinamos la entrada de lo que captura en el filtro de busqueda
		 *
		 * @author 🏅 Glendy Covarrubias <glendycovarrubias@hotmail.com>
		 * date 2019-06-21
		 * @version [1.0]
		 * @param   {[type]} (product [description]
		 * @return  {[type]}          [description]
		 */
		productos.forEach((product, key) => {

			/** Paginador */
		    /** Agrupando objeto */
			if(key >= agrupacion){
				agrupacion 	= agrupacion + agrupacionGral;
				pag 		= pag + 1;
			}

			product["pagesize"] = agrupacion;
			product["pag"]      = pag;
			product["index"]    = key;
			
			/** Search producto y stock */
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

      		if(product.pag != this.state.pag){
      			return; //Reparar los filtros de busqueda y stock con la paginacion PENDIENTE
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
		const listItemsBody = rows.map((row, key) =>{

				const template = 
					<tr key={key}>
						<Filas value={row.name} />
						<Filas value={row.category} />
						<Filas value={row.price} />
					</tr>;

				return template;
			
		});

		/**
		 * Template de la tabla de catalogo de productos
		 * @type {[type]}
		 */
		const template = 
			<section>
				<Table responsive="md" striped bordered hover>
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
				<Paginador 
					pagtotal 		= {pag}
					pag 	    	= {this.state.pag}
					cambioPagChange = {this.filterPag}
				/>
			</section>
		;

		return(template);
	}
}

export default TablaSearch;