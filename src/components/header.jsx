import * as React from "react"
import styled from "styled-components";

const links = [
    {
        text:"Career",
        url:"#"
    },
    {
        text:"Blogs",
        url:"#"
    },
    {
        text:"Leaderboard",
        url:"#"
    },
    {
        text:"Fees",
        url:"#"
    }
]
const Header = ()=>{

    return (
        <HeaderBox>
            <Box>
                <div>
                    <LogoText>density</LogoText>
                </div>
                <MenuBox>
                    {
                        links.map((link)=>(
                            <Typography>{link.text}</Typography>
                        ))
                    }
                    <Button>TRADE NOW</Button>
                </MenuBox>
            </Box>
        </HeaderBox>
    )
}

export default Header

const HeaderBox = styled.div`
height:25%;
border: 0px 0px 1px 0px;
gap: 387px;
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(0deg, rgba(42, 93, 50, 0.2), rgba(42, 93, 50, 0.2)),
linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 49.07%, rgba(255, 255, 255, 0) 100%);
border-bottom: 1px solid;
border-image-source: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 49.07%, rgba(255, 255, 255, 0) 100%);

`;

const Box = styled.div`
    display:flex;
    justify-content:space-between;
    width:80%;
    margin:auto;
    color:#FCFCFC;
    flex-wrap:wrap;
`;

const MenuBox = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const Typography = styled.p`
margin-right:60px;
width:46px;
height:17px;
font-family:sans-serif;
font-weight:400;
font-size:14px;
line-height:16.8px;
margin-top:25px;
`;

const Button = styled.button`
    width:170px;
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

const LogoText = styled.p`
    font-weight:100;
    font-size:24px;
    font-family:sans-serif;
    color: rgba(226, 255, 111, 1);
`;