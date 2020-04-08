import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import FirePlant from '../components/Plants/Fire';
import WaterPlant from '../components/Plants/Water';
import ElectricPlant from '../components/Plants/Electric';
import GrassPlant from '../components/Plants/Grass';
import IcePlant from '../components/Plants/Ice';
import Modal from '../components/EvolutionModal/index';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'gatsby';

function Evolution() {
  const [stages, updateStage] = useState([1, 2, 3, 4, 5, 6]);
  const plantsType = {
    fire: IcePlant,
  };

  //   {
  //     body: [Body1, Body2, Body3, Body4],
  //     eyes: [Eye1, Eye2, Eye3, Eye4, Eye5, Eye6, Eye7, Eye8],
  //     fire: [Fire],
  //     hair: [Hair1, Hair2, Hair3, Hair4, Hair5],
  //     head: [Head],
  //     backLeaves: [BackLeaves1, BackLeaves2, BackLeaves3, BackLeaves4],
  //     frontLeaves: [FrontLeaves1, FrontLeaves2, FrontLeaves3, FrontLeaves4],
  //     patterns: [Pattern1, Pattern2, Pattern3, Pattern4],
  //   },

  const Body = styled(plantsType.fire.body[2])`
    position: absolute;
    top: 45%;
    width: 100%;
    height: 35%;
    left: 0;
  `;
  const Eye = styled(plantsType.fire.eyes[2])`
    position: absolute;
    height: 50%;
    z-index: 2;
    width: 50%;
    left: 38.5%;
    top: -18%;
  `;
  const Hair = styled(plantsType.fire.hair[0])`
    position: absolute;
    top: -31px;
    height: 40%;
    z-index: -1;
    left: -35%;
    transform: translate(14px, 10px);
  `;
  const HeadSVG = styled(plantsType.fire.head[0])`
    height: 100%;
    position: absolute;
    left: 22.5%;
    top: -27%;
    width: 100%;
  `;
  const BackLeaves = styled(plantsType.fire.backLeaves[0])`
    position: absolute;
    top: 60%;
    width: 100%;
    height: 30%;
    left: 0;
  `;
  const FrontLeaves = styled(plantsType.fire.frontLeaves[0])`
    position: absolute;
    top: 70%;
    width: 100%;
    height: 30%;
    left: 0;
  `;
  const PatternSVG = styled(plantsType.fire.patterns[0])`
    position: absolute;
    height: 15%;
    z-index: 2;
    width: 40%;
    left: 21.5%;
    top: 14%;
  `;

  const Plant = styled.div`
    position: absolute;
    top: 41%;
    left: 50%;
    transform: translate(-55%, -70%);
    width: 150px;
    height: 210px;
  `;

  const glowAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0.9); }
    50% {
        transform: translate(-50%, -50%) scale(1); }
    100% {
        transform: translate(-50%, -50%) scale(0.9); }
  `;
  const Glow = styled.div`
    height: 350px;
    width: 350px;
    position: relative;
    top: 30%;
    left: 50%;
    animation: ${glowAnimation} 3s infinite;
    background: rgba(208, 252, 255, 0.15);
    border-radius: 100%;
  `;
  return (
    <>
      <Modal>
        <Glow />
        <Plant>
          <BackLeaves />
          <Body />
          <HeadSVG />
          <Eye />
          <Hair />
          <FrontLeaves />
          <PatternSVG />
        </Plant>
        <ContentContainer>
          <h3>Success</h3>
          <p>
            You have successfully completed the chapter and evolved your plants
            to defend against the zombies.
          </p>
          <ProceedLink to="/">
            Proceed <FaChevronRight />
          </ProceedLink>
        </ContentContainer>
      </Modal>
    </>
  );
}

const ContentContainer = styled.div`
  color: white;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 54px;
    line-height: 63px;
    text-align: center;
    color: #ffffff;
    margin: 10px 0;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin-top: 0;
    max-width: 600px;
  }
`;

const ProceedLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  background: #18b77e;
  border-radius: 10px;
  border: none;
  width: 196px;
  height: 68px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  color: #fff;
  transition: 0.3s;

  > svg {
    display: inline-block;
    vertical-align: middle;
    margin-top: 1px;
  }

  :hover {
    background: #18a472;
  }
`;

export default Evolution;

//body-eyes-fire-hair-head-backLeaves-frontLeaves-patterns: plant-type
//[0-3][0-3][1][0-3][0-3][0-3][0-3][1-2][0-3]

// const plantsType = {
//   fire: {
//     body: [1, 2, 3, 4],
//     eyes: [1, 2, 3, 4],
//     fire: [1],
//     hair: [1, 2],
//     head: [1],
//     backLeaves: [1, 2, 3, 4],
//     frontLeaves: [1, 2, 3, 4],
//     patterns: [1, 2, 3, 4],
//   },
// };

//Evolution growth cycle
//seed --> bottom back_front-leaves --> body --> head --> eyes --> hair --> addition attribute(spark, ice/fire head etc)

//chapter 1 --> `*(Animation of seed being set in an incubator)*`
//chapter 3(state variables) `*(Animation of seed growing into leaves)*`
//chapter 6(booleans) `*(Animation of body growing)*`
//chapter 8(Math Operations) `*(Animation of head growing)*`
//chapter 11(Address) `*(Animation of eyes growing)*`
//chapter 12(Verify) `*(Animation of hair growing)*` --> plant has fully grown --> to battle zombie apocalypse
