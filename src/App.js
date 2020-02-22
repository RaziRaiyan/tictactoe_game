import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

    constructor() {
        super();
        this.state = {
            player_turn: "X",
            board: ["","","","","","","","",""],

        }
    }

    squareClicked(index){
        let player_turn = this.state.player_turn;
        let board = this.state.board;

        board[index] = player_turn;

        let ifWinner = player_turn;

        player_turn = (player_turn === "X") ? "O": "X";
        console.log("player turn",player_turn);
        this.setState({
            player_turn: player_turn,
            board: board
        });


        let winning_combos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,3,6],
            [0,4,8],
            [2,4,6]
        ];

        for(let i=0;i<winning_combos.length; i++){
            let winning_row = winning_combos[i];
            let p1 = winning_row[0];
            let p2 = winning_row[1];
            let p3 = winning_row[2];

            if(board[p1] !== "" && board[p1] === board[p2] && board[p2] === board[p3] && board[p3] === board[p1]){
                alert(`winner!! player ${ifWinner} has won the game!`);
                this.setState({
                    player_turn: "X",
                    board: ["","","","","","","","",""],
                });
            }
        }
        console.log(index);
    }

  render() {
    return (
        <div className="App">
          <h1>Tic Tac Toe</h1>
          <div className="board">
              {this.state.board.map((square,index) => {
                  return (<div onClick={() => this.squareClicked(index)} className="square"><h3 className="symbol">{square}</h3></div> )
              })}
          </div>
        </div>
    )
  }
}

export default App;
