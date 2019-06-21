import React from 'react';
/** Bostrap */
import Form from 'react-bootstrap/Form';

class SubHeaderSearch extends React.Component {
	constructor(props){
		super(props);
		this.stockChange = this.stockChange.bind(this);
	}

	/* Evento para obtener el estado del checkbox */
	stockChange(e){
		this.props.cambioCheckCheckboxChange(e.target.value);
	}

	render(){
		const template = 
			<Form id="contendCheck">
				<Form.Group controlId="formBasicChecbox">
					<Form.Check 
						type  		= "checkbox" 
						label 		= "Mostrar solo productos en stock" 
						value 	    = {this.props.stock}
						onChange    = {this.stockChange}
					/>
			  	</Form.Group>
			</Form>
		;

		return(template);
	}
}

export default SubHeaderSearch;