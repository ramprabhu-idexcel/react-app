import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './style.css';

class SystemDelete extends Component {
 constructor(props) {
    super(props);
    this.state = { systemId: this.props.systemId };
    this.handleDeleteSystem = this.handleDeleteSystem.bind(this);
	}

	handleDeleteSystem() {
	fetch(`api/systems/${this.props.systemId}`, {
	      method: 'DELETE',
	      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }})
	        .then(() => {
	        	this.props.closePopup();
	        	window.location.reload();
        	})
	        .catch(error => console.log(error))
	}

	render() {
		return(
			<div className='delete-popup'>
		    <div className='delete-popup_inner'>
		        <div className="modal-dialog modal-confirm">
		            <div className="modal-content">
		                <div className="modal-header">
		                    <div className="icon-box">
		                        <i className="material-icons">&#xE5CD;</i>
		                    </div>
		                    <h4 className="modal-title">Are you sure?</h4>
		                </div>
		                <div className="modal-body">
		                    <p>Do you really want to delete these records? This process cannot be undone.</p>
		                </div>
		                <div className="modal-footer">
		                    <button type="button" className="btn btn-info" onClick={this.props.closePopup}>Cancel</button>
		                    <button type="button" className="btn btn-danger" onClick={this.handleDeleteSystem}>Delete</button>
		                </div>
		            </div>
		        </div>
		    </div>
			</div>
		)
	}
}

export default SystemDelete;
