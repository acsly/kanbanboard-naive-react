import React, { Component } from 'react';
import classes from './App.css';

import Toolbar from '../components/Toolbar/Toolbar';
import Board from '../components/Board/Board';

class App extends Component {

  state = {
    boards: [
      {
        id: 1,
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

  render() {
    return (
      <div className={classes.App}>
        <Toolbar />
        <Board board={this.state.boards[0]}/>
      </div>
    );
  }
}

export default App;
