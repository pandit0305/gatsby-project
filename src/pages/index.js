import * as React from "react"
import '../styles/global.css';
import styled from "styled-components";
import Header from "../components/header";
import Home from "../components/home";
import TradingSummery from "../components/tradingSummery";
import MobileImageSection from '../components/mobileImageSection';
import TradeMore from '../components/tradeMore';
import ExploreMarket from '../components/exploreMarket';
import Frontiers from '../components/frontiers';
import StartSmallEarnBig from '../components/startSmallEarnBig';
import ThreeEasyStep from '../components/threeEasyStep';
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
    <Main>
      <Header/>
      <Home/>
      <TradingSummery/>
      <MobileImageSection/>
      <TradeMore/>
      <ExploreMarket/>
      <Frontiers/>
      <StartSmallEarnBig/>
      <ThreeEasyStep/>
    </Main>
      <Footer/>
    </>
  )
}

export default IndexPage

const Main = styled.main`
  padding:0;
  margin:0;
  background-color: black;
  padding-bottom:100px;
`;