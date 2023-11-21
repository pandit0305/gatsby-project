import React from 'react';
import styled from 'styled-components';
import vector1 from '../images/Vector1.png';

const data = [
    {
        value:"00%",
        label:"Conversion Fee",
        vector:vector1
    },
    {
        value:"500 Mn+",
        label:"Lifetime Volume Traded",
        vector:vector1
    },
    {
        value:"250+",
        label:"Total Tradable Pairs",
        vector:vector1
    },
    {
        value:"15,000+",
        label:"Traders"
    }
]

const TradingSummery = () => {
  return (
    <Container>
    <MainBox>
        {
            data.map((val)=>(
            <Box>
                <div>
                <H1>{val.value}</H1>
                <Text>{val.label}</Text>  
                </div>
                <div>
                    <img src={val.vector} alt="" />
                </div>
            </Box>
            ))
        }
    </MainBox>
    </Container>
  )
}

export default TradingSummery

const H1 = styled.h1`
    text-align:center;
    color:yellow;
font-family:sans-serif;
font-size: 40px;
font-weight: 700;
line-height: 48px;
letter-spacing: 0em;
text-align: left;


`;
const Text = styled.p`
color: rgba(169, 169, 169, 1);
    text-align:center;
font-family:sans-serif;

`;

const Container = styled.div`
    width:75%;
    height:fit-content;
    border:1px solid white;
   margin:50px auto;
border: 1.5px solid;
border-image-source: linear-gradient(180deg, rgba(50, 216, 117, 0.24) 0%, rgba(226, 255, 111, 0.25) 121.93%);
box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.2);

`;
const MainBox = styled.div`
    display:flex;
    gap:40px;
    justify-content:center;
    margin-top:10px;
    margin-left:30px;
    flex-wrap:wrap;
`;
const Box = styled.div`
    display:flex;
    gap:40px;
    flex-wrap:wrap;
`;