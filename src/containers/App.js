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
    idIterator: 1010,
    activeBoardIndex: 0,
    displayModel: false,
    displayCardform: false,
    displayColumnform: false,
    cardToEdit: null,
    boards: [
      {
        id: 1000,
        name: "My Board",
        columns: [
          {
            id: 1001,
            name: "To Do",
            cards: [
              {
                id: 1002,
                title: "card 1",
                description: "card 1 description",
                labels: [
                  {
                    id: 1007,
                    name: "label1",
                    color: "#FFF"
                  },
                  {
                    id: 1010,
                    name: "compulsory",
                    color: "#FFF"
                  }
                ]
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
                description: "card 4 description",
                labels: [
                  {
                    id: 1008,
                    name: "label2",
                    color: "#FFF"
                  }
                ]
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
                description: "card 7 description",
                labels: [
                  {
                    id: 1009,
                    name: "label3",
                    color: "#FFF"
                  }
                ]
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
    this.setState({ cardToEdit: { card: null, columnIndex: index } });
    this.modelDisplayHandler("Card");
  };

  saveCardHandler = (id, title, description, columnId, labels) => {
    //if the card is being edited
    if (id !== null) {
      const boards = this.state.boards.slice();
      const index = this.state.cardToEdit.columnIndex;
      let cardIndex = boards[this.state.activeBoardIndex].columns[index].cards.findIndex((c) => {
        return c.id === id;
      });
      //Set new values for the card edited
      boards[this.state.activeBoardIndex].columns[index].cards[cardIndex].title = title;
      boards[this.state.activeBoardIndex].columns[index].cards[cardIndex].description = description;
      boards[this.state.activeBoardIndex].columns[index].cards[cardIndex].labels = labels;

      this.setState({ boards: boards, displayModel: false, displayCardform: false, cardToEdit: null });
    }
    // if a new card is being created
    else {
      // if new card button on a column is pressed
      const cardToEdit = Object.assign({}, this.state.cardToEdit);
      if (cardToEdit.columnIndex != null) {
        const newId = this.getNewId();
        const boards = this.state.boards.slice();
        const index = this.state.cardToEdit.columnIndex;
        boards[this.state.activeBoardIndex].columns[index].cards.push(this.createNewCardStructure(newId, title, description));
        this.setState({ boards: boards, idIterator: newId, displayModel: false, displayCardform: false, cardToEdit: null });
      }
      // if the new card button on the toolbar is pressed
      else {
        const newId = this.getNewId();
        const boards = this.state.boards.slice();
        const columns = boards[this.state.activeBoardIndex].columns;
        const index = columns.findIndex(column => {
          return column.id === Number(columnId);
        });
        boards[this.state.activeBoardIndex].columns[index].cards.push(this.createNewCardStructure(newId, title, description));
        this.setState({ boards: boards, idIterator: newId, displayModel: false, displayCardform: false, cardToEdit: null });
      }

    }

  };

  editCardHandler = (index, id) => {
    const boards = this.state.boards.slice();
    let card = boards[this.state.activeBoardIndex].columns[index].cards.filter((c) => {
      return c.id === id;
    });
    card = card[0];
    this.setState({ cardToEdit: { card: card, columnIndex: index } });
    this.modelDisplayHandler("Card");
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

  /// CARD RELATED HANDLER METHODS
  /**
   * 
   * 
   * 
   * 
   */

  addNewLabelHandler = (name, color) => {
    const newId = this.getNewId();
    const card = Object.assign({}, this.state.cardToEdit.card);
    const index = this.state.cardToEdit.columnIndex;
    card.labels.push(this.createNewLabelStructure(newId, name, color));
    this.setState({ cardToEdit: { card: card, columnIndex: index }, idIterator: newId });
  };

  removeLabelHandler = (columnIndex, cardIndex, id) => {
    if (this.state.cardToEdit !== null) {
      const card = Object.assign({}, this.state.cardToEdit.card);
      const index = this.state.cardToEdit.columnIndex;
      const labels = card.labels.filter(l => {
        return l.id !== columnIndex; // Somehow, when called from cardform, id returns in the columnIndex variable, what is compared here is actually the id of the label aliased by columnIndex!!
      });
      card.labels = labels;
      this.setState({ cardToEdit: { card: card, columnIndex: index } });
    } else if (columnIndex !== undefined || cardIndex !== undefined) {
      const boards = this.state.boards.slice();
      const labels = boards[this.state.activeBoardIndex].columns[columnIndex].cards[cardIndex].labels.filter(l => {
        return l.id !== id;
      });
      boards[this.state.activeBoardIndex].columns[columnIndex].cards[cardIndex].labels = labels;
      this.setState({ boards: boards });
    }


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

  createNewLabelStructure = (id, name, color) => {
    const label = {
      id: id,
      name: name ? name : "myLabel",
      color: color ? color : "#FFF"
    };
    return label;
  };

  getNewId = () => (this.state.idIterator + 1);

  getActiveBoard = () => (this.state.boards[this.state.activeBoardIndex]);

  modelDisplayHandler = (type) => {
    if (type === "Card") {
      this.setState({ displayModel: true, displayCardform: true });
    } else if (type === "Column") {
      this.setState({ displayModel: true, displayColumnform: true });
    } else if (type === "Cancel") {
      this.setState({ displayModel: false, displayCardform: false, displayColumnform: false, cardToEdit: null });
    }
  };


  /// React Render
  render() {
    return (
      <div className={classes.App}>
        <Backdrop display={this.state.displayModel} />
        <Toolbar
          boardName={this.state.boards[this.state.activeBoardIndex].name}
          newColumnGenericClicked={this.modelDisplayHandler}
          newCardGenericClicked={this.modelDisplayHandler}
          newCardDisabled={this.state.boards[this.state.activeBoardIndex].columns.length <= 0} />
        <Modal display={this.state.displayModel}>
          <Cardform
            display={this.state.displayCardform}
            columns={this.state.boards[this.state.activeBoardIndex].columns}
            cancelClicked={this.modelDisplayHandler}
            saveClicked={this.saveCardHandler}
            cardToEdit={this.state.cardToEdit}
            addLabelClicked={this.addNewLabelHandler}
            removeLabelClicked={this.removeLabelHandler} />
          <Columnform
            display={this.state.displayColumnform}
            cancelClicked={this.modelDisplayHandler}
            saveClicked={this.newColumnHandler} />
        </Modal>
        <Board
          board={this.state.boards[this.state.activeBoardIndex]}
          columns={this.state.boards[this.state.activeBoardIndex].columns}
          newCardClicked={this.newCardHandler}
          editCardClicked={this.editCardHandler}
          deleteCardClicked={this.deleteCardHandler}
          deleteColumnClicked={this.deleteColumnHandler}
          removeLabelClicked={this.removeLabelHandler} />
      </div>
    );
  }
}

export default App;
