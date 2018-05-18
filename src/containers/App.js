import React, { Component } from 'react';
import classes from './App.css';

import Toolbar from '../components/Toolbar/Toolbar';
import Board from '../components/Board/Board';
import Modal from '../components/generics/Modal/Modal';
import Cardform from '../components/generics/Cardform/Cardform';
import Columnform from '../components/generics/Columnform/Columnform';
import Backdrop from '../components/generics/Backdrop/Backdrop';

class App extends Component {

  /// Application State
  state = {
    idIterator: 1006,
    activeBoardIndex: 0,
    displayModel: false,
    displayCardform: false,
    displayColumnform: false,
    boards: [
      {
        id: 1000,
        name: "Default Board",
        columns: [
          {
            id: 1001,
            name: "To Do",
            cards: [
              {
                id: 1002,
                title: "card 1",
                description: "card 1 description",
                labels: []
              }
            ]
          },
          {
            id: 1003,
            name: "In Progress",
            cards: [
              {
                id: 1004,
                title: "card 4",
                description: "card 4 description"
              }
            ]
          },
          {
            id: 1005,
            name: "Done",
            cards: [
              {
                id: 1006,
                title: "card 7",
                description: "card 7 description"
              }
            ]
          }
        ]
      }
    ]
  }


  /// HANDLER METHODS
  /**
   * 
   * 
   * 
   * 
   */


  /// COLUMN RELATED HANDLER METHODS
  /**
   * 
   * 
   * 
   * 
   */
  newColumnHandler = (name) => {
    const newId = this.getNewId();
    const boards = this.state.boards.slice();
    boards[this.state.activeBoardIndex].columns.push(this.createNewColumnStructure(newId, name));
    this.setState({ boards: boards, idIterator: newId, displayModel: false, displayColumnform: false });
  };

  deleteColumnHandler = (id) => {
    const boards = this.state.boards.slice();
    let columns = boards[this.state.activeBoardIndex].columns;
    columns = columns.filter(c => {
      return c.id !== id;
    });
    boards[this.state.activeBoardIndex].columns = columns;
    this.setState({ boards: boards });
  };

  /// CARD RELATED HANDLER METHODS
  /**
   * 
   * 
   * 
   * 
   */

  newCardHandler = (index) => {
    const newId = this.getNewId();
    const boards = this.state.boards.slice();
    boards[this.state.activeBoardIndex].columns[index].cards.push(this.createNewCardStructure(newId, null, null));
    this.setState({ boards: boards, idIterator: newId });

  };


  saveCardHandler = (title, description, columnId) => {
    const newId = this.getNewId();
    columnId = Number(columnId);
    if (columnId === null) {
      return;
    }
    const boards = this.state.boards.slice();
    const columns = boards[this.state.activeBoardIndex].columns;
    const index = columns.findIndex(column => {
      return column.id === columnId;
    });
    boards[this.state.activeBoardIndex].columns[index].cards.push(this.createNewCardStructure(newId, title, description));
    this.setState({ boards: boards, idIterator: newId, displayModel: false, displayCardform: false });

  };

  deleteCardHandler = (index, id) => {
    const boards = this.state.boards.slice();
    let cards = boards[this.state.activeBoardIndex].columns[index].cards.slice();
    cards = cards.filter(c => {
      return c.id !== id;
    });
    boards[this.state.activeBoardIndex].columns[index].cards = cards;
    this.setState({ boards: boards });
  };

  /// HELPER METHODS
  /**
   * 
   * 
   * 
   * 
   * 
   * 
   */
  createNewColumnStructure = (id, name) => {
    const newColumn = {
      id: id,
      name: name ? name : "New Column",
      cards: []
    };
    return newColumn;
  };

  createNewCardStructure = (id, title, description) => {
    const newCard = {
      id: id,
      title: title ? title : "title",
      description: description ? description : "description",
      labels: []
    };
    return newCard;
  };

  getNewId = () => (this.state.idIterator + 1);

  getActiveBoard = () => (this.state.boards[this.state.activeBoardIndex]);

  modelDisplayHandler = (type) => {
    if (type === "Card") {
      this.setState({ displayModel: true, displayCardform: true });
    } else if (type === "Column") {
      this.setState({ displayModel: true, displayColumnform: true });
    } else if (type === "Cancel") {
      this.setState({ displayModel: false, displayCardform: false, displayColumnform: false });
    }
  };


  /// React Render
  render() {
    return (
      <div className={classes.App}>
        <Backdrop display={this.state.displayModel} />
        <Toolbar
          newColumnGenericClicked={this.modelDisplayHandler}
          newCardGenericClicked={this.modelDisplayHandler} />
        <Modal display={this.state.displayModel}>
          <Cardform
            display={this.state.displayCardform}
            columns={this.state.boards[this.state.activeBoardIndex].columns}
            cancelClicked={this.modelDisplayHandler}
            saveClicked={this.saveCardHandler} />
          <Columnform
            display={this.state.displayColumnform}
            cancelClicked={this.modelDisplayHandler}
            saveClicked={this.newColumnHandler} />
        </Modal>
        <Board
          board={this.state.boards[this.state.activeBoardIndex]}
          columns={this.state.boards[this.state.activeBoardIndex].columns}
          newCardClicked={this.newCardHandler}
          deleteCardClicked={this.deleteCardHandler}
          deleteColumnClicked={this.deleteColumnHandler} />
      </div>
    );
  }
}

export default App;
