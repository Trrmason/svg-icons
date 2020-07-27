import React from 'react'
import styled, {keyframes} from 'styled-components'


//keyframes
const shiftOne = keyframes`
    50%{ transform: scaleY(.25); }
`
const shiftTwo = keyframes`
    50%{ transform: scaleY(.66); }
`
const shiftThree = keyframes`
    50%{ transform: scaleY(1.5); }
`
const shiftFour = keyframes`
    50%{ transform: scaleY(4); }
`

//Styling
const Icon = styled.svg``

const RectOne = styled.rect`
    transform-origin:bottom;
    animation: ${shiftOne} 1.5s linear infinite;
`
const RectTwo = styled.rect`
    transform-origin:bottom;
    animation: ${shiftTwo} 1.5s linear infinite;
`
const RectThree = styled.rect`
    transform-origin:bottom;
    animation: ${shiftThree} 1.5s linear infinite;
`
const RectFour = styled.rect`
    transform-origin:bottom;
    animation: ${shiftFour} 1.5s linear infinite;
`


const Stairs = (props) => {

    //load props || defaults
    const size = (props.size) ? props.size : '50'
    const width = (props.width) ? props.width : '20'
    
    return (
        <Icon viewBox="0 0 100 100" width={size} height={size} style={props.style}>
            <RectOne x="0.1" y="0.1" height="99.8" width={width} fill={props.colors && props.colors.length > 0 ? props.colors[0] : '#C38D9D'} />
            <RectTwo x="28.6" y="25.1" height="74.8" width={width} fill={props.colors && props.colors.length > 1 ? props.colors[1] : '#85CDCA'} />
            <RectThree x="56.5" y="50.1" height="49.8" width={width} fill={props.colors && props.colors.length > 2 ? props.colors[2] : '#FCC1C0'} />
            <RectFour x="84.4" y="75.1" height="24.8" width={width} fill={props.colors && props.colors.length > 3 ? props.colors[3] : 'teal'} />
        </Icon>
    )

}



export default Stairs