import React, { Component } from "react";
import "./App.css";

import equals from "react-fast-compare";

class GreatGrandChild extends Component {
  shouldComponentUpdate(prevProps) {
    equals(this.props, prevProps);
    return true;
  }

  render() {
    return <div>GreatGrandChild</div>;
  }
}

class GrandChild extends Component {
  shouldComponentUpdate(prevProps) {
    equals(this.props, prevProps);
    return true;
  }

  render() {
    return (
      <div>
        GrandChild <GreatGrandChild />
      </div>
    );
  }
}

class Child extends Component {
  shouldComponentUpdate(prevProps) {
    equals(this.props, prevProps);
    return true;
  }

  render() {
    return (
      <div>
        Child
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  state = { count: 0 };

  handleClick = () => this.setState({ count: this.state.count + 1 });

  shouldComponentUpdate(prevProps) {
    equals(this.props, prevProps);
    return true;
  }

  render() {
    return (
      <div>
        App
        <button onClick={this.handleClick}>Clicks {this.state.count}</button>
        <Child>
          <GrandChild />
          <GrandChild />
        </Child>
      </div>
    );
  }
}

export default App;
