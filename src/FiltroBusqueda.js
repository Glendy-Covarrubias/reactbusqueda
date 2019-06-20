import React from 'react';
import HeaderSearch from './HeaderSearch';
import SubHeaderSearch from './SubHeaderSearch';
import TablaSearch from './TablaSearch';

class FiltroBusqueda extends React.Component {
	constructor(props){
		super(props);
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
		const template = 
			<section id="contenedorApp">
				<HeaderSearch 
					filterText 			    ={this.state.filterText} 
					cambioFilterTextChange 	={this.filterTextChange} 
				/>
				<SubHeaderSearch />
				<TablaSearch products={this.props.products} />
			</section>
		;

		return(template);
	}
}

export default FiltroBusqueda;