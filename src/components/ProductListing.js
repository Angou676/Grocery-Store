import React,{useState,useEffect} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components';
import { experimentalStyled as style } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const Item = style(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px 15px 15px 15px',
    borderRadius:'0%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

//==================================================================================================================================================
//=============================Main function Start========================================================================================================
//==================================================================================================================================================
const ProductListing = (props) => {

    //Tab value select function
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    const [availableNumber, setAvailableNumber] = useState(0);
    const [groceryFilterList, setGroceryFilterList] = useState([]);

    //Number of Available Products
    useEffect(()=>{
        setAvailableNumber(props.groceryItemsList.filter(val => val.isStockAvailable>0).length)
    },[props.groceryItemsList.length])

    const allProductListHandler = () =>{     
        const vegList = props.groceryItemsList?.filter(val => val)
        setGroceryFilterList(vegList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0);
        setAvailableNumber(noOfAvailableProducts.length)
    }

    //Vegetables Filter
    const vegFilterHandler = () =>{     
        const vegList = props.groceryItemsList?.filter(val => val.type === 'vegetables')
        setGroceryFilterList(vegList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0 && item.type === 'vegetables');
        setAvailableNumber(noOfAvailableProducts.length)
    }

    //Fruits Filter
    const fruitFilterHandler = () =>{
        const fruitList = props.groceryItemsList?.filter(val => val.type === 'fruit')
        setGroceryFilterList(fruitList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0 && item.type === 'fruit');
        setAvailableNumber(noOfAvailableProducts.length)
     }

      //Exotic Premium Filter
    const exoticPremiumFilterHandler = () =>{
        const exotictList = props.groceryItemsList?.filter(val => val.type === 'exoticsVegs')
        setGroceryFilterList(exotictList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0 && item.type === 'exoticsVegs');
        setAvailableNumber(noOfAvailableProducts.length)
     }

    //Organic Filter
    const organicFilterHandler = () =>{
        const organicList = props.groceryItemsList?.filter(val => val.type === 'organicVeg')
        setGroceryFilterList(organicList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0 && item.type === 'organicVeg');
        setAvailableNumber(noOfAvailableProducts.length)
     }

    //Seasonal fruit Filter
    const seaFruitFilterHandler = () =>{
        const seaFruList = props.groceryItemsList?.filter(val => val.type === 'seasonalFruit')
        setGroceryFilterList(seaFruList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0 && item.type === 'seasonalFruit');
        setAvailableNumber(noOfAvailableProducts.length)
     }

    //Seasonal Veg Filter
    const seaVegFilterHandler = () =>{
        const seaFruList = props.groceryItemsList?.filter(val => val.type === 'seasonalVegs')
        setGroceryFilterList(seaFruList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0 && item.type === 'seasonalVegs');
        setAvailableNumber(noOfAvailableProducts.length)
     }

    //Seasonal freshly Cut Filter
    const freshCutFilterHandler = () =>{
        const seaFruList = props.groceryItemsList?.filter(val => val.type === 'freshCutSprouts')
        setGroceryFilterList(seaFruList)
        const noOfAvailableProducts = props.groceryItemsList?.filter(item => item.isStockAvailable >0 && item.type === 'freshCutSprouts');
        setAvailableNumber(noOfAvailableProducts.length)
     }

  return (
    <>
      <MainContainerBlock>
          <CategorySelectBlock className='cateBlock' >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
        >
        <Tab {...getIndexValue(0)} 
           component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(0)
                allProductListHandler()
                }} > 
             <GroceryTabButton>
                <img className="cateSlectimageBlock" alt='products' src='https://www.freepnglogos.com/uploads/vegetables-png/air-cargo-agent-mangalore-fresh-vegetables-fruits-27.png'  />
                </GroceryTabButton> 
                <GroceryTabText className={value === 0 ? 'tabActive' : null}>All Grocery<br/> Items</GroceryTabText>  
            </GroceryTabBlock>
         )}/>
          
          <Tab   {...getIndexValue(1)} 
          component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(1)
                vegFilterHandler()
            }}>
            <GroceryTabButton>
                    <img className="cateSlectimageBlock" alt='products' src='https://www.freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png' width="100" height="80" />
               </GroceryTabButton> 
               <GroceryTabText className={value === 1 ? 'tabActive' : null}>Vegetables</GroceryTabText>
            </GroceryTabBlock>
         )}/>
          <Tab  {...getIndexValue(2)} 
           component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(2)
                fruitFilterHandler()
                }} >
               <GroceryTabButton>
               <img className="cateSlectimageBlock" alt='products' src='https://toppng.com/uploads/preview/apple-fruit-11526067113bpkdzjmq8g.png' width="100" height="80" />
               </GroceryTabButton> 
               <GroceryTabText className={value === 2 ? 'tabActive' : null}>Fruits</GroceryTabText>
            </GroceryTabBlock>
         )}/>
          <Tab  {...getIndexValue(3)} 
           component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(3)
                exoticPremiumFilterHandler()
                }} > 
                <GroceryTabButton>
                <img className="cateSlectimageBlock" alt='products' src='https://mangobazaar.in/image/cache/catalog/Exotic%20vegetables/chinese%20cabbage-600x600.png' width="100" height="80" />
               </GroceryTabButton> 
               <GroceryTabText className={value === 3 ? 'tabActive' : null}>Exotic &<br/> Premium</GroceryTabText>
            </GroceryTabBlock>
         )}/>
         <Tab  {...getIndexValue(4)} 
           component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(4)
                organicFilterHandler()
                }} > 
             <GroceryTabButton>
                <img className="cateSlectimageBlock" alt='products' src='https://www.dlf.pt/dfpng/middlepng/117-1174168_broccoli-organic-food-cauliflower-vegetable-broccoli-png-transparent.png' width="100" height="80" />
               </GroceryTabButton> 
            <GroceryTabText className={value === 4 ? 'tabActive' : null}>Organic &<br/> Hydroponic</GroceryTabText>
            </GroceryTabBlock>
         )}/>
          <Tab {...getIndexValue(5)} 
           component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(5)
                seaFruitFilterHandler()
                }} > 
            <GroceryTabButton>
            <img className="cateSlectimageBlock" alt='products' src='https://pngimg.com/uploads/mango/mango_PNG9163.png' width="100" height="80" />
               </GroceryTabButton> 
            <GroceryTabText className={value === 5 ? 'tabActive' : null}>Seasonal<br/> Fruits</GroceryTabText>
            </GroceryTabBlock>
         )}/>
          <Tab  {...getIndexValue(6)} 
           component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(6)
                seaVegFilterHandler()
                }} > 
            <GroceryTabButton>
            <img className="cateSlectimageBlock" alt='products' src='https://w7.pngwing.com/pngs/609/33/png-transparent-calabash-gourd-cucurbitaceae-vegetable-bitter-melon-vegetable-wish-food-gourd-thumbnail.png' width="100" height="80" />
               </GroceryTabButton> 
            <GroceryTabText className={value === 6 ? 'tabActive' : null}>Seasonal<br/> Veg</GroceryTabText>
            </GroceryTabBlock>
         )}/>
          <Tab {...getIndexValue(7)} 
           component={() => (
            <GroceryTabBlock onClick={()=>{
                setValue(7)
                freshCutFilterHandler()
                }} > 
             <GroceryTabButton>
             <img className="cateSlectimageBlock" alt='products' src='https://w7.pngwing.com/pngs/532/449/png-transparent-cruciferous-vegetables-cabbage-vegetarian-cuisine-cabbage-cut-material-leaf-vegetable-food-cooking.png' width="100" height="80" />
               </GroceryTabButton> 
            <GroceryTabText className={value === 7 ? 'tabActive' : null}>Freshly Cut<br/>  & Sprouts</GroceryTabText>
            </GroceryTabBlock>
         )}/>
        </Tabs>
    </CategorySelectBlock>

   {/* ======ALL Item Listing============ */}
          <TabPanel value={value} index={0} className='tabPanelBlock' availableNumber={availableNumber} >
            <Grid container  spacing={{ xs: 0,md: 2}} columns={{ xs: 4, sm: 8, md: 12}}>
                {props.groceryItemsList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));
                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img alt='products' src={item.image} width="60%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)} >add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>                   
                </Grid>
                })}
            </Grid>
        </TabPanel>

 {/* ======Vegetables Listing============ */}
        <TabPanel value={value} index={1} className='tabPanelBlock' availableNumber={availableNumber}>
        <Grid container  spacing={{ xs: 0,md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                {groceryFilterList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));

                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img alt='products' src={item.image} width="70%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)}>add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>                   
                </Grid>
                })}
            </Grid>     
        </TabPanel>

  {/* ======Fruitss Listing============ */}
        <TabPanel value={value} index={2} className='tabPanelBlock' availableNumber={availableNumber}>
        <Grid container  spacing={{ xs: 0,md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                {groceryFilterList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));

                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img alt='products' src={item.image} width="70%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)}>add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>                   
                </Grid>
                })}
            </Grid>
        </TabPanel>

  {/* ============================ */}
        <TabPanel value={value} index={3} className='tabPanelBlock' availableNumber={availableNumber}>
        <Grid container  spacing={{ xs: 0,md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                {groceryFilterList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));
                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img alt='products' src={item.image} width="70%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)}>add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>       
                </Grid>
                })}
            </Grid>
        </TabPanel>

{/* ============================ */}
        <TabPanel value={value} index={4} className='tabPanelBlock' availableNumber={availableNumber}>
        <Grid container  spacing={{ xs: 0,md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                {groceryFilterList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));
                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img alt='products' src={item.image} width="70%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)}>add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>                    
                </Grid>
                })}
            </Grid>
        </TabPanel>

{/* ============================ */}
        <TabPanel value={value} index={5} className='tabPanelBlock'  availableNumber={availableNumber}>
        <Grid container  spacing={{ xs: 0,md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                {groceryFilterList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));
                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img alt='products' src={item.image} width="70%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)}>add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>                   
                </Grid>
                })}
            </Grid>
        </TabPanel>

  {/* ============================ */}
        <TabPanel value={value} index={6} className='tabPanelBlock' availableNumber={availableNumber}>
        <Grid container  spacing={{ xs: 0,md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                {groceryFilterList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));
                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img alt='products' src={item.image} width="70%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)}>add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>                   
                </Grid>
                })}
            </Grid>
        </TabPanel>

{/* ============================ */}
        <TabPanel value={value} index={7} className='tabPanelBlock'  availableNumber={availableNumber}>
        <Grid container  spacing={{ xs: 0,md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                {groceryFilterList?.map((item,ind ) => {
                   const discountPrice = item.price - (item.price * (item.offer/100));
                return <Grid item xs={2} sm={4} md={4} className={item.isStockAvailable === 0 ? 'active'  : null} key={ind}>
                    <Item >
                        <GroceryCardBlock >
                            <OfferBlock>
                                    <OfferText>{item.offer}% OFF</OfferText>
                            </OfferBlock>
                            <ImageListingBlock>
                                <ImageBlock>
                                    {item.isStockAvailable === 0 ?
                                    <OutOfStockBlock>{item.isStockAvailable === 0 ?  "out of stock" : ""}</OutOfStockBlock> : ""}
                                    <img  alt='products' src={item.image} width="70%" />
                                </ImageBlock>
                            </ImageListingBlock>
                            <ItemNameBlock>{item.name}</ItemNameBlock>
                            <QuantityTextBlock>500 g - 600 g</QuantityTextBlock>
                            <PriceButtonBlock>
                                <PriceBlock>
                                    <PriceTextBlock>	&#8377; {discountPrice}</PriceTextBlock>
                                    <OfferPriceTextBlock>&#8377; {item.price}</OfferPriceTextBlock>
                                </PriceBlock>
                                <ButtonBlock>
                                    <Button variant="outlined" className='buttonBlock' disabled={item.isStockAvailable === 0} onClick={()=>props.getSelectedItem(item.id)}>add</Button>
                                </ButtonBlock>
                            </PriceButtonBlock>
                        </GroceryCardBlock>
                    </Item>                    
                </Grid>
                })}
            </Grid>
        </TabPanel>
      </MainContainerBlock>

      <style>{
          `
          .css-10d9dml-MuiTabs-indicator{
              width:3px;
              background-color:black;
          }
          .active{
              cursor-pointer:none;
              opacity:0.4;
          }
          #active{
            cursor-pointer:none;
            opacity:0.4;
          }
          .tabPanelBlock{
              width:100%;
          }
          .cateBlock::-webkit-scrollbar {
            display: none;
          }
          .cateBlock {
            -ms-overflow-style: none; 
            scrollbar-width: none; 
          }
          .buttonBlock{
            height: 50px; 
            width: 100px; 
            border: 1px solid grey;
            box-shadow: 0 0 2px rgba(0,0,0,0.75);
            color: green;
            text-transform: none;
            cursor:pointer;
          }
          @media (min-width: 900px) and (max-width: 1320px){
            .buttonBlock{
                height: 40px; 
                width: 80px; 
                margin-left:-20px;  
            }
        }
        @media (min-width: 680px) and (max-width: 900px){
            .buttonBlock{
                height: 40px; 
                width: 80px; 
                margin-left:-25px;  
            }
          }
          @media (min-width: 480px) and (max-width: 680px){
            .buttonBlock{
                height: 40px; 
                width: 50px; 
                margin-left:-25px;  
            }
          }
          @media (min-width: 360px) and (max-width: 480px){
            .buttonBlock{
                height: 40px; 
                width: 15px; 
                margin-left:-25px;  
            }
          }        
        @media (min-width: 361px) and (max-width: 460px){
            .buttonBlock{
                height: 35px; 
                margin-left:-25px;  
            }
        }
         @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
                .buttonBlock{
                    height: 40px; 
                    width:20px;
                    margin-left:-30px;  
                }
              } 
        .cateSlectimageBlock{
                width:100px;
                height:80px;
            }

        @media (min-width: 480px) and (max-width: 680px){
                .cateSlectimageBlock{
                    width:40px;
                    height:60px;
                    }
            }

        @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
                    .cateSlectimageBlock{
                    width:50px;
                    height:60px;
                    }
            }

        .tabActive{
                font-size:16px;
                font-weight: 700;
                color:black;
            }
        
        @media (min-width: 361px) and (max-width: 460px){
                .tabActive{
                    font-size:13px;
                    font-weight: 700;
                    color:black;
                }
            }

        @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
                .tabActive{
                    font-size:13px;
                    font-weight: 700;
                    color:black;
                }
        }
    `}
    </style> 
    </>
  );
};


//====TabPanel Section=============================
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <ProductListingBlock
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}>
        {value === index && (
            <>
            <NumberOfAvailableProducts>
                <TotalProductText>{props.availableNumber} Products</TotalProductText>
                <FilterIconBlock><FilterAltOutlinedIcon/></FilterIconBlock>
            </NumberOfAvailableProducts>
          <div style={{width:'100%', marginTop:'2px'}}>
            {children}
          </div>
          </>
        )}
      </ProductListingBlock>
    );
  }

//=================Style Components===============  
const GroceryTabBlock = styled.div`
    height: max-content;
    padding: 10px;
`
const GroceryTabText = styled.div`
    font-size:15px;
    color:grey;
    text-align:center;
    cursor:pointer;
    height:auto;
    @media (min-width: 900px) and (max-width: 1320px){
        font-size:12px;
    }
    @media (min-width: 360px) and (max-width: 460px){
        font-size:12px;
    }
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        font-size:12px;
        height:max-content;
    } 
`
const TotalProductText = styled.div`
    font-size:18px;
    color:grey;
    text-align:center;
`

const GroceryTabButton = styled.div`
    background-color: #F5F5F5;
    border-radius: 16px;
    height: max-content;
    display: flex;
    justify-content:center;
    align-items: flex-end;
    padding-top:40px;
    cursor:pointer;
`


const GroceryCardBlock = styled.div`
    height:max-content;
`
const OfferBlock = styled.div`
    height:max-content;
`

const OfferText = styled.div`
    background-color:#90EE90;
    width:15%;
    font-size:15px;
    color:white;
    @media (min-width: 900px) and (max-width: 1320px){
        width:35%;
    }
    @media (min-width: 461px) and (max-width: 680px){
        width:30%;
    }
    @media (min-width: 401px) and (max-width: 460px){
        width:35%;
    }
    @media (min-width: 361px) and (max-width: 400px){
        width:45%;
    }
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        width:30%;
        font-size:12px;
    }
`
const ImageListingBlock = styled.div`
    height:140px;
    display:flex;
    justify-content:center;
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        height:110px;
    }
`
const ImageBlock = styled.div`
    width:90%;
    margin:auto;
    height:max-content;
`
const ItemNameBlock = styled.div`
    font-size:18px;
    font-weight:700;
    text-align:start;
`
const QuantityTextBlock = styled.div`
    font-size:15px;
    font-weight:500;
    color:grey;
    text-align:start;
    margin-top:18px;
    margin-bottom:6px;
`
const PriceButtonBlock = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`
const PriceBlock = styled.div`
    width:100%;
    text-align:start;
`
const ButtonBlock = styled.div`
    width:30%;
    height:max-content;
`
const PriceTextBlock = styled.div`
    font-size:16px;
    font-weight:700;
    text-align:start;
    @media (min-width: 360px) and (max-width: 400px){
    font-size:12px;
    }
`
const OfferPriceTextBlock = styled.s`
    font-size:16px;
    font-weight:500;
    text-align:start;

    @media (min-width: 360px) and (max-width: 400px){
        font-size:12px;
    }
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
    }
`
const OutOfStockBlock = styled.div`
    position: absolute;
    margin:100px 0px 0px 100px;
    background-color: black;
    color: white; 
    font-weight: bold;
    padding: 1px 8px 2px 8px;
    border-radius: 4px;
    @media (min-width: 901px) and (max-width: 1200px){
        margin:30px 0px 0px 5px;
        width:15%;
    }
    @media (min-width: 681px) and (max-width: 900px){
        margin:24px 0px 0px 5px;
        width:23%;
    }
    @media (min-width: 480px) and (max-width: 680px){
        margin:30px 0px 0px 5px;
        width:25%;
    }
    @media (min-width: 360px) and (max-width: 480px){
        margin:30px 0px 0px 0px;
        width:25%;
    }
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        margin:30px 0px 0px 10px;
        width:30%;
    }
`
const NumberOfAvailableProducts = styled.div`
    height: 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:10px;
    box-shadow: 0 0 2px rgba(0,0,0,0.75);
`

const FilterIconBlock = styled.div`
    height: 50px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:7%;
    border-radius:8px 0px 0px 8px;
    box-shadow: 0 0 4px rgba(0,0,0,0.75);
    cursor:pointer;
    @media (min-width: 680px) and (max-width: 900px){
        width:10%;
    }
    @media (min-width: 480px) and (max-width: 680px){
        width:12%;
    }
    @media (min-width: 360px) and (max-width: 480px){
        width:18%;
    }
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        width:19%;
    } 
`

const CategorySelectBlock = styled.div`
    width:12%;
    box-shadow: 1px 0 5px 0px #888;
    border-right: 1px solid grey;
    height:710px;
    overflow-y:scroll;
    position:fixed;
    @media (min-width: 680px) and (max-width: 900px){
        width:15%;
    }
    @media (min-width: 580px) and (max-width: 680px){
        width:17%;
    }
    @media (min-width: 480px) and (max-width: 580px){
        width:20%;
    }
    @media (min-width: 360px) and (max-width: 480px){
        width:23%;
    }
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        width:20%;
    
        height:810px;
    } 
`
const MainContainerBlock = styled.div`
    display:flex;
    justify-content:space-between;
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        width:138%;
        height:max-content;
    } 
`
const ProductListingBlock = styled.div`
    width:90%;
    margin-left:190px;
    padding:3px 0px 0px 0px;
    height:max-content;
    @media (min-width: 1201px) and (max-width: 1320px){
        width:95%;
        margin-left:160px;
    }
    @media (min-width: 900px) and (max-width: 1200px){
        width:95%;
        margin-left:135px;
    }
    @media (min-width: 701px) and (max-width: 900px){
        width:95%;
        margin-left:125px;
    }
    @media (min-width: 680px) and (max-width: 700px){
        width:95%;
        margin-left:115px;
    }
    @media (min-width: 581px) and (max-width: 680px){
        width:95%;
        margin-left:105px;
    }
    @media (min-width: 461px) and (max-width: 580px){
        width:95%;
        margin-left:102px;
    }
    @media (min-width: 401px) and (max-width: 460px){
        width:100%;
        margin-left:100px;
    }
    @media (min-width: 360px) and (max-width: 400px){
        width:100%;
        margin-left:90px;
    }
    @media (min-width: 280px) and (max-width: 360px)  and (min-height: 450px) and (max-height: 600px){
        width:100%;
        margin-left:89px;   
    } 
` 
function getIndexValue(index) {
    return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    };
}
export default ProductListing;