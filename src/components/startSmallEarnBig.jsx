import React from 'react'
import styled from 'styled-components'
import manager1 from '../images/Manager1.png';
import a25per from '../images/a25per.png';


const StartSmallEarnBig = () => {
  return (
    <>
    <Div>
        <Heading>Start Small. Earn Big.</Heading>
        <Para>Deposity a minimum of 1000 and get a Deposit bonus + <br/>dedicagted relationship manager</Para>
        <Box2>
            <Box3>      
                <img src={a25per} alt="" />
                <H2>Deposit <br/>Bonus.</H2>
                <P>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</P>
            </Box3> 
            <Box3>
            <img src={manager1} alt="" />
            <H2>Dedicated <br/>Relationship Manager.</H2>
            <P>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</P>
            </Box3>
        </Box2>
    </Div>
    </>
  )
}

export default StartSmallEarnBig

const Div = styled.div`
background: rgba(255, 255, 255, 1);
padding-top:100px;
padding-bottom:100px;
`;


const Heading = styled.h1`
font-family: sans-serif;
color:black;
font-size: 72px;
font-weight: 700;
letter-spacing: -2.096774101257324px;
text-align: center;
linear-gradient(0deg, #FFFFFF, #FFFFFF);
`;

const Para = styled.p`
font-family: sans-serif;
font-size: 22.37px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0em;
text-align: center;
color: rgba(50, 51, 58, 1);
margin-top:-20px;
`;

const Box2 = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    flex-wrap:wrap;
`;
const Box3 = styled.div`
width: 500px;
height: 400px;
background: rgba(243, 243, 243, 1);
padding:40px 35px 10px 35px;
`;

const H2 = styled.h2`
font-family: sans-serif;
font-size: 40px;
font-weight: 700;
line-height: 51px;
letter-spacing: -1.6875px;
text-align: left;
color: rgba(14, 14, 15, 1);

`;
const P = styled.p`
font-family: sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: rgba(102, 102, 115, 1);
`;