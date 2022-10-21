import React, { Component } from 'react'

export class RegularComponent extends Component {
  render() {
    return (
      <div>
        <h1>RegularComponent {this.props.nam}</h1>
      </div>
    )
  }
}

export default RegularComponent
