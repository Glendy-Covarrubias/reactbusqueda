import React from 'react';
/** Bostrap  */
import Pagination from 'react-bootstrap/Pagination';

class Paginador extends React.Component {
	constructor(props){
		super(props);
		this.pagChange = this.pagChange.bind(this);
	}

	pagChange(e){
		this.props.cambioPagChange(parseInt(e.target.text));
	}

	render(){
		const pag 		= this.props.pagtotal;
		const activePag = this.props.pag;
		let items 	 	= [];
		for (let number = 1; number <= pag; number++) {
		  items.push(
		    <Pagination.Item 
		    	key 		= {number} 
		    	active 		= {number === activePag} 
		    	value 		= {number}
		    	onClick     = {this.pagChange}
		    >
		      {number}
		    </Pagination.Item>,
		  );
		}

		const paginationBasic = (
		  <section id="content_paginador" className="d-flex justify-content-center">
		    <Pagination>{items}</Pagination>
		  </section>
		);

		return(paginationBasic);
	}
}

export default Paginador;