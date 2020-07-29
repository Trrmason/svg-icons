import React from 'react'
import styled, {keyframes} from 'styled-components'


//keyframes
const grow = keyframes`
    0% {
        transform: scale(.8);
       }

    50% {

        transform: scale(1.05);
    }

    100% {

        transform: scale(.8);
        }
`

const pulse = keyframes`
    0% {
        stroke-width: 10px;
        stroke-opacity: 1;
        transform: scale(.1);
       }

    100% {
        stroke-width: 0;
        stroke-opacity: 0;
        transform: scale(1.5);
        }
`

//Styling
const Icon = styled.svg``

const Circle = styled.circle`
    transform-origin: center;
    animation: ${grow} 2s infinite;
`
const PulseCircle = styled.circle`
    fill: none;
    animation: ${pulse} 2s infinite;
    transform-origin: center;
`

const Pulse = (props) => {

    //load props || defaults
    const size = props.size ? props.size : '50'
    
    return (
        <Icon 
            viewBox="0 0 67 67" 
            width={size} 
            height={size} 
            style={props.style}
        >
            <PulseCircle cx="33.5" cy="33.5" r="22" stroke={props.colors && props.colors.length > 1 ? props.colors[1] : '#FCC1C0'}/>
            <Circle cx="33.5" cy="33.5" r="18" fill={props.colors && props.colors.length > 0 ? props.colors[0] : '#FCC1C0'}/>
        </Icon>
    )

}



export default Pulse