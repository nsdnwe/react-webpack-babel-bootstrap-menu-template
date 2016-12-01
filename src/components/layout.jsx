import React from 'react'
import Menu from './menu/menu'
import Footer from './footer'
import Workspace from './workspace'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Workspace />
          <Footer />
        </div>
      </div>
    )
  }
}
