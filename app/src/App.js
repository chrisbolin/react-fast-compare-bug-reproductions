import React, { Component } from "react";
import "./App.css";

import equals from "react-fast-compare";

class GreatGrandChild extends Component {
  render() {
    return <div>GreatGrandChild</div>;
  }
}

class GrandChild extends Component {
  render() {
    return (
      <div>
        GrandChild <GreatGrandChild />
      </div>
    );
  }
}

class Child extends Component {
  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    console.log("react-fast-compare", equals(this.props, prevProps));
    console.log(this.props.children);
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
