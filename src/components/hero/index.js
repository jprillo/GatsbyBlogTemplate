import React from 'react'
import {Container, FlexRow} from '../utilities/container'
import {H1} from '../utilities/typography'
import {PrimaryButton, BorderButton} from '../utilities/button'

import {
    HeroContainer,
    HeroHeadlineTwo,
    HeroParagraph
} from './style'
import image from '../../images/heroImage.svg'

export default function Hero(props) {
    return (
        <HeroContainer>
           
            <Container pad="5% 0 0 5%" >
                <H1>{props.title}</H1>
                <HeroHeadlineTwo>{props.secondaryTitle}</HeroHeadlineTwo>
                <HeroParagraph>{props.heroParagraph}</HeroParagraph> 
                <FlexRow>
                    <PrimaryButton as="a" href={props.primaryLink} >{props.primaryButton}</PrimaryButton>
                    <BorderButton as="a" href={props.secondaryLink}>{props.secondaryButton}</BorderButton>                    
                </FlexRow>            
            </Container>
            <Container >

                <img width="100%" src={image} alt="i need more money"/>
            </Container>            
        </HeroContainer>

    )
}
