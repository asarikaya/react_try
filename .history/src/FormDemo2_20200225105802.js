import React, { Component } from 'react'
import alertify from "alertifyjs";
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'

export default class FormDemo2 extends Component {

    state = {email:"",password:"",city:"",description:""}
    handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value});
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        alertify.success(this.state.email+" added to db!", 2);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
