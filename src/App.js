import React, { Component } from 'react';
import './index.css';
import { MovingCanvas, CanvasContainer, Canvas, ActionButton } from './style';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      top : 0,
      left : 0
    }

    this.handleForwardButton = this.handleForwardButton.bind(this);
    this.handleBackwardButton = this.handleBackwardButton.bind(this);
    this.move = this.move.bind(this);
    this.getMoveAmount = this.getMoveAmount.bind(this);
  }

  move(positionToBeChanged, initialPos, finalPos) {
    var canvas = document.querySelector(".canvas");
    var pos = initialPos;
    var id = setInterval(move, 5);
    function move() {
      if (pos === finalPos) {
        clearInterval(id);
      } else {
        pos = initialPos < finalPos ? pos + 1 : pos - 1;
        if(positionToBeChanged === 'left') {
          canvas.style.left = pos + 'px';
        } else {
          canvas.style.top = pos + 'px';
        }
      }
    }
  }

  getMoveAmount() {
    var canvas = document.querySelector(".canvas");
    var canvasContainer = document.querySelector(".canvas-container");
    var canvasContainerWidth = window.getComputedStyle(canvasContainer).getPropertyValue('width').replace('px','');
    var canvasWidth = window.getComputedStyle(canvas).getPropertyValue('width').replace('px','');
    var moveAmount = canvasContainerWidth - canvasWidth;
    return moveAmount;
  }

  handleForwardButton() {
    const { top, left } = this.state;
    var moveAmount = this.getMoveAmount();

    if(top === 0 && left === 0) {
      this.move('left', 0, moveAmount);
      this.setState( (prevState) => ({
        left: prevState.left + moveAmount
      })
      );
   } else if(top === 0 && left === moveAmount) {
       this.move('top', 0, moveAmount);
       this.setState( (prevState) => ({
         top: prevState.top + moveAmount,
       })
       );
   } else if(top === moveAmount && left === moveAmount) {
     this.move('left', moveAmount, 0);
     this.setState( (prevState) => ({
       left: prevState.left - moveAmount
     })
     );
   } else if(top === moveAmount && left === 0) {
     this.move('top', moveAmount, 0);
     this.setState( (prevState) => ({
       top: prevState.top - moveAmount,
     })
   );
   }
  }

  handleBackwardButton() {
    const { top, left } = this.state;
    var moveAmount = this.getMoveAmount();
    if(top === 0 && left === 0) {
      this.move('top', 0, moveAmount);
      this.setState( (prevState) => ({
        top: prevState.top + moveAmount,
      })
      );
   } else if(top === moveAmount && left === 0) {
       this.move('left', 0, moveAmount);
       this.setState( (prevState) => ({
         left: prevState.left + moveAmount,
       })
       );
   } else if(top === moveAmount && left === moveAmount) {
     this.move('top', moveAmount, 0);
     this.setState( (prevState) => ({
       top: prevState.top - moveAmount,
     })
     );
   } else if(top === 0 && left === moveAmount) {
     this.move('left', moveAmount, 0);
     this.setState( (prevState) => ({
       left: prevState.left - moveAmount,
     })
    );
    }
  }

  render() {
    return (
      <MovingCanvas>
        <CanvasContainer className="canvas-container">
          <Canvas className="canvas"></Canvas>
        </CanvasContainer>

        <ActionButton>
          <button className="forwardButton" onClick={this.handleForwardButton}> Forward </button>
          <button className="backwardButton" onClick={this.handleBackwardButton}> Backward </button>
        </ActionButton>
      </MovingCanvas>
    );
  }
}

export default App;
