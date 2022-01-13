import React from 'react';

import {FlexRow} from '../components/utilities/container'
import Card from '../components/card'

function CardRow (props) {
    return ( 
        <FlexRow>
            <Card text={props.text}></Card>
       
         
        </FlexRow>
     );
}

export default CardRow;