import React, { useState, useEffect,useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../App";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 3px solid #077915;
  margin-bottom: 2vh;
`;
const Image = styled.img`
  flex: 1;
  width: 0px;
`;
const DetailContainer = styled.div`
  padding: 10px;
  flex: 4;
`;
const RemoveButton = styled.button`
  margin: 0;
  height: 40%;
  background-color: #077915;
  color: white;
  border-radius: 5px;
  margin: 5px 5px;
  padding: 5px;
`;
export const CartItem = ({ item, i ,state,setstate}) => {
  
  
  const { cart, setcart } = useContext(CartContext);
 
  console.log(item);
   
  if (item!=null) {
    return (
      <Container>
        <Image src={item.image} />
        <DetailContainer>
          {item.name} <br></br>₹{item.price}
        </DetailContainer>
        <RemoveButton onClick={() => {
          console.log(item.id);
          cart.splice(i, 1);
          console.log(cart);
          setcart(cart)
          setstate(!state)
        }}>Remove</RemoveButton>
      </Container>
    );
  }
  return <></>
  
};
