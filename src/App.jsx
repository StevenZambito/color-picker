import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
    alpha: 1,
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

  render() {
    return (
      <main>
        <h1>Color Picker</h1>

        <div className="first-section">
          <section className="color-box">
            <div></div>
            <button>Random</button>
          </section>

          <section className="color-ranges">
            <div>
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.hue}
                onChange={this.handleChangeHue}
              ></input>
              <input type="text"></input>
            </div>

            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
                onChange={this.handleChangeSaturation}
              ></input>
              <input type="text"></input>
            </div>

            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.lightness}
                onChange={this.handleChangeLightness}
              ></input>
              <input type="text"></input>
            </div>

            <div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.alpha}
                onChange={this.handleChangeAlpha}
              ></input>
              <input type="text"></input>
            </div>
          </section>
        </div>

        <section className="color-info">
          <div>
            <p>Hex</p>
            <p>RGBA</p>
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
