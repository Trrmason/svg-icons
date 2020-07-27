import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import ArrowDown from '../buttons/ArrowDown'
import ArrowUp from '../buttons/ArrowUp'

const Card = styled.div`
    box-shadow: 0px 0px 4px grey;
    position: relative;
    margin: 4.1%;
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

    const [height, setHeight] = useState(props.height || '50%')
    const [width, setWidth] = useState(props.width || '25%')
    const [expanded, setExpanded] = useState(false)

    return (
           <Card 
                style = {{
                    height: height,
                    width: width,
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
                        width='3.6vw' 
                        height='1.2vw'
                        style={{position:'absolute', left:'40.5%', bottom:'2%'}}
                        onClick={() => (!expanded) && setHeight(props.expand) & setExpanded(true)}
                    /> :
                    <ArrowUp 
                        width='3.6vw' 
                        height='1.2vw'
                        style={{position:'absolute', left:'40.5%', bottom:'2%'}}
                        onClick={() => (expanded) && setHeight(props.height) & setExpanded(false)}
                    />
                }

            </Card>
    )
}




export default DropDown 