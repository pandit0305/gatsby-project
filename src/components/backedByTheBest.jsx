import React from 'react'
import styled from 'styled-components'
import { Heading } from './tradeMore';
import a from '../images/a.png';
import c from '../images/c.png';
import d from '../images/d.png';
import e from '../images/e.png';
import f from '../images/f.png';
import g from '../images/g.png';
import h from '../images/h.png';
import i from '../images/i.png';
import image109 from '../images/image109.png';
import image110 from '../images/image110.png';
import image111 from '../images/image111.png';
import image112 from '../images/image112.png';
import image113 from '../images/image113.png';
import image114 from '../images/image114.png';
import image115 from '../images/image115.png';

const companyLogos = [
    {
        logo:image109
    },
    {
        logo:image110
    },  
    {
        logo:image111
    }, 
    {
        logo:image112
    }
]

const photoes = [
    {
        image:e,
        name:"Utsav Somani"
    },
    {
        image:d,
        name:"Aditya Nagarsheth",
        label:"Perpetual Value Partners"
    },
    {
        image:c,
        name:"Gokul Rajaram"
    },
    {
        image:a,
        name:"Sajid Rehman",
        label:"My Asia VC"
    },
    {
        image:h,
        name:"Arjun Sethi",
        label:"Tribe Capital"
    }
]
const BackedByTheBest = () => {
  return (
    <>
        <Box>
            <Heading>Backed by the Best.</Heading>    
        </Box> 
        <Box2>
            <div>
                {
                    companyLogos.map((logo,i)=>{
                        return  <Image src={logo.logo} alt=""  />
                })
                }
            </div>
        </Box2>
        <Box2>
            <div>
                 <Image src={image113} alt=""  />
                 <Img src={image114} alt=""/>
                 <Img src={image115} alt="" />
            </div>
        </Box2>
        <Box2>
            <Profile>
                {
                    photoes.map((res)=>(
                          <div>
                                <div>
                                    <Image src={res.image} alt=""  />
                                </div>
                                <Div>
                                    <H3>{res.name}</H3>
                                    <P>{res.label}</P>
                                </Div>
                          </div>    

                    ))
                }
            </Profile>
        </Box2>
        <Box2>
            <Profile>
                <div>
                    <div>
                        <Image src={i} alt=""  />
                    </div>
                    <Div>
                        <H3>Kunal Shah</H3>
                        <P></P>
                    </Div>
                </div>    
                <div>
                    <div>
                        <Image src={f} alt=""  />
                    </div>
                    <Div>
                        <H3>Sandeep Nailawal</H3>
                        <P>Polygon Labs</P>
                    </Div>
                </div>    
                <div>
                    <div>
                        <Image src={g} alt=""  />
                    </div>
                    <Div>
                        <H3>Karn Vivek Nagpal</H3>
                    </Div>
                </div>    
            </Profile>
        </Box2>
    </>
  )
}

export default BackedByTheBest

const Box = styled.div`
    margin-top:200px;
`;
const Box2 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Image = styled.img`
    margin:30px 30px;
`;  
const Img = styled.img`
    margin:0px 0px 80px 30px;
`;

const H3 = styled.h3`
font-family: sans-serif;
font-size: 20px;
font-weight: 700;
letter-spacing: 0em;
text-align: center;
color:white;
`;

const Div = styled.div`
    margin-top:-35px;
`;
const P = styled.p`
font-family: sans-serif;
font-size: 13px;
font-weight: 500;
letter-spacing: 0em;
text-align: center;
color:rgba(128, 128, 144, 1);
margin-top:-15px;
`;

const Profile = styled.div`
    display:flex;
    gap:10px;
    flex-wrap:wrap;
`;