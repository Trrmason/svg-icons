import React from 'react'
import styled, {keyframes} from 'styled-components'

const yScale = .65
const xScale = 1.25

const bounceOnce = keyframes`
    -10%{opacity: 0;}
    0%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
        }
    12.5%{transform: scale(.85,1.15) translate(0,-17px);
      opacity: 1;
       }
    24.999%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
        }
    25%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 0;
    }
`

    const bounceTwo = keyframes`
    24.99%{opacity: 0;}
    25%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
       }
    37.5%{transform: scale(.85,1.15) translate(0,-17px);
          opacity: 1;
        }
    49.999%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
        }
    50%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 0;
    }
`

    const bounceThree = keyframes`
    49.99%{opacity: 0;}
    50%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
       }
    62.5%{transform: scale(.85,1.15) translate(0,-17px);
          opacity: 1;
        }
    74.999%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
        }
    75%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 0;
    }
`

    const bounceFour = keyframes`
    74.99%{opacity: 0;}
    75%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
       }
    87.5%{transform: scale(.85,1.15) translate(0,-17px);
          opacity: 1;
        }
    99.999%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 1;
        }
    100%{transform: scale(${xScale}, ${yScale}) translate(0,36px);
        opacity: 0;
    }
`

const rotate = keyframes`
    0{transform: rotate(0deg)}
    25%{transform: rotate(10deg)}
    50%{transform: rotate(-10deg)}
    75%{transform: rotate(10deg)}
    100%{transform: rotate(-10deg)}
`

const Icon = styled.svg`
    ${'' /* animation: ${rotate} 4.5s ease infinite; */}

`

const CircleOne = styled.circle`
    opacity: 0;
    transform-origin: center;
    animation: ${bounceOnce} 4s ease infinite;
`
const CircleTwo = styled.circle`
    opacity: 0;
    transform-origin: center;
    animation: ${bounceTwo} 4s ease infinite;
`

const CircleThree = styled.circle`
    opacity: 0;
    transform-origin: center;
    animation: ${bounceThree} 4s ease infinite;
`

const CircleFour = styled.circle`
    opacity: 0;
    transform-origin: center;
    animation: ${bounceFour} 4s ease infinite;
`


const Bounce = props =>{

    const size = props.size || '50'

    return (
        <Icon 
            viewBox="0 0 67 67" 
            width={size} 
            height={size} 
            style={props.style}
        >
            <CircleOne cx="33.5" cy="33.5" r="12" fill={props.colors && props.colors.length > 0 ? props.colors[0] : '#C38D9D'} />
            <CircleTwo cx="33.5" cy="33.5" r="12" fill={props.colors && props.colors.length > 1 ? props.colors[1] : '#85CDCA'} />
            <CircleThree cx="33.5" cy="33.5" r="12" fill={props.colors && props.colors.length > 2 ? props.colors[2] : '#FCC1C0'} />
            <CircleFour cx="33.5" cy="33.5" r="12" fill={props.colors && props.colors.length > 3 ? props.colors[3] : 'teal'} />
        </Icon>
    )
}


export default Bounce