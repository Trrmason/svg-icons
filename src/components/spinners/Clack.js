import React from 'react'
import styled, {keyframes} from 'styled-components'


//keyframes


const spin = keyframes`
    0% {
        stroke-dashoffset: 30;
        opacity: 1;
        transform: rotate(0deg)
       }

    50% {
        opacity: .5;
        transform: rotate(180deg)
        }
    
    100% {
        opacity: 1;
        stroke-width: 2px;
        transform: rotate(360deg)
    }

`

//Styling
const Icon = styled.svg``

const Circle = styled.circle`
    fill: none;
    stroke-width: 2px;
    transform-origin: center;
    stroke-dasharray: 162;
    stroke-dashoffset: 1000;
    animation: ${spin} 6s linear infinite;
`

const Clack = props => {

    //load props || defaults
    const size = (props.size) ? props.size : '50'
    
    return (
        <Icon 
            viewBox="0 0 67 67" 
            width={size} 
            height={size} 
            style={props.style}
        >
            <Circle cx="33.5" cy="33.5" r="26" stroke={props.color || '#85CDCA'}/>
        </Icon>
    )

}



export default Clack