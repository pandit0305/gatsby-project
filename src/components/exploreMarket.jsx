import React from 'react';
import styled from 'styled-components';
import { Para } from './tradeMore';
import { Heading } from './tradeMore';
import { Span } from './tradeMore';
import analysis from '../images/analysis.png';

const ExploreMarket = () => {
  return (
    <>
    <Box>
       <Heading>Explore the Markets <br/>like it is your <Span>Playground.</Span></Heading>
        <Para>Search for your favorite coins and stay ahead of the market</Para>
    </Box>
    <Box2>
        <div>
            <img src={analysis} alt="analysis_image" />
            <Box2>
                <Button>EXPLORE MARKETS</Button>
            </Box2>
        </div>
    </Box2>
    </>
  )
}

export default ExploreMarket

const Box = styled.div`
    margin-top:300px;
`;

const Box2 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Button = styled.button`
    width:250px;
    height:50px;
    font-family:sans-serif;
    font-weight:700;
    font-size:16px;
    line-height:19.2px;
    margin-top:10px;
    border-radius:10px;
    background: linear-gradient(85.85deg, #D4F938 23.09%, #32D875 108.69%);
    box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
`;