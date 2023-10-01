import React from 'react';
import Form from "../components/common/form";
import { pageHeader } from './common/pageHeader';
// @ts-ignore
import Joi from "joi-browser";

export interface SignupProps {
    
}
 
export interface SignupState {
    
}
 
class Signup extends Form {
  state = {
    data: {
        email: 'shalomis',
        password: 'password',
    },
    errors: {},
  };

    schema = {
      email: Joi.string().max(25).min(2).required(),
      password: Joi.string().max(10).min(6),
    };

    doSubmit(){
      console.log(`submitted with ${this.state.data.email}`)
    }

    render() { 
        return ( <div className="container">
        {pageHeader({title: "Sign up with react.ts"})}
        <div className="row">
          <div className="col-12">
            <p>Quick, time is running out and you will be sorry</p>
          </div>
          <form onSubmit={this.handleSubmit}>
                {this.renderInput('email', 'Email')}
                {this.renderInput('password', 'Password', "password")}
                <button>Sumbit</button>
            </form>
        </div>
      </div> );
    }
}
 
export default Signup;
