import styled, { css, keyframes } from "styled-components"

export const Container = styled.div`
  width: clamp(350px, 80%, 1280px);
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
`

const animation = keyframes`
  from {
    transform: rotate(14deg), scale(1);
  }
  to {
    transform: rotate(360deg) scale(0);
  }
`

export const Box = styled.main`
  width: clamp(300px, 80%, 615px);
  height: max(40vh, 305px);
  background-color: #444;
  margin: 0 auto;
  border-radius: 60px;
  transform: rotate(14deg);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 5px 5px 10px 5px #222;

  ${({ move }) =>
    move &&
    css`
      animation: ${animation} 1.5s ease-out;
    `}
`

export const Subtitle = styled.h2`
  align-self: flex-start;
  font-size: 3rem;
  text-align: left;
  margin-left: 10%;
  transform: rotate(-14deg);
  text-shadow: 10px 10px #222, -2px -2px #222, 2px 2px #222;
`

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  text-shadow: 10px 10px 10px #222, 2px 2px #222, -1px -1px 2px #222;
`

export const TitleBox = styled.div`
  width: 90%;
  height: 132px;
  background-color: tomato;
  border-radius: 30px;

  transform: rotate(-10deg);
  margin-left: 5%;
  display: grid;
  place-items: center;
  box-shadow: 5px 5px 5px 10px #222;
  transition: all 1s;

  :hover {
    border: 3px solid gold;
    cursor: pointer;
    transform: scale(1.2);
  }
`
