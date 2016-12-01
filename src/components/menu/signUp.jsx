import React from 'react'

export default class SignUp extends React.Component {
    implement() {
        console.log('Sign up not implemented')
    }
    render() {
        return (
            <a href="#" onClick={this.implement.bind(this)}><span className="glyphicon glyphicon-user"></span> Sign up</a>
        )
    }
}