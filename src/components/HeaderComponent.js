import React from 'react'
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const MainBlock = styled.div`
    width:100%;
    height:max-content;
    position:fixed;
    top:0;
    left:0;
    background-color:white;
    box-shadow: 0 0 4px rgba(0,0,0,0.75);
    z-index:5;
`
const MainSubBlock = styled.div`
    width:87%;
    margin:auto;
    height:60px;
    padding: 0px 15px 0px 15px;
    display:flex;
    justify-content:space-between;
`
const HeadingSubBlock = styled.div`
    height: 100%;
    width:30%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (min-width: 280px) and (max-width: 359px){
        width:90%;
    }
    @media (min-width: 360px) and (max-width: 399px){
        width:90%;
    }
    @media (min-width: 400px) and (max-width: 679px){
        width:70%;
    }
`
const SearchIconBlock = styled.div`
    height: 100%;
    width:3%;
    display:flex;
    justify-content:space-around;
    align-items:center;

`
const MajorTextBlock = styled.div`
  padding-top:10px
  height:100%;
  width:90%;
`
const MainText = styled.div`
    font-size:22px;
    font-weight:700;
    width:100%;

   
    @media (min-width: 360px) and (max-width: 399px){
        font-size:14px;
    }
    @media (min-width: 400px) and (max-width: 679px){
        font-size:16px; 
    }
    @media (min-width: 680px) and (max-width: 799px){
        width:100%;
        font-size:16px;
    }
    @media (min-width: 800px) and (max-width: 1080px){
        width:100%;
        font-size:18px;
    }
`
const SubText = styled.div`
    font-size:16px;
    color:green;
    display:flex;
    align-items:center;
    @media (min-width: 360px) and (max-width: 399px){
        font-size:12px;
    }
    @media (min-width: 400px) and (max-width: 679px){
        font-size:13px; 
    }
    @media (min-width: 680px) and (max-width: 799px){
        width:100%;
        font-size:13px;
    }
    @media (min-width: 800px) and (max-width: 1080px){
        width:130%;
        font-size:14px;
        }
`

const HeaderComponent = () => {

  return (
    <>
    <MainBlock>
        <MainSubBlock>
            <HeadingSubBlock>
                <ArrowBackIcon/>
                <MajorTextBlock>
                    <MainText>Vegetables & Fruits</MainText>
                    <SubText>see all categories <KeyboardArrowDownIcon/></SubText>

                </MajorTextBlock>
            </HeadingSubBlock>
            <SearchIconBlock>
                <SearchIcon/>
            </SearchIconBlock>

        </MainSubBlock>
    </MainBlock>
    
    </>
  )
}

export default HeaderComponent