import React, { Component } from "react";
import { Button } from "rmwc/Button";

export default class App extends Component {

  // Arrow function
  foo() {
    console.log("arrow functions!");
  }

  render() {
    return (
      <div style={ {} }>
        <button className="foo-button mdc-button">Button</button>
        <Button
          raised
          onClick={() => this.foo()}
          className="foo-button"
        >
          BBBBBUTTON
        </Button>
      </div>
    )
  }
}