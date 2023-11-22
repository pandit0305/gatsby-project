import React from 'react'
import styled from 'styled-components'
import { Heading } from './tradeMore';
import { Span } from './tradeMore';
import createAccount from '../images/createAccount.png';
import cont from '../images/continue.png';
import buyAndSell from '../images/buyAndSell.png';
import hrLine from '../images/hrLine.png';

const steps = [
    {
        image:createAccount,
        logo:"",
        heading:"Create an Account",
        desc:"Register & Complete your Verification in less than 2 minutes",
        button:"TRADE NOW",
        line:hrLine
    },
    {
        image:cont,
        logo:"",
        heading:"Deposit Funds",
        desc:"Add funds quickly using a variety of payment methods",
        button:"TRADE NOW",
        line:hrLine
    },
    {
        image:buyAndSell,
        logo:"",
        heading:"Become a Trader",
        desc:"Choose Your Trading Pair & Trade Seamlessly",
        button:"TRADE NOW"
    }
]

const ThreeEasyStep = () => {
  return (
    <>
        <Box>
        <Heading>Derivates made simple <br/>in <Span>3 Easy</Span> Steps</Heading>
        </Box> 
        {
            steps.map((res)=>(
                <div>
                    <Div>
                        <MainImage src={res.image} alt="" />
                        <AccountSection>
                            <img src={res.logo} alt="" />
                            <H2>{res.heading}</H2>
                            <P>{res.desc}</P>
                            <Button>{res.button}</Button>
                        </AccountSection>
                    </Div>
                    <HrLine src={res.line} alt="" />
                </div>
            ))
        }
    </>
  )
}

export default ThreeEasyStep

const Box = styled.div`
    margin-top:120px;
`;

const Div = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`;

const AccountSection = styled.div`
    margin-left:150px;
`;

const MainImage = styled.img`
width: 248px;
height: 537px;
border:1px solid #FCFCFC;
background-color:black;
padding:10px;
border-radius:45px; 
`;

const H2 = styled.h2`
font-family: sans-serif;
font-size: 40px;
font-weight: 700;
line-height: 51px;
letter-spacing: -1.6875px;
text-align: left;
color: rgba(255, 255, 255, 1);

`;
const P = styled.p`
width: 384px;
height: 64px;
font-family: sans-serif;
font-size: 24px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color:rgba(169, 169, 169, 1);
margin-top:-20px;
`;

const Button = styled.button`
    width:216px;
    height:48px;
    font-family:sans-serif;
    font-weight:700;
    font-size:16px;
    line-height:19.2px;
    margin-top:10px;
    border-radius:10px;
    background: linear-gradient(85.85deg, #D4F938 23.09%, #32D875 108.69%);
    box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
`;

const HrLine = styled.img`
    margin-top:100px;
`;