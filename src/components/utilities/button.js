import React from 'react';

import styled from 'styled-components'
import { Link } from 'gatsby';



export const PrimaryButton = styled(props => <Link {...props} />)`
color: white;
background: ${props => props.theme.primaryColor};
font-size: 22px;
padding: .5em 2em ;
border: 5px solid ${props => props.theme.primaryColor};
margin: .5em 1em .5em 0;
cursor: pointer;
text-decoration: none;
text-align: center;
align-content: center;
max-width: 200px;
@media (min-width: 992px) {
    margin: 1em 1em 1em 0;
  }
&:hover{
    background: ${props => props.theme.hoverColor};
    color: white;
    border-color: ${props => props.theme.hoverColor};
}
&:active{
    background: ${props => props.theme.activeColor};
    color: white;
    border-color: ${props => props.theme.activeColor};
}
`;

export const BorderButton = styled(PrimaryButton)`
color: ${props => props.theme.primaryColor};
background: none;
border: 5px solid ${props => props.theme.primaryColor};
`;


