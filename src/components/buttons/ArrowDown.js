import React from 'react'
import styled, {keyframes} from 'styled-components'

const flipOne = keyframes`
    0% {stroke:red}
    100% {stroke:red}`

const Icon = styled.svg `
    &:hover { 
        cursor: pointer;
        animation: ${flipOne} 2.5s linear infinite;
        stroke: yellow;
    };
`
const OuterTriangle = styled.polygon `
    fill: none;
    stroke-dasharray: 41;
    stroke-dashoffset: 2;
`
const InnerTriangle = styled.polygon `
        fill: none;
    `

const ArrowDown = props => {

    return (
        <Icon onClick={props.onClick} viewBox="0 0 89.3 38.9" width={props.width} height={props.height} style={props.style}>
            <OuterTriangle 
                points="44.6,38.2 87.9,0.5 1.3,0.5"
                stroke={props.colors && props.colors.length > 0 ? props.colors[0] : 'grey'}
            />
            <InnerTriangle 
                id='inner-triangle'
                points="44.6,30.3 69.8,8.4 20.5,8.4"
                stroke={props.colors && props.colors.length > 1 ? props.colors[1] : 'grey'}
            />
        </Icon>
    )
}



export default ArrowDown