import React, { Component } from 'react';
import './style.css';
import Input from "../systems-input/Input";
import Select from "../systems-input/Select";
import Button from "../systems-input/Button";
import $ from 'jquery';
import { Link } from 'react-router-dom';


class SystemEdit extends Component {
	constructor(props) {
	    
	    super(props);

	    this.state = {

	      newSystem: {
	        name: "",
	        city: "",
	        state: "",
	        country: "",
	       	owner: "",
	       	pcus: "",
	       	acbs: "",
	       	encharges: "",
	       	enpowers: "",
	       	connection: "",
	       	status: "",
	       	stage: "",
	      },

	      countryOptions: ["India", "America", "Australia", "Newzland", "Japan", "China"],
	      stageOptions: ['start', 'middle', 'medium', 'end'],
	      systemId: this.props.systemId

	    };

	    
	    this.handleFormSubmit = this.handleFormSubmit.bind(this);
	    this.handleClearForm = this.handleClearForm.bind(this);
	    this.handleInput = this.handleInput.bind(this);	
	  }


	componentDidMount() {
	    fetch(`api/systems/${this.state.systemId}`)
	        .then(response => response.json())
	        .then(data => this.setState({newSystem: data}))
	        .catch(error => console.log(error));
  	}  


	handleFormSubmit(e) {
		e.preventDefault();
		fetch(`api/systems/${this.state.systemId}`, {
	      method: 'PATCH',
	      body: JSON.stringify(this.state.newSystem),
	      headers: { 'Content-Type' : 'application/json', 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }})
	        .then(response => response.json())
	        .then(data => {
	        	this.props.closePopup();
		        window.location.reload();
	        })
	        .catch(error => console.log(error))        
   }
  

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newSystem: {
        name: "",
        city: "",
        state: "",
        country: "",
       	owner: "",
       	pcus: "",
       	acbs: "",
       	encharges: "",
       	enpowers: "",
       	connection: "",
       	status: "",
       	stage: ""
      }
    });
  }


  handleCity(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newSystem: {
          ...prevState.newSystem,
          city: value
        }
      }),
      () => console.log(this.state.newSystem)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newSystem: {
          ...prevState.newSystem,
          [name]: value
        }
      }),
      () => console.log(this.state.newSystem)
    );
  }
 

	  render() {
	    return (
	      <div className='popup'>
	        <div className='popup_inner'>
	        	<form className="container-fluid" onSubmit={this.handleFormSubmit}>
	        		<br/>
			        <Input
			          inputType={"text"}
			          title={"System Name"}
			          name={"name"}
			          value={this.state.newSystem.name}
			          placeholder={"system name"}
			          handleChange={this.handleInput}
			        />{" "}
			        {/* System Name */}
			        <Input
			          inputType={"text"}
			          name={"city"}
			          title={"City"}
			          value={this.state.newSystem.city}
			          placeholder={"city"}
			          handleChange={this.handleInput}
			        />{" "}
			        {/* City */}
			        <Input
			          inputType={"text"}
			          name={"state"}
			          title={"State"}
			          value={this.state.newSystem.state}
			          placeholder={"state"}
			          handleChange={this.handleInput}
			        />{" "}
			        {/* State */}	
			        <Select
			          title={"Country"}
			          name={"country"}
			          options={this.state.countryOptions}
			          value={this.state.newSystem.country}
			          placeholder={"country"}
			          handleChange={this.handleInput}
			        />{" "}
					{/* Country */}
					<Input
			          inputType={"text"}
			          name={"owner"}
			          title={"Owner"}
			          value={this.state.newSystem.owner}
			          placeholder={"owner"}
			          handleChange={this.handleInput}
			        />{" "}
			        {/* Owner */}	

			        <Input
			          inputType={"number"}
			          name={"pcus"}
			          title={"Pcu's"}
			          value={this.state.newSystem.pcus}
			          placeholder={"pcus"}
			          handleChange={this.handleInput}
			        />{" "}
			   		 {/* PCUS */}	

			   		  <Input
			          inputType={"number"}
			          name={"acbs"}
			          title={"ACB's"}
			          value={this.state.newSystem.acbs}
			          placeholder={"acbs"}
			          handleChange={this.handleInput}
			        />{" "}
			   		 {/* ACB */}	


 					<Input
			          inputType={"number"}
			          name={"encharges"}
			          title={"Encharges"}
			          value={this.state.newSystem.encharges}
			          placeholder={"encharges"}
			          handleChange={this.handleInput}
			        />{" "}
			   		 {/* Encharges */}	


			   		 <Input
			          inputType={"number"}
			          name={"enpowers"}
			          title={"Enpowers"}
			          value={this.state.newSystem.enpowers}
			          placeholder={"enpowers"}
			          handleChange={this.handleInput}
			        />{" "}
			   		 {/* Enpowers */}	


			   		 <Input
			          inputType={"text"}
			          name={"connection"}
			          title={"Connection"}
			          value={this.state.newSystem.connection}
			          placeholder={"connection"}
			          handleChange={this.handleInput}
			        />{" "}
			        {/* Connection */}	


			   		 <Input
			          inputType={"text"}
			          name={"status"}
			          title={"Status"}
			          value={this.state.newSystem.status}
			          placeholder={"status"}
			          handleChange={this.handleInput}
			        />{" "}
			        {/* status */}	

			        <Select
			          title={"Stage"}
			          name={"stage"}
			          options={this.state.stageOptions}
			          value={this.state.newSystem.stage}
			          placeholder={"stage"}
			          handleChange={this.handleInput}
			        />{" "}
			        {/* stage */}		
			        
			       
			        {/* About you */}
			        <Button
			          action={this.handleFormSubmit}
			          type={"primary"}
			          title={"Submit"}
			          style={buttonStyle}
			        />{" "}
			        {/*Submit */}
			        <Button
			          action={this.handleClearForm}
			          type={"secondary"}
			          title={"Clear"}
			          style={buttonStyle}
			        />{" "}
			        {/* Clear the form */}
			        <Button
			          action={this.props.closePopup}
			          type={"secondary"}
			          title={"Close"}
			          style={buttonStyle}
			        />{" "}
		      </form>	

	        </div>
	      </div>
    	);
  	}

}


const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default SystemEdit;

