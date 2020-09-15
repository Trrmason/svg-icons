import React from 'react'
import styled, {keyframes} from 'styled-components'


//keyframes
const shift = keyframes`
    50%{ transform: scaleY(2); }
    100%{ transform: scaleY(.5); }
`


//Styling
const Icon = styled.svg``

const RectOne = styled.rect`
    transform: scaleY(.5);
    transform-origin:center;
    animation: ${shift} 1.3s linear infinite;
`
const RectTwo = styled.rect`
    transform: scaleY(.5);  
    transform-origin:center;
    animation: ${shift} 1.3s linear infinite .16s;
`
const RectThree = styled.rect`
    transform: scaleY(.5);
    transform-origin:center;
    animation: ${shift} 1.3s linear infinite .32s;
`
const RectFour = styled.rect`
    transform: scaleY(.5);
    transform-origin:center;
    animation: ${shift} 1.3s linear infinite .5s;
`


const Load = (props) => {

    //load props || defaults
    const size = (props.size) ? props.size : '50'
    const width = (props.width) ? props.width : '20'
    
    return (
        <Icon viewBox="0 0 104 100" width={size} height={size} style={props.style}>
            <RectOne x="0.1" y="25" height="50" width={width} fill={props.colors && props.colors.length > 0 ? props.colors[0] : '#C38D9D'} />
            <RectTwo x="28.6" y="25" height="50" width={width} fill={props.colors && props.colors.length > 1 ? props.colors[1] : '#85CDCA'} />
            <RectThree x="56.5" y="25" height="50" width={width} fill={props.colors && props.colors.length > 2 ? props.colors[2] : '#FCC1C0'} />
            <RectFour x="84.4" y="25" height="50" width={width} fill={props.colors && props.colors.length > 3 ? props.colors[3] : 'teal'} />
        </Icon>
    )

}



export default Load