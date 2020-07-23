import React from 'react'
import Circles from './components/spinners/Circles'
import Stairs from './components/spinners/Stairs'


const App = () => {

    return (
        <>
            <div style={{width:'10%', height:'15%', position:'absolute', left:'25%', top:'25%'}}>
                <Circles size='100%'/>
            </div>
            <div style={{width:'10%', height:'15%', position:'absolute', left:'40%', top:'25%'}}>
                <Stairs size='100%' width='20'/>
            </div>
        </>
    )
}


export default App