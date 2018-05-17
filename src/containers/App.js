import React, { Component } from 'react';
import classes from './App.css';

import Toolbar from '../components/Toolbar/Toolbar';
import Board from '../components/Board/Board';

class App extends Component {

  state = {
    activeBoardIndex: 0,
    boards: [
      {
        name: "first board",
        columns: [
          {
            name: "to do",
          },
          {
            name: "in progress",
          },
          {
            name: "done",
          }
        ]
      }
    ]
  }

  newColumnHandler = () => {
    const boards = this.state.boards;
    boards[this.state.activeBoardIndex].columns.push({ name: "New Column" });
    console.log(boards);
    this.setState({ boards: boards });
  };

  render() {
    return (
      <div className={classes.App}>
        <Toolbar newColumnClicked={this.newColumnHandler} />
        <Board board={this.state.boards[0]} />
      </div>
    );
  }
}

export default App;
