import React from 'react';
import styled from 'styled-components';
import { Para } from './tradeMore';
import { Heading } from './tradeMore';
import { Span } from './tradeMore';
import vectorbar from '../images/vectorbar.png';
import line from '../images/line.png';
import line1 from '../images/line1.png';
import linebar from '../images/linebar.png';

const data = [
    {
        label:"Same Strategies",
        vector:vectorbar,
    },
    {
        label:"Same Indicators",
        vector:vectorbar,
    },
    {
        label:"Better Leverage",
        vector:vectorbar,
    },
    {
        label:"24x7 Trading",
    }
]
const Frontiers = () => {
  return (
    <>
    <Box>
       <Heading><Span>Unlock </Span>New Frontiers.</Heading>
        <Para>Are you a stock trader looking for new opportunities to make <br/>money? We got you covered!</Para>
    </Box>
    <Container>
    <MainBox>
        {
            data.map((val)=>(
            <Box2>
                <div>
                     <H1>{val.label}</H1>
                </div>
                <div>
                    <img src={val.vector} alt="" />
                </div>
            </Box2>
            ))
        }
    </MainBox>
    </Container>
    <Graph>
        <div>
            <img src={line} alt="" />
            <img src={linebar} alt="" />
            <img src={line1} alt="" />
        </div>
    </Graph>
    </>
  )
}

export default Frontiers

const Box = styled.div`
    margin-top:300px;
`;

const H1 = styled.h1`
width: 157px;
height: 76px;
font-family: sans-serif;
font-size: 32px;
font-weight: 700;
line-height: 38px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
`;


const Container = styled.div`
    width:80%;
    height:fit-content;
    border:1px solid white;
   margin:50px auto;
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding:15px;
;

`;
const MainBox = styled.div`
    display:flex;
    gap:40px;
    justify-content:center;
    margin-top:10px;
    margin-left:30px;
    flex-wrap:wrap;
`;
const Box2 = styled.div`
    display:flex;
    gap:40px;
    flex-wrap:wrap;
`;

const Graph = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;