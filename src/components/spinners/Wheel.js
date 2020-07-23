import React from 'react'
import styled, {keyframes} from 'styled-components'

//keyframes
const spin = keyframes`
    100%{ transform: rotate(360deg); }
`

//Styling
const Icon = styled.svg`
    animation: ${spin} 1.5s infinite;
`

const LegOne = styled.path`
    transformOrigin: center;
`

const LegTwo = styled.path`
    transformOrigin: center; 
`

const LegThree = styled.path`
    transformOrigin: center;
    `

const LegFour = styled.path`
    transformOrigin: center;
`

const Circle = styled.circle``


const Wheel = (props) => {

    const size = (props.size) ? props.size : '50'

    return (

        <Icon viewBox="0 0 53 53" height={size} width={size} style={props.style}>
            <LegOne d="M3.5,29.5c-1.7,0-3-1.3-3-3s1.3-3,3-3h46c1.7,0,3,1.3,3,3s-1.3,3-3,3H3.5z"
                    fill={props.colors && props.colors.length > 0 ? props.colors[0] : '#C38D9D'}
            />
            <LegTwo d="M42.8,45.8c-0.8,0-1.6-0.3-2.1-0.9L8.1,12.4c-1.2-1.2-1.2-3.1,0-4.2c0.6-0.6,1.3-0.9,2.1-0.9
                       c0.8,0,1.6,0.3,2.1,0.9l32.5,32.5c1.2,1.2,1.2,3.1,0,4.2C44.3,45.4,43.6,45.8,42.8,45.8z"
                    fill={props.colors && props.colors.length > 1 ? props.colors[1] : '#85CDCA'}       
            />
            <LegThree d="M10.2,45.8c-0.8,0-1.6-0.3-2.1-0.9c-1.2-1.2-1.2-3.1,0-4.2L40.6,8.1c0.6-0.6,1.3-0.9,2.1-0.9
                         c0.8,0,1.6,0.3,2.1,0.9c1.2,1.2,1.2,3.1,0,4.2L12.4,44.9C11.8,45.4,11,45.8,10.2,45.8z"
                      fill={props.colors && props.colors.length > 2 ? props.colors[2] : '#FCC1C0'}
            />
            <LegFour d="M26.5,52.5c-1.7,0-3-1.3-3-3v-46c0-1.7,1.3-3,3-3s3,1.3,3,3v46C29.5,51.2,28.2,52.5,26.5,52.5z"
                     fill={props.colors && props.colors.length > 3 ? props.colors[3] : 'teal'}
            />
            <Circle  cx="26.5" cy="26.5" r="12.5" fill={props.innerColor || 'white'}/>
        </Icon>
    )
}



export default Wheel