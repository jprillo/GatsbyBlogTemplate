import styled from 'styled-components'




export const HeroContainer = styled.div`
background: ${props => props.primaryColor};
padding: 5%;
height: 90vh;
display: flex;
flex-direction: row;
color: ${props => props.textColor};
font-family: 'Rubik', sans-serif;   
@media (max-width: 768px) {
   flex-direction: column;
  } 
`;

export const HeroHeadline = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 1.2em;
color: #FFFFFF;

@media (min-width: 576px) {
    font-size: 45px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 992px) {
    font-size: 50px;
  }
  @media (min-width: 1200px) {
    font-size: 50px;
  } 
`;

export const HeroHeadlineTwo = styled.h2`

color: ${props => props.theme.primaryColor};
font-style: italic;
font-weight: 400;
font-size: 40px;
line-height: 65px;


@media (max-width: 768px) {
    font-size: 30px;
    line-height: 35px;
    
   } 
`;

export const HeroParagraph = styled.p`
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 30px;
color: ${props => props.textColor};

`;

export const HeroText = styled.div`
width: 50%;

`;
export const HeroImageContainer = styled.div`
width: 50%;
`;
    