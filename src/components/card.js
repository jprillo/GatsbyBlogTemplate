import React from 'react'

import styled from 'styled-components';

export const CardContainer = styled.div`
width: 320px ;



`;

export const CardImageContainer = styled.div`
height: 180px ;
background: yellow;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
  
`;
export const CardTextContainer = styled.div`
height: 150px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
background: white;

padding: 5%;
`;



export default function Card(props) {
    return (
  <CardContainer>
      <CardImageContainer>

      </CardImageContainer>
      <CardTextContainer>
            <h3 style={{paddingBottom: "20px"}}>Card Title</h3>
            <p>{props.text}</p>
      </CardTextContainer>


  </CardContainer>


    )
}
