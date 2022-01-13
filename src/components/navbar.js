import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';
import logo from '../images/icon.png'
export const NavLink = styled(props => <Link {...props} />)`
  padding: 1em;
  margin: 1em;
  text-decoration: none;
   color: ${props => props.theme.PrimaryColor};
   font-family: ${props => props.theme.fontFamily};
   font-size: 20px;

   &:hover{
     color: ${props => props.theme.hoverColor};
   }
   &:active{
    color: ${props => props.theme.activeColor};
  }
`;
export const TopNavWrap = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 1em 5%;
 
  
`;

export const NavWrap = styled.div`
display: none;
  @media (min-width: 992px) {
 display: block;
  }
 
`;

export const LogoWrapper = styled(props => <Link {...props} />)`
  width: 100px;
`;



export const HamburgerWrap = styled.div`
position: relative;
display: block;
width: 40px;
height: 40px;    
z-index:1000;

margin-left: auto;
@media (min-width: 992px) {
  display: none;
}
  
`;


export const BurgerLine = styled.div.attrs(props => ({
  position: props.position, 
  
}))`
top: ${props => props.position};
background: ${props => props.theme.primaryColor};
position: absolute;
height: 10%;
width:70%;
background:$primary-color;
box-shadow: .5px .5px black;
border-radius:10px;
transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.32s;
`;
export default function Navbar({data}) {
    return (
        <div >
            <TopNavWrap>
            <LogoWrapper to="/">
                <img width="60px" src={logo} alt="logo holder"/>
            </LogoWrapper>
            <NavWrap>
            <NavLink to="/">HOME</NavLink>
            
             {data.allMarkdownRemark.edges.map(({ node }) => (
                

  <NavLink  key={node.id} to={node.fields.slug}>{node.frontmatter.title}</NavLink>

 

 
))}
         </NavWrap>
         <HamburgerWrap>
           <BurgerLine position="25%"></BurgerLine>
           <BurgerLine position="47%"></BurgerLine>
           <BurgerLine position="69%"></BurgerLine>
         </HamburgerWrap>
        </TopNavWrap> 
        </div>
    )
}
