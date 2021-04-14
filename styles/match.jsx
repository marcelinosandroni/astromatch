import styled, { keyframes, css } from "styled-components"
import { FaHeart } from "react-icons/fa"
import { FaHeartBroken } from "react-icons/fa"
import { GiShatteredHeart } from "react-icons/gi"
import { GiPiercedHeart } from "react-icons/gi"
import { FaHeartbeat } from "react-icons/fa"
import { AiOutlineClear } from "react-icons/ai"

console.log("STYLE")
const broom = keyframes`
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-20deg);
  }
`
export const Clear = styled(AiOutlineClear)`
  font-size: 5rem;
  position: absolute;
  top: 92%;
  left: -15%;
  color: #ffd23f;
  transform: rotate(-20deg);
  transition: all 0.5s;

  :hover {
    animation: ${broom} 0.4s infinite;
  }
`

const beat1 = keyframes`
  0% {
    font-size: 8em;
  }
  50% {
    font-size: 12em;
  }
  100% {
    font-size: 8rem;
  }
`
const beat2 = keyframes`
  0% {
    font-size: 5em;
  }
  50% {
    font-size: 7.5em;
  }
  100% {
    font-size: 5rem;
  }
`

export const Heart = styled(GiPiercedHeart)`
  font-size: 8rem;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-45%, -40%) rotate(-20deg);
  color: tomato;
  /* transition: all 1s; */

  :hover {
    /* font-size: 12rem; */
    animation: ${beat1} 0.5s infinite;
  }
`
export const HeartBroken = styled(GiShatteredHeart)`
  font-size: 5rem;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-40%, -50%);
  color: tomato;

  :hover {
    /* font-size: 7.5rem; */
    animation: ${beat2} 0.5s infinite;
  }
`

export const HeartList = styled(FaHeartbeat)`
  overflow: auto;
  font-size: 4rem;
  position: absolute;
  top: 0;
  left: 100%;
  transform: translate(-70%, -35%) rotate(20deg);
  color: #ffd23f;

  :hover {
    /* font-size: 7.5rem; */
    animation: ${beat2} 0.5s infinite;
  }
`

export const MatchList = styled.div`
  width: clamp(100px, 10%, 200px);
  height: 80vh;
  position: absolute;
  top: 0;
  left: 115%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 1rem;
`

export const MatchProfile = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
`

export const Alert = styled.span`
  width: 120%;
  height: 50px;
  transform: rotate(-30deg);
  position: absolute;
  top: 40%;
  left: -10%;
  font-size: 4rem;
  text-align: center;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: -5%;
    width: 100%;
    height: 150%;
    background-color: #540d6e;
    z-index: -1;
    border-radius: 10px 10px 0 0;
  }

  :before {
    content: "";
    position: absolute;
    top: 150%;
    left: -5%;
    width: 100%;
    height: 150%;
    background-color: #ee4266;
    z-index: -1;
    border-radius: 0 0 10px 10px;
  }
`

export const Container = styled.main`
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
`

const rotate = keyframes`
  from {
    transform: rotate(360deg) scale(0);
    clip-path: circle(1%);
  }
  to {
    transform: rotate(0) scale(1);
    clip-path: circle(30%);
  }
`

const circle = keyframes`
  from {
    clip-path: circle(30%);
  }
  to {
    clip-path: circle(100%);
  }
`

export const Box = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: clamp(320px, 25%, 450px);
  height: clamp(600px, 90%, 810px);
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0 0 10px 20px #222;
  transition: all 3s;
  animation: ${rotate} 1s ease-out forwards, ${circle} 1s 1s forwards;
  :hover {
    transform: scale(1.5);
  }
`

const growCircle = keyframes`
  from {
    width: 0px;
    height: 0px;
  }

  to {
    width: 500px;
    height: 500px;
    border: none;
  }
`

const rotateCircle = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const CrazyCricle = styled.span`
  width: 0px;
  height: 0px;
  border: 20px solid tomato;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  animation: ${growCircle} 4s forwards;
`
const appear = keyframes`
  to {
    opacity: 1;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`

export const Name = styled.h1`
  text-align: left;
  font-size: 3rem;
  opacity: 0;
  ${({ show }) =>
    show &&
    css`
      animation: ${appear} 1s ease-in forwards;
    `};
`

export const Age = styled.p`
  text-align: right;
  font-size: 2.5rem;
  line-height: 1.5;
`

export const Image = styled.img`
  width: 100%;
  height: 70%;
`

export const Bio = styled.p`
  padding: 1rem;
  font-size: 1.5rem;
`
