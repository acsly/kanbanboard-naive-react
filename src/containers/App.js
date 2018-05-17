import React, { Component } from 'react';
import classes from './App.css';

import Toolbar from '../components/Toolbar/Toolbar';
import Board from '../components/Board/Board';

class App extends Component {

  /// Application State
  state = {
    idIterator: 1012,
    activeBoardIndex: 0,
    boards: [
      {
        id: 1000,
        name: "first board",
        columns: [
          {
            id: 1001,
            name: "to do",
            cards: [
              {
                id: 1002,
                title: "card 1",
                description: "card 1 description",
                labels: []
              },
              {
                id: 1003,
                title: "card 2",
                description: "card 2 description",
                labels: []
              },
              {
                id: 1004,
                title: "card 3",
                description: "card 3 description",
                labels: []
              }
            ]
          },
          {
            id: 1005,
            name: "in progress",
            cards: [
              {
                id: 1006,
                title: "card 4",
                description: "card 4 description"
              },
              {
                id: 1007,
                title: "card 5",
                description: "card 5 description"
              },
              {
                id: 1008,
                title: "card 6",
                description: "card 6 description"
              }
            ]
          },
          {
            id: 1009,
            name: "done",
            cards: [
              {
                id: 1010,
                title: "card 7",
                description: "card 7 description"
              },
              {
                id: 1011,
                title: "card 8",
                description: "card 8 description"
              },
              {
                id: 1012,
                title: "card 9",
                description: "card 9 description"
              }
            ]
          }
        ]
      }
    ]
  }


  /// Event Handlers
  newColumnHandler = () => {
    const newId = this.getNewId();
    const boards = this.state.boards.slice();
    boards[this.state.activeBoardIndex].columns.push(this.createNewColumnStructure(newId));
    this.setState({ boards: boards, idIterator: newId });
  };

  newCardHandler = (index) => {
    console.log(index);
    const newId = this.getNewId();
    const boards = this.state.boards.slice();
    boards[this.state.activeBoardIndex].columns[index].cards.push(this.createNewCardStructure(newId));
    this.setState({ boards: boards, idIterator: newId });
    
  };

  /// Hepler Methods
  createNewColumnStructure = (id, name) => {
    const newColumn = {
      id: id,
      name: "New Column",
      cards: []
    };
    return newColumn;
  };

  createNewCardStructure = (id) => {
    const newCard = {
      id: id,
      title: "title",
      description: "description",
      labels: []
    };
    return newCard;
  };

  getNewId = () => (this.state.idIterator + 1);

  getActiveBoard = () => (this.state.boards[this.state.activeBoardIndex]);


  /// React Render
  render() {
    return (
      <div className={classes.App}>
        <Toolbar
          newColumnClicked={this.newColumnHandler} />
        <Board
          board={this.state.boards[this.state.activeBoardIndex]}
          columns={this.state.boards[this.state.activeBoardIndex].columns} 
          newCardClicked={this.newCardHandler}/>
      </div>
    );
  }
}

export default App;
