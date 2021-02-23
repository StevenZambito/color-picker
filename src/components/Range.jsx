import { Component } from 'react'

export class Range extends Component {
  render() {
    return (
      <div>
        <input
          type="range"
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          step={this.props.step}
          onChange={this.props.onChange}
        ></input>
        <p>{this.props.value}</p>
      </div>
    )
  }
}
