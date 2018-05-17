import React, { Component } from 'react';
import classes from './App.css';

import Toolbar from '../components/Toolbar/Toolbar';
import Board from '../components/Board/Board';

class App extends Component {

  state = {
    idIterator: 1000,
    activeBoardIndex: 0,
    boards: [
      {
        id: 1,
        name: "first board",
        columns: [
          {
            id: 2,
            name: "to do",
          },
          {
            id: 3,
            name: "in progress",
          },
          {
            id: 4,
            name: "done",
          }
        ]
      }
    ]
  }

  newColumnHandler = () => {
    const newId = this.state.idIterator + 1;
    const boards = this.state.boards.slice();
    boards[this.state.activeBoardIndex].columns.push({ id: newId, name: "New Column" });
    console.log(boards);
    this.setState({ boards: boards, idIterator: newId });
  };

  render() {
    return (
      <div className={classes.App}>
        <Toolbar
          newColumnClicked={this.newColumnHandler} />
        <Board
          board={this.state.boards[this.state.activeBoardIndex]}
          columns={this.state.boards[this.state.activeBoardIndex].columns} />
      </div>
    );
  }
}

export default App;
