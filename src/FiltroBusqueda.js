import React from 'react';
import HeaderSearch from './HeaderSearch';
import SubHeaderSearch from './SubHeaderSearch';
import TablaSearch from './TablaSearch';

class FiltroBusqueda extends React.Component {
	constructor(props){
		super(props);
		/**
		 * Estado por default
		 * @type {Object}
		 */
		this.state = {
			filterText 	: '',
			stock 		: false
		}

		this.filterTextChange 	= this.filterTextChange.bind(this); //Filtro de busqueda
		this.checkStock			= this.checkStock.bind(this); //Checkbox de stock		
	}

	/* Busqueda de Filtro	 */
	filterTextChange(filterText){
		this.setState({
			filterText: filterText
		});
	}

	/* Checkbox de stock */
	checkStock(stock){
		this.setState({
			stock: !this.state.stock
		});
	}

	render(){
		/**	
		 * Template
		 * Input search
		 * Checkbox
		 * Tabla
		 * @type {[type]}
		 */
		const template = 
			<section id="contenedorApp">
				<HeaderSearch 
					filterText 			    ={this.state.filterText} 
					cambioFilterTextChange 	={this.filterTextChange} 
				/>
				<SubHeaderSearch 
					stock = {this.state.stock}
					cambioCheckCheckboxChange ={this.checkStock}
				/>
				<TablaSearch  
          			filterText 	= {this.state.filterText}
          			stock 		= {this.state.stock} 
          		/>
			</section>
		;

		return(template);
	}
}

export default FiltroBusqueda;