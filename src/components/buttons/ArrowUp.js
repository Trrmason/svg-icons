import React from 'react'
import styled, {keyframes} from 'styled-components'



const grow = keyframes`
    100% {transform: scale(1);
          opacity: 1;}
    `

const Icon = styled.svg `
    &:hover { 
        cursor: pointer;
    };
    &:hover > polygon:nth-child(1){ 
        cursor: pointer;
        animation: ${grow} 1s forwards;
    };
`

const OuterTriangle = styled.polygon `
    transform-origin: center;
    fill: none;
    stroke-dasharray: 41;
    stroke-dashoffset: 2;
    transform: scale(.57);
    opacity: 0;
`
const InnerTriangle = styled.polygon `
    fill: none;
`


const ArrowUp = props => {

    return (
        <Icon onClick={props.onClick} viewBox="0 0 89.3 38.9" width={props.width} height={props.height} style={props.style}>
            <OuterTriangle 
                points="44.6,0.5 87.9,38.2 1.3,38.2 "
                stroke={props.colors && props.colors.length > 0 ? props.colors[0] : 'grey'}
            />
            <InnerTriangle 
                points="44.6,8.4 69.8,30.3 19.5,30.3 "
                stroke={props.colors && props.colors.length > 1 ? props.colors[1] : 'grey'}
            />
        </Icon>
    )
}



export default ArrowUp