import React from 'react'
import styled from 'styled-components';
import dcx from '../images/dcx.png';
import delta from '../images/delta.png';
import density from '../images/density.png';

const feeMakers = [
    {
        image:dcx,
        data:[
            {
                value:"0.025",
                label:"Maker Fees"
            },
            {
                value:"0.07",
                label:"Taker Fees"
            },
        ]
    },
    {
        image:density,
        style:{
            background: "linear-gradient(179.64deg, #DAF760 -1.86%, rgba(50, 216, 117, 0.96) 146.77%)",
            boxShadow: "0px 0px 40px 0px #E2FF6FCC"
        },
        data:[
            {
                value:"0.02",
                label:"Maker Fees",
                color:"black"
            },
            {
                value:"0.04",
                label:"Taker Fees",
                color:"black"
            },
        ]
    },
    {
        image:delta,
        data:[
            {
                value:"0.02",
                label:"Maker Fees"
            },
            {
                value:"0.05",
                label:"Taker Fees"
            },
        ]
    }
]

const TradeMore = () => {
  return (
    <>
        <MainBox>
            <div>
                <Box>
                    <Heading>Trade More. <Span>Pay Less.</Span></Heading>
                    <Para>Our low Fees Supercharge Your Profits</Para>
                </Box>
                <FeesBox>
                    {
                        feeMakers.map((res)=>(
                                <Box2 style={res.style}>
                                    <Img src={res.image} alt="image" />
                                    {
                                        res.data.map((val)=>(
                                            <div>
                                                <H1 style={{color:val.color}}>{val.value}</H1>
                                                <Text style={{color:val.color}}>{val.label}</Text>  
                                            </div>

                                        ))
                                    }
                                </Box2>
                        ))
                    }
                </FeesBox>
            </div>
        </MainBox>
    </>
  )
}

export default TradeMore

const MainBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:400px;
`;

const Box = styled.div`
    margin-top:25px;
`;

export const Heading = styled.h1`
font-family: sans-serif;
color:#FFFFFF;
font-size: 72px;
font-weight: 700;
line-height: 77px;
letter-spacing: -2.096774101257324px;
text-align: center;
linear-gradient(0deg, #FFFFFF, #FFFFFF);
`;

export const Span = styled.span`
    color:#EBFF25;
`;

export const Para = styled.p`
font-family: sans-serif;
font-size: 22.37px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0em;
text-align: center;
color: #E7E7EA;

`;
const FeesBox = styled.div`
    display:flex;
    gap:15px;
    margin-top:80px;
    flex-wrap:wrap;
`;

const Box2 = styled.div`
    width: 368.67px;
    height: 438px;
    background: #19191D;
    text-align:center;
   
`;

const H1 = styled.h1`
font-family: sans-serif;
font-size: 32px;
font-weight: 700;
letter-spacing: -1.6875px;
color: #FFFFFF;
margin-top:70px;

`;
const Text = styled.p`
font-family: sans-serif;
font-size: 20px;
font-weight: 400;
letter-spacing: -1.6875px;
color: rgba(169, 169, 169, 1);
margin-top:-15px;
`;

const Img = styled.img`
    margin-top:50px;
`;