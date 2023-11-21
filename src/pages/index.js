import * as React from "react"
import styled from "styled-components";
import Header from "../components/header";
import Home from "../components/home";
import TradingSummery from "../components/tradingSummery";
import MobileImageSection from '../components/mobileImageSection';
import '../styles/global.css';

const IndexPage = () => {
  return (
    <Main>
      <Header/>
      <Home/>
      <TradingSummery/>
      <MobileImageSection/>
    </Main>
  )
}

export default IndexPage

const Main = styled.main`
  padding:0;
  margin:0;
  background-color: black;
  padding-bottom:100px;
`;