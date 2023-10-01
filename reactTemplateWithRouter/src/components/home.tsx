import React, { Component } from 'react';
// import logo from '../logo.svg';
import { pageHeader } from './common/pageHeader';

export class home extends Component {
    render() {
        return (
          <div className="container">
            {pageHeader({title: "react.ts | Home Screen"})}
            <div className="row">
              <div className="col-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere!!</p>
              </div>
            </div>
          </div>
        )
    }
}

export default home;
