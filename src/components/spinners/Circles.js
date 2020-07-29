import React from 'react'
import styled, {keyframes} from 'styled-components'


//keyframes
const spinLeft = keyframes`
    33.3% { transform: translate3D(146px, 0px, 0px); }
    66.6% { transform: translate3D(73px,112px, 0px); }
`
const spinRight = keyframes`
    33.3% { transform: translate3D(-73px, 112px, 0px); }
    66.6% { transform: translate3D(-146px, 0px, 0px); }
`
const spinBottom = keyframes`
    33.3% { transform: translate3D(-73px, -112px, 0px); }
    66.6% { transform: translate3D(73px, -111px, 0px); }
`


//Styling
const Icon = styled.svg``

const LeftCircle = styled.circle`
    animation: ${spinLeft} 2.5s infinite;
`
const RightCircle = styled.circle`
    animation: ${spinRight} 2.5s infinite;
`
const BottomCircle = styled.circle`
    animation: ${spinBottom} 2.5s infinite;
`


const Circles = (props) => {
    
    const size = (props.size) ? props.size : '10px'

    return (
        <Icon viewBox='0 0 220 185' height={size} width={size} style={props.style}>
            <LeftCircle cx="36.5" cy="36.5" r="36" fill = {props.colors && props.colors.length > 0 ? props.colors[0] : '#C38D9D'}/>
            <RightCircle cx="182.5" cy="37.5" r="36" fill = {props.colors && props.colors.length > 1 ? props.colors[1] : '#85CDCA'}/>
            <BottomCircle  cx="109.5" cy="148.5" r="36" fill = {props.colors && props.colors.length > 2 ? props.colors[2] : '#FCC1C0'}/>
        </Icon>
    )
}


export default Circles