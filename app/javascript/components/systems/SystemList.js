import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SystemAdd from './SystemAdd'
import SystemDelete from './SystemDelete'
import SystemEdit from './SystemEdit'
import $ from 'jquery';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class SystemList extends Component {
  constructor(props) {
    super(props);
    this.state = { systems: [], showAddPopup: false, showEditPopup: false, showDeletePopup: false, systemId: '' };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('api/systems')
      .then(response => response.json())
      .then(json => this.setState({systems: json}))
      .catch(error => console.log(error))
  }

  handleSearch(e) {
    if(e.keyCode == 13){
      let searchData = { search: e.target.value };
      fetch('api/systems/search', {
  			method: 'POST',
  			body: JSON.stringify(searchData),
  			headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }})
  			.then(response => response.json())
  			.then(json => this.setState({systems: json}))
  			.catch(error => console.log(error))
    }
  }

  toggleAddPopup() {
    this.setState({
      showAddPopup: !this.state.showAddPopup
    });

    if(!this.state.showAddPopup){
      store.addNotification({
        title: "Please register your system !",
        message: "homeowner",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  }

  toggleEditPopup(e) {
    this.setState({
      showEditPopup: !this.state.showEditPopup
    });

    if(!(typeof e == 'undefined')) {
      let systemID = $(e.target).attr('value');
      this.setState({systemId: systemID})
    }
  }

  toggleDeletePopup(e) {
    this.setState({
      showDeletePopup: !this.state.showDeletePopup
    });

    if(!(typeof e == 'undefined')) {
      let systemID = $(e.target).attr('value');
      this.setState({systemId: systemID})
    }
  }

  renderTableData() {
    return this.state.systems.map((system) => {
      return(
        <tr>
          <td>{ system.name }</td>
          <td>{ system.city }</td>
          <td>{ system.state }</td>
          <td>{ system.country }</td>
          <td>{ system.owner }</td>
          <td>{ system.pcus }</td>
          <td>{ system.acbs }</td>
          <td>{ system.encharges }</td>
          <td>{ system.enpowers }</td>
          <td>{ system.connection }</td>
          <td>{ system.status }</td>
          <td>{ system.stage }</td>
          <td><i className="fa fa-edit btn-info" onClick={this.toggleEditPopup.bind(this)} value={system.id}></i></td>
          <td><i className="fa fa-trash btn-danger" onClick={this.toggleDeletePopup.bind(this)} value={system.id}></i></td>
      </tr>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-2">
            <div className="col-lg-16">
                <div className="card">
                    <div className="card-header" id="card-header-color">
                        System Registry
                        <input type="text" onKeyDown={this.handleSearch} id='system-search-input' />
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Country</th>
                                    <th>Owner</th>
                                    <th>Pcus</th>
                                    <th>Acbs</th>
                                    <th>Encharges</th>
                                    <th>Enpowers</th>
                                    <th>Connection</th>
                                    <th>Status</th>
                                    <th>Stage</th>
                                    <th>Edit/Save</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                        <button className="btn btn-primary" onClick={this.toggleAddPopup.bind(this)}> Add </button>
                        { this.state.showAddPopup ? <SystemAdd text='Click "Close Button" to hide popup' closePopup={this.toggleAddPopup.bind(this)} /> : null }
                        { this.state.showEditPopup ? <SystemEdit text='Click "Close Button" to hide popup' closePopup={this.toggleEditPopup.bind(this)} systemId={this.state.systemId}/> : null }
                        { this.state.showDeletePopup ? <SystemDelete text='Click "Close Button" to hide popup' closePopup={this.toggleDeletePopup.bind(this)} systemId={this.state.systemId}/> : null }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  }

}

export default SystemList;
