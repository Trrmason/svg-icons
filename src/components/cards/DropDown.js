import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import ArrowDown from '../buttons/ArrowDown'
import ArrowUp from '../buttons/ArrowUp'


const active = keyframes`
    100%{
        height: 25%
    }
`

const mobileActive = keyframes`
    100%{
        height: 20%
    }
`

const deActive = keyframes`
    0%{
        height: 25%
    }
    100%{
        height: 20%
    }
`

const deMobileActive = keyframes`
    0%{
        height: 20%
    }
    100%{
        height: 15%
    }
`

const Card = styled.div`
    box-shadow: 0px 0px 4px grey;
    position: relative;
    margin: 4.1%;
    animation: ${deActive} .5s ease forwards;
    width: 25%;
    height: 20%;
    @media (max-width: 1000px){
        width: 41.5%;
        height: 15%;
        animation: ${deMobileActive} .5s ease forwards;
    }
`

const ActiveCard = styled.div`
    box-shadow: 0px 0px 4px grey;
    position: relative;
    margin: 4.1%;
    width: 25%;
    height: 20%;
    animation: ${active} .5s ease forwards;
    @media (max-width: 1000px){
        width: 41.5%;
        height: 15%;
        animation: ${mobileActive} .5s ease forwards;
    }
`


const Text = styled.h1`
    position: absolute;
    font-family: comfortaa;
    color: rgb(105, 105, 105);
    font-size: 2vw;
    width: 100%;
    text-align: center;
    top: 0%;
    line-height: 1vw;
`

const Content = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Adjust = styled.span`
    position: absolute;
    width: 100%;
    height: 10%;
    bottom: 5%;
`

const DropDown = props => {

    const [expanded, setExpanded] = useState(false)

    return (
           <Card 
                as = {(expanded) && ActiveCard}
                style = {{
                    float: props.float || 'left'
                }}
            >

                <Text>
                    {props.text}
                </Text>

                <Content
                    style = {{
                        bottom : expanded && '10%'
                    }}
                >
                    {props.content}
                </Content>

                {(expanded) &&
                    <Adjust>
                        {props.adjust}
                    </Adjust>
                }

                {(!expanded) ?
                    <ArrowDown 
                        width='4vw' 
                        height='1.5vw'
                        style={{display: 'flex',
                                width: '100%',
                                position: 'absolute',
                                justifyContent: 'center',
                                alignItems: 'center',
                                bottom:'2%'}}
                        onClick={() => (!expanded) && setExpanded(true)}
                    /> :
                    <ArrowUp 
                        width='4vw' 
                        height='1.5vw'
                        style={{display: 'flex',
                                width: '100%',
                                position: 'absolute',
                                justifyContent: 'center',
                                alignItems: 'center',
                                bottom:'2%'}}
                        onClick={() => (expanded) && setExpanded(false)}
                    />
                }

            </Card>
    )
}




export default DropDown 