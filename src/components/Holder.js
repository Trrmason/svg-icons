import React, {useState} from 'react'
import styled from 'styled-components'


const Div = styled.div`
        position: absolute;
        top: 5%;
        left: 35%;
        width: 12%;
        height: 35%;
        cursor: pointer;
        border-radius: 25%;
    `

const Holder = props => {

    const [show, setShow] = useState(false)

    return (
        <>
            <Div style={props.style} onClick={() => setShow(!show)}>
                {(show) &&  props.content }
            </Div>

        </>
    )
}




export default Holder