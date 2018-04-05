import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Square = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${props => props.bgColor};
  margin: 0.5em;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #888;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.addBoxes(), 50);
  }

  addBoxes() {
    if (this.state.total >= 50) {
      clearInterval(this.timerID);
      this.timerID = setInterval(() => this.removeBoxes(), 50);
    }
    this.setState({
      total: this.state.total + 1
    });
  }
  removeBoxes() {
    if (this.state.total <= 0) {
      clearInterval(this.timerID);
      this.timerID = setInterval(() => this.addBoxes(), 50);
    }
    this.setState({
      total: this.state.total - 1
    });
  }

  render() {
    const total = this.state.total;
    const boxes = [];

    for (let i = 0; i < total; i++) {
      boxes.push(<Square bgColor={"#333"} key={Math.random()} />);
    }

    return <Wrapper>{boxes}</Wrapper>;
  }
}

export default App;
