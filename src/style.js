import styled from 'styled-components';
import { media } from './Media';

export const MovingCanvas = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  ${media.sm`flex-direction: column; align-items: center;`};
`;
export const CanvasContainer = styled.div`
  border: 1px solid green;
  width: 600px;
  height: 600px;
  ${media.md`width: 480px; height: 480px;`};
  ${media.sm`width: 360px; height: 360px;`};


`;

export const Canvas = styled.div`
  background: black;
  position: relative;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  ${media.md`width: 80px; height: 80px;`};
  ${media.sm`width: 60px; height: 60px;`};

`;

export const ActionButton = styled.div`
  display: flex;
  flex-direction: column;
  ${media.sm`width: 400px; margin-top: 20px;`};
  .forwardButton {
    background: #ceeace;
    cursor: pointer;
    margin: 0px 20px 20px;
    width: 150px;
    height: 50px;
    border-radius: 4px;
    font-size: 18px;
    ${media.sm`width: 90px; height: 30px; font-size: 14px;`};
  }

  .backwardButton {
    background: #cbe9f5;
    cursor: pointer;
    margin: 0px 20px 20px;
    width: 150px;
    height: 50px;
    border-radius: 4px;
    font-size: 18px;
    ${media.sm`width: 90px; height: 30px; font-size: 14px;`};
  }
`;
