import styled from 'styled-components'

const SpinnerContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
`
const Spinner = styled.svg`
  animation: rotate 1s linear infinite;
  margin: 40px;
  width: 50px;
  height: 50px;
  z-index: 10;
  & .path {
    stroke: #89c7b5;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export { SpinnerContainer, Spinner }
