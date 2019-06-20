import React from 'react';
/** Bostrap */
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
/** Icon fonts */
import { FaSearch } from 'react-icons/fa';

class HeaderSearch extends React.Component {
	constructor(props){
		super(props);
		this.filterTextChange = this.filterTextChange.bind(this);
	}

	filterTextChange(e){
		this.props.cambioFilterTextChange(e.target.value);
	}

	render(){
		const template = 
			<InputGroup className="mb-3">
		    	<FormControl
		      		placeholder 	="Buscar producto ..."
		      		aria-label 		="Recipient's username"
		      		aria-describedby="basic-addon2"
		      		name 			="input-busqueda-producto"
		      		value 			={this.props.filterText}
		      		onChange 		={this.filterTextChange}
		    	/>
		    		<InputGroup.Append>
		      			<InputGroup.Text id="basic-addon2"><FaSearch size="1.5em"/></InputGroup.Text>
		    		</InputGroup.Append>
		  	</InputGroup>
  		;

		return(template);
	}
}

export default HeaderSearch;