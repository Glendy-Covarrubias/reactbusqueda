import React from 'react';
/** Bostrap */
import Form from 'react-bootstrap/Form';

class SubHeaderSearch extends React.Component {
	render(){
		const template = 
			<Form id="contendCheck">
				<Form.Group controlId="formBasicChecbox">
					<Form.Check type="checkbox" label="Mostrar solo productos en stock" />
			  	</Form.Group>
			</Form>
		;
		
		return(template);
	}
}

export default SubHeaderSearch;