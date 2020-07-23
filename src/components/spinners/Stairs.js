import React from 'react'


const Stairs = (props) => {

    //load props || defaults
    const size = (props.size) ? props.size : '50'
    const width = (props.width) ? props.width : '20'
    const colors = (props.colors) ? props.colors.map((color) => color) : ['#C38D9D','#85CDCA','#FCC1C0','teal']
    
    const leftColor = (props.leftCircleColor) ? props.leftCircleColor : '#C38D9D'
    const rightColor = (props.rightCircleColor) ? props.rightCircleColor : '#85CDCA' 
    const bottomColor = (props.bottomCircleColor) ? props.bottomCircleColor : '#FCC1C0' 

    const style = {
        rect0 : { fill: colors[0] },
        rect1 : { fill: colors[1] },
        rect2 : { fill: colors[2] },
        rect3 : { fill: colors[3] }
    }

    return (

        <svg version="1.1" id="stairs-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 109 100" xmlSpace="preserve" width={size} height={size}>
            <g id='rect-0'>
                <rect x="0.1" y="0.1" width= {width} height="99.8" style={style.rect0}/>
=            </g>
            <g id='rect-1'>
                <rect x="28.6" y="25.1" width= {width} height="74.8" style={style.rect1}/>
            </g>
            <g id='rect-2'>
                <rect x="56.5" y="50.1"  width= {width} height="49.8" style={style.rect2}/>
            </g>
            <g id='rect-3'>
                <rect x="84.4" y="75.1"  width= {width} height="24.8" style={style.rect3}/>
            </g>
        </svg>

    )

}



export default Stairs