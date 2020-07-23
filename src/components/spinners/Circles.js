import React from 'react'
import './spinners.css'

const Circles = (props) => {
    
    //load props || defaults
    const size = (props.size) ? props.size : '10px'
    const colors = (props.colors) ? props.colors.map((color) => color) : ['#C38D9D','#85CDCA','#FCC1C0']

    //Styling
    const style = {
        leftCircleStyle : { fill: colors[0] },
        rightCircleStyle : { fill: colors[1] },
        bottomCircleStyle : { fill: colors[2] },
    }

    return (
    
        <svg id='circles-svg' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 230 185" xmlSpace="preserve" height={size} width={size}>
            <g id="bottom-circle" style={style.bottomCircleStyle}>
                <circle cx="109.5" cy="148.5" r="36"/>
            </g>
            <g id="right-circle" style={style.rightCircleStyle}>
                <circle cx="182.5" cy="37.5" r="36"/>
            </g>
            <g id="left-circle" style={style.leftCircleStyle}>
                <circle cx="36.5" cy="36.5" r="36"/>
            </g>
        </svg>
    )
}


export default Circles