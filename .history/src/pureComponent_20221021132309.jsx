import React, { PureComponent } from 'react'

export class pureComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>pure Component {this.props.}</h1>
      </div>
    )
  }
}

export default pureComponent
