import React, {Component} from 'react';
import Input from "./input";
import Joi from "joi-browser";

/*
    NEED TO BE REWRITTEN IN TYPESCRIPT
*/

export class Form extends Component {

    // Validate user inputs (client-side)
    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, {
            abortEarly: false
        });

        if(!error){
            return null;
        }

        const errors = {};
        for(const item of error.details){
            errors[item.path[0]] = item.message;
        }

        return errors;
    };

    // handeling inputs and calling calidation
    handleChange = ({target : input}) => {
        const data = {...this.state.data}; // ... in this use is for making sure we're not losing data
        data[input.name] = input.value;
        
        this.setState({ data });
        this.validate();
    };

    renderInput(name, label, type = "text"){
        const { data, errors } = this.state;
        return ( <Input 
            type={type} 
            label={label} 
            name={name} 
            onChange={this.handleChange} 
            value={data[name]} 
            error={errors[name]} 
            />); // creates a new input area with the giving data
    };

    // submit type more 
    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });

        if(errors){
            return
        }

        this.doSubmit();
    };
};

export default Form;