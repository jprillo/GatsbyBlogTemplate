import React from 'react'
import { PrimaryContainer, FullscreenFlexRow} from '../utilities/container'
import {H2, P} from '../utilities/typography'
import zebra from "../../images/zebra.png"
import {ImageCaption} from '../image'


export default function Mission() {
    return (
        <FullscreenFlexRow>
            <PrimaryContainer pad="1%" >        
                      <img alt= "zebra" style={{height: "100%", objectFit: "fill" }} src={zebra}/>   
                       <ImageCaption></ImageCaption>                  
            </PrimaryContainer>
            <PrimaryContainer pad="5%" >
            <H2>Zebra LongWing Butterfly</H2> 
           <P>
The Zebra Longwing Butterfly is of medium size for a butterfly with a wingspan between 72 and 100mm. It has elongated wings with black and yellow stripes on the wings. The yellow often appears to be white giving it the zebra pattern it's common name comes from. 
A zebra longwing's abdomen is black with white and red spots. Male and female Zebra Longwings are generally i</P>
            </PrimaryContainer>            
        </FullscreenFlexRow>

    )
}
