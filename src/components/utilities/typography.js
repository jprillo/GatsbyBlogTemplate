import styled from 'styled-components';

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 1.2em;
color: ${props => props.textColor};

@media (min-width: 576px) {
    font-size: 35px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 992px) {
    font-size: 60px;
  }
  @media (min-width: 1200px) {
    font-size: 60px;
  } 
`;


export const H2 = styled.h2`
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 1.2em;
padding-bottom: 2em;
color: ${props => props.theme.highlightColor};
font-family: ${props => props.theme.fontFamily};

text-shadow: -3px 5px 0px rgba(0, 0, 0, 0.6);
@media (min-width: 576px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
  }
  @media (min-width: 1200px) {
    font-size: 50px;
  } 
`;

export const H3 = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 1.2em;
color: #FFFFFF;
text-shadow: -3px 5px 0px rgba(0, 0, 0, 0.6);
@media (min-width: 576px) {
    font-size: 45px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 992px) {
    font-size: 60px;
  }
  @media (min-width: 1200px) {
    font-size: 74px;
  } 
`;

export const H4 = styled.h4`
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 1.2em;
color: #FFFFFF;
text-shadow: -3px 5px 0px rgba(0, 0, 0, 0.6);
@media (min-width: 576px) {
    font-size: 45px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 992px) {
    font-size: 60px;
  }
  @media (min-width: 1200px) {
    font-size: 74px;
  } 
`;

export const P = styled.p`
font-size: 20px;
line-height: 1.2em;
color: white;



@media (min-width: 576px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 992px) {
    font-size: 22px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  } 
`;
export const DarkText = styled(P)`
  color: black;
`;

