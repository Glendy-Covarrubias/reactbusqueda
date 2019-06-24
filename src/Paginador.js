import React from 'react';
/** Bostrap  */
import Pagination from 'react-bootstrap/Pagination';

class Paginador extends React.Component {
	constructor(props){
		super(props);
		// console.log(props);
		this.pagChange = this.pagChange.bind(this);
	}

	pagChange(e){
		// console.log(e.target.text)
		this.props.cambioPagChange(e.target.text);
	}

	render(){
		const pag 	= this.props.pagtotal;
		// let active 	= 1;
		let items 	= [];
		for (let number = 1; number <= pag; number++) {
		  items.push(
		    <Pagination.Item 
		    	key 		= {number} 
		    	// active 		= {number === active} 
		    	value 		= {number}
		    	onClick     = {this.pagChange}
		    >
		      {number}
		    </Pagination.Item>,
		  );
		}

		// console.log(this.pagChange);

		const paginationBasic = (
		  <section id="content_paginador" className="d-flex justify-content-center">
		    <Pagination>{items}</Pagination>
		  </section>
		);

		return(paginationBasic);
	}
}

export default Paginador;