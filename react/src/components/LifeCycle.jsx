import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    console.log("in constructor")
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    console.log("in del Header")
    this.setState({show: false});
  }
  render() {
    console.log("in render")
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    console.log("in render - Child")
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default LifeCycle;
