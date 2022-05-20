import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from "axios";
import ProductListing from './ProductListing';
import HeaderComponent from './HeaderComponent';
import ViewCart from './ViewCart';

const MainContainerBlock = styled.div`
  width:90%;
  margin:61px auto 60px auto;
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
const FooterBlock = styled.div`
  position: fixed;
  bottom: 2px;
  height: 45px;
  width:100%;
`

function Index() {
  const [groceryItemsList,setGroceryItemList] = useState([]);
  const [selectItem,setSelectItem] = useState([]);

  //Fetching from API
  useEffect(()=>{
    axios.get(`http://localhost:3006/grocerydata`)
    .then(response =>{
        setGroceryItemList(response?.data) 
    })
  },[])


  //Select Item functions
  const getSelectedItem = (getItem) =>{
    setSelectItem(selectItem => [...selectItem, groceryItemsList.filter(val => val.id === getItem)])
  }

  return (
    <>
      <HeaderComponent/>
      <MainContainerBlock>
            <ProductListing groceryItemsList={groceryItemsList} getSelectedItem={getSelectedItem}/>
      </MainContainerBlock>
      <FooterBlock >
        <ViewCart selecteditem={selectItem.length}/>
      </FooterBlock>
      
    </>
  );
}
export default Index;
