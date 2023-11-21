import React from 'react'
import vector from '../images/Vector.png';
import styled from 'styled-components';
import barChart from '../images/barChart.png';
import oneApp from '../images/oneAppText.png';
import future from '../images/future.png';
import rect from '../images/rect.png';

const mobSection = [
    {
        image:vector,
        graph:barChart,
        text:oneApp
    },
    {
        image:vector,
        graph:"",
        text:future
    },
    {
        image:vector,
        graph:rect,
        text:oneApp
    }
]

const MobileImageSection = () => {
  return (
    <>
    {
        mobSection.map((res)=>(
            <Box>
                <div>
                    <img src={res.image} alt="" />
                </div>
            <ImageBox>
                    <img src={res.graph} alt="" style={{margin:"20px 20px"}} />
                <div>
                <img src={res.text} alt="" />
                </div>
            </ImageBox>
            </Box>

        ))
    }
    </>
  )
}

export default MobileImageSection
 
const Box = styled.div`
    margin-top:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`;

const ImageBox = styled.div`
    position:absolute;
`;