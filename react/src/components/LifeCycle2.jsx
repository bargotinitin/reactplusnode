import React from 'react';

class LifeCycle2 extends React.Component {
  constructor(props) {
    console.log("In constructor")
    super(props);
    this.state = {favoritecolor: "red"};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("In getDerivedStateFromProps")
    return {favoritecolor: props.favcol };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    console.log("In componentDidMount")
    this.setState({favoritecolor: "blue"})
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("In -- getSnapshotBeforeUpdate --")
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }

  componentDidUpdate() {
    console.log("In -- componentDidUpdate --")
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }

  changeColor = () => {
    console.log("In ** Change Color **")
    this.setState({favoritecolor: "pink"});
  }

  render() {
    console.log("In render")
    return (
      <>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

export default LifeCycle2;
