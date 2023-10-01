import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
                <p className={"border-top pt-3 text-center"}>
                React.ts &copy; {new Date().getFullYear()}
                </p>
        )
    }
}

export default Footer
