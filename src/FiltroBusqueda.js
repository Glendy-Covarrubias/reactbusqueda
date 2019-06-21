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
			filterText: ''
		}
		this.filterTextChange = this.filterTextChange.bind(this);
	}

	filterTextChange(filterText){
		this.setState({
			filterText: filterText
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
				<SubHeaderSearch />
				<TablaSearch  
          			filterText 	={this.state.filterText} 
          		/>
			</section>
		;

		return(template);
	}
}

export default FiltroBusqueda;