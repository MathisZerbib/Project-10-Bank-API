import React from 'react';
import styled from "styled-components";
import LogoBanner from "../../assets/images/bank-tree.jpeg";



const BannerDiv = styled.div`
  position: relative;
  background: black;
  overflow: hidden;
  width 100%;
  height: 30rem;
  margin: 20px auto;
  background-image: url(${LogoBanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const BannerCaption = styled.h2`
  font-size: 2rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  margin: auto;
`;

const BannerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
    text-align: left;
    padding: 1rem;
`;

const BannerTitle = styled.h1`
    font-size: 1rem;
`;


const BannerSubTitle = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
`;



function Banner() {
    return (
      <>
      <BannerDiv className='banner-div'>
        <BannerCaption>
            <BannerCard>
                <BannerTitle>No fees.
                <br />
                No minimum deposit.
                <br />
                High interest rates.
                <BannerSubTitle>Open a savings account with Argent Bank today!</BannerSubTitle>

                </BannerTitle>
            </BannerCard>
            
            </BannerCaption>
      </BannerDiv>
      </>
    );
  }

  export default Banner
