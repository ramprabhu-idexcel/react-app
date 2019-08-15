import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';



class ProductList extends Component{
	constructor(props){
		super(props);
		this.state = { 
			products: [], 
			columns: [
				  {
				    dataField: 'id',
				    text: 'Product ID',
				    sort: true
				  },
				  {
				    dataField: 'name',
				    text: 'Product Name',
				    sort: true
				  },
				  {
				    dataField: 'price',
				    text: 'Product Price',
				    sort: true
				  }
				]  
		}
	}

	componentDidMount() {
		fetch('api/products.json')
			.then(response => response.json())
			.then(json => this.setState(json))
			.catch(error => console.log(error))
	}

	
	render() {
	    return (
	      <div className="container" style={{ marginTop: 50 }}>
	      	<h3>Products</h3>
	        <BootstrapTable 
	        striped
	        hover
	        keyField='id' 
	        data={ this.state.products } 
	        columns={ this.state.columns } 
			pagination={ paginationFactory() } 
			cellEdit={ cellEditFactory({ mode: 'click' }) }
	        selectRow={ { mode: 'checkbox' } } 
	        tabIndexCell />
	      </div>
	    );
  	}
}


export default ProductList;