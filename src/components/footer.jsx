import React from 'react'
import styled from 'styled-components'
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedIn from '../images/linkedin.png';
import twitter from '../images/Twitter.png';

const footers = 
{
   data: [
    {
        label:"Blog",
        url:"",
    },
    {
        label:"Fees",
        url:"",
    },
    {
        label:"Leaderboard",
        url:"",
    },
    {
        label:"Careers",
        url:"",
    },
    {
        label:"Contact Us",
        url:"",
    },
    {
        label:"Privacy Policy",
        url:"",
    },
],
desc:"Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.",
logo:[
    {
        img:facebook
    },
    {
        img:twitter
    },
    {
        img:linkedIn
    },
    {
        img:instagram
    }
]

}

const Footer = () => {
  return (
    <FooterSection>
        <div>
        <LogoText>density</LogoText>
            <div>
                <Div>
                {
                    footers.data.map((res)=>(
                        <P>{res.label}</P>
                        ))
                    }
                </Div>
                <Div>
                    <Para>{footers.desc}</Para>
                </Div>
                <Div>
                    {
                    footers.logo.map((res)=>(
                        <Logo src={res.img} alt="" />
                        ))
                    }
                </Div>
            </div>
        </div>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.div`
background: rgba(34, 152, 81, 1);
display:flex;
justify-content:center;
align-items:center;
padding-bottom:90px;
`;

const LogoText = styled.p`
    font-weight:100;
    font-size:34px;
    font-family:sans-serif;
    color: rgba(255, 255, 255, 1);
    text-align:center;
`;

const Div = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:20px;
`;

const P = styled.p`
font-family: sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color: rgba(255, 255, 255, 1);
margin:0px 25px;
`;

const Para = styled.p`
    width: 786.88px;
    height: 48px;
    font-family:sans-serif;
    color:rgba(221, 221, 221, 1);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
`;

const Logo = styled.img`
    margin:20px;
`;