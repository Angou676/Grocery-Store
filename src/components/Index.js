import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from "axios";
import ProductListing from './ProductListing';

const MainContainerBlock = styled.div`
  width:90%;
  margin:auto;
  height:max-content;
 
  @media (min-width: 900px) and (max-width: 1320px){
    width:95%;
  }
  @media (min-width: 680px) and (max-width: 900px){
    width:100%;
  }
  @media (min-width: 480px) and (max-width: 680px){
    width:100%;
  }
  @media (min-width: 360px) and (max-width: 480px){
    width:100%;
  }
  @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
    width:100%;
  } 
`
const HeaderBlock = styled.div`
    font-size:20px;
    font-weight:600;
    background-color:green;
    height:30px;
    color:white;
    text-align:center;
    align-items:center;
    width:100%;
`

function Index() {
  const [groceryItemsList,setGroceryItemList] = useState([]);

  //Fetching from API
  useEffect(()=>{
    axios.get(`http://localhost:3006/grocerydata`)
    .then(response =>{
        setGroceryItemList(response?.data) 
    })
  },[])

  return (
    <>
      {/* <HeaderBlock>Online Grocery Shop</HeaderBlock> */}
      <MainContainerBlock>
            <ProductListing groceryItemsList={groceryItemsList}/>
      </MainContainerBlock>
    </>
  );
}
export default Index;
