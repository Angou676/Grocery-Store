import React from 'react'
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MainBlock = styled.div`
    height:100%;
    border-radius:4px;
    width:86%;
    margin:auto;
    background-color:green;
    display:flex;
    justify-content:space-between;
    padding:0px 10px 0px 10px;
`
const LeftSubBlock = styled.div`
    color:white;
    width:15%;
    @media (min-width: 280px) and (max-width: 359px){
        width:90%;
    }
    @media (min-width: 360px) and (max-width: 399px){
        width:60%;
    }
    @media (min-width: 400px) and (max-width: 479px){
        width:60%;
    }
    @media (min-width: 480px) and (max-width: 539px){
        width:40%;
    }
    @media (min-width: 540px) and (max-width: 799px){
        width:30%;
    }
    @media (min-width: 800px) and (max-width: 1080px){
        width:20%;
    }
`
const RightSubBlock = styled.div`
    color:white;
    width:15%;

    @media (min-width: 280px) and (max-width: 359px){
        width:90%;
    }
    @media (min-width: 360px) and (max-width: 399px){
        width:60%;
    }
    @media (min-width: 400px) and (max-width: 479px){
        width:60%;
    }
    @media (min-width: 480px) and (max-width: 539px){
        width:40%;
    }
    @media (min-width: 540px) and (max-width: 799px){
        width:30%;
    }
    @media (min-width: 800px) and (max-width: 1080px){
        width:25%;
    }
`
const TextBlock = styled.div`
    font-size:18px;
    font-weight:700;
    color:white;
    display:flex;
    align-items:center;
    padding-top:10px;
`

const ViewCart = (props) => {
  return (
    <>
    <MainBlock>
        <LeftSubBlock>
            <TextBlock><ShoppingCartIcon style={{fontSize:'21px'}}/>  &#160; {props.selecteditem} &bull; item &#160; &#8377; 19</TextBlock>
        </LeftSubBlock>
        <RightSubBlock>
        <TextBlock style={{float:'right'}}>View cart &#160; <ArrowForwardIosIcon style={{fontSize:'16px'}}/></TextBlock>
        </RightSubBlock>
    </MainBlock>
    </>
  )
}

export default ViewCart