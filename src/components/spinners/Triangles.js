import React from 'react'
import styled, {keyframes} from 'styled-components'

//keyframes
const flipOne = keyframes`
    25% {transform: rotate3d(0,1,0,180deg)}
    50% {transform: rotate3d(0,0,1,180deg)}
    75% {transform: rotate3d(1,0,0,180deg)}
`
const flipTwo = keyframes`
    25% {transform: rotate3d(1,0,0,180deg)}
    50% {transform: rotate3d(0,0,1,180deg)}
    75% {transform: rotate3d(0,1,0,180deg)}
`
const flipThree = keyframes`
    25% {transform: rotate3d(0,1,0,180deg)}
    50% {transform: rotate3d(0,0,1,180deg)}
    75% {transform: rotate3d(1,0,0,180deg)}
`
const flipFour = keyframes`
    25% {transform: rotate3d(1,0,0,180deg)}
    50% {transform: rotate3d(0,0,1,180deg)}
    75% {transform: rotate3d(0,1,0,180deg)}
`

//Styling
const Icon = styled.svg``

const TriangleOne = styled.polygon`
    transform-origin:center;
    animation: ${flipOne} 2.5s linear infinite;
`
const TriangleTwo = styled.polygon`
    transform-origin:center;
    animation: ${flipTwo} 2.5s linear infinite;
`
const TriangleThree = styled.polygon`
    transform-origin:center;
    animation: ${flipThree} 2.5s linear infinite;
`
const TriangleFour = styled.polygon`
    transform-origin:center;
    animation: ${flipFour} 2.5s linear infinite;
`



const Triangles = (props) => {

    const size = (props.size) ? props.size : '50'
    
    return (
        <Icon viewBox="0 0 584.2 506" width={size} height={size} style={props.style}>
            <TriangleOne points="293,505.5 438.2,254.1 583.3,505.5"
                         fill={props.colors && props.colors.length > 0 ? props.colors[0] : '#C38D9D'}         
            />
            <TriangleTwo points="0.9,505.5 146.1,254.1 291.2,505.5"
                         fill={props.colors && props.colors.length > 1 ? props.colors[1] : '#85CDCA'}
            />
            <TriangleThree points="0.9,0.5 291.1,0.5 146,251.9"
                           fill={props.colors && props.colors.length > 2 ? props.colors[2] : '#FCC1C0'}
            />
            <TriangleFour points="293,0.5 583.2,0.5 438.1,251.9"
                          fill = {props.colors && props.colors.length > 3 ? props.colors[3] : 'teal'}
            />
        </Icon>
    )
}


export default Triangles