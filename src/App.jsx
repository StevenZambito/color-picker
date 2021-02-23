import React, { Component } from 'react'
import { Range } from './components/Range'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
    alpha: Math.round((Math.random() * (1 - 0) + 0) * 100) / 100,
  }

  /**
   * @param {{ target: { value: any; }; }} event
   */
  handleChangeHue = event => {
    this.setState({ hue: event.target.value })
  }
  /**
   * @param {{ target: { value: any; }; }} event
   */
  handleChangeSaturation = event => {
    this.setState({ saturation: event.target.value })
  }
  /**
   * @param {{ target: { value: any; }; }} event
   */
  handleChangeLightness = event => {
    this.setState({ lightness: event.target.value })
  }
  /**
   * @param {{ target: { value: any; }; }} event
   */
  handleChangeAlpha = event => {
    this.setState({ alpha: event.target.value })
  }

  /**
   * @param {any} event
   */
  handleRandomColor = event => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
      alpha: Math.round((Math.random() * (1 - 0) + 0) * 100) / 100,
    })
  }

  render() {
    return (
      <main>
        <h1
          style={{
            textShadow: `0px 5px hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`,
          }}
        >
          Color Picker
        </h1>

        <div className="first-section">
          <section className="color-box">
            <div
              style={{
                backgroundColor: `hsla(
                  ${this.state.hue},
                  ${this.state.saturation}%,
                  ${this.state.lightness}%,
                  ${this.state.alpha}
                )`,
              }}
            ></div>
            <button onClick={this.handleRandomColor}>Random</button>
          </section>

          <section className="color-ranges">
            <Range
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.handleChangeHue}
            />

            <Range
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.handleChangeSaturation}
            />

            <Range
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.handleChangeLightness}
            />

            <Range
              min="0"
              max="1"
              step="0.01"
              value={this.state.alpha}
              onChange={this.handleChangeAlpha}
            />
          </section>
        </div>

        <section className="color-info">
          <div>
            <p>
              hsla({this.state.hue}, {this.state.saturation}%,{' '}
              {this.state.lightness}%, {this.state.alpha})
            </p>
          </div>
        </section>
      </main>
    )
  }
}
