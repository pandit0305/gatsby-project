import React from 'react'
import styled from "styled-components";
import buyImage from '../images/buy.png';
import buyAndSellImage from '../images/buyAndSell.png';
import createAccount from '../images/createAccount.png';

const images = [
    {
        image:buyImage,
    },
    {
        image:buyAndSellImage
    }
]

const Home = ()=>{
  
    return (
    <div>
      <div>
        <Heading>It's time to trade,<br/>the <Span>future.</Span></Heading>
        <ParaText>Trade BTC, ETH Futures with 125x leverage and earn rewards.</ParaText>
      </div>
        <ImageBox>
            {
                images.map((img)=>(
                    <Image src={img.image} alt="buy_and_sell" />
                ))
            }
             <MainImage src={createAccount} alt="create_account" />
        </ImageBox>
    </div>
    )
}

export default Home


const Heading = styled.h1`
font-family: sans-serif;
font-size: 96px;
font-weight: 700;
line-height: 100px;
letter-spacing: -4.190476417541504px;
text-align: center;
color:#FCFCFC;
`;

const Span = styled.span`
background: linear-gradient(85.85deg, #D4F938 23.09%, #32D875 108.69%);
text-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 1);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text; 
`;

const ParaText = styled.p`
text-align: center;
color:#FCFCFC;
font-size:24px;
font-family:sans-serif;
`;

const ImageBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    position:relative;
`;
const Image = styled.img`
width: 234.6px;
height: 506.24px;
margin:110px;
border:1px solid #FCFCFC;
background-color:black;
padding:10px;
border-radius:45px;
`;

const MainImage = styled.img`
width: 297.24px;
height: 641.39px;
top: 12.75px;
left: 39%;
position:absolute;
border:1px solid #FCFCFC;
background-color:black;
padding:10px;
border-radius:45px; 
`;
