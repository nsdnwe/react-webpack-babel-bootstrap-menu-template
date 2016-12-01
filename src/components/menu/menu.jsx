import React from 'react'
import SignUp from './signUp'

export default class Menu extends React.Component {
    implement() {
        console.log('Not implemented')
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav navbar-right">
                                <li><SignUp /></li>
                                <li><a href="#" onClick={this.implement.bind(this)}><span className="glyphicon glyphicon-user"></span> Account</a></li>
                                <li><a href="#" onClick={this.implement.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                <li><a href="#" onClick={this.implement.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}