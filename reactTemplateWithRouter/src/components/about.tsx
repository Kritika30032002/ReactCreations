import React from 'react';
import {pageHeader} from "./common/pageHeader";

class about extends React.Component {
    render() {
        return (
            <div className="container">
        {pageHeader({title: "About react.ts"})}
        <div className="row">
          <div className="col-12">
            <p>Quick, time is running out and you will be sorry</p>
          </div>
        </div>
            </div>
        )
    }
}

export default about;
