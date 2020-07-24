import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';


const CardStyle = styled.div`
    transition: box-shadow .3s;
    width: 220px;
    height: 220px;
    float: left;
    margin: 15px;
    border-radius:10px;
    border: 2px solid #ccc;
    color: black;
    
    &:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.5);
        cursor: hand;
        background-color: rgb(240,240,240);
      }
`;

const Card = (props) => {
  
    const [categoryDetail, setCategoryDetail]= useState("")
    const handleSetCategoryDetail = (name) => setCategoryDetail(name)

    useEffect(() => {
        const fetchData = async () => {
         
            const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${props.categoryName}`);
            
            handleSetCategoryDetail(response.data)
    
          
        } 
        fetchData();
       
      },[props.categoryName]);
    
    const handleOnClick = () => {
        alert(categoryDetail);

    }


 return (
    <>
        <CardStyle>
            <div className="card-link" style={{textAlign:"center", padding:"0px 5px 0px 5px"}} onClick={() => handleOnClick()} > 
                {
                    props.categoryName
                }
            </div>

         </CardStyle>
    </>
 )
}

export default Card;

