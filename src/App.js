import React from 'react'
import Circles from './components/spinners/Circles'
import Stairs from './components/spinners/Stairs'
import Wheel from './components/spinners/Wheel'
import Triangles from './components/spinners/Triangles'



const App = () => {

    return (
        <>
            <div style={{width:'10%', height:'25%', position:'absolute', left:'25%', top:'25%', boxShadow: '1px 1px 3px black'}}>
                <Circles size='50%' style={{position:'absolute', left:'25%',  bottom:'25%'}}/>
            </div>
            <div style={{width:'10%', height:'25%', position:'absolute', left:'40%', top:'25%', boxShadow: '1px 1px 3px black'}}>
                <Stairs size='50%' width='15' style={{position:'absolute', left:'25%',  bottom:'25%'}}/>
            </div>
            <div style={{width:'10%', height:'25%', position:'absolute', left:'55%', top:'25%',  boxShadow: '1px 1px 3px black'}}>
                <Wheel  size='50%' style={{position:'absolute', left:'25%',  bottom:'25%'}}/>
            </div>
            <div style={{width:'10%', height:'25%', position:'absolute', left:'70%', top:'25%',  boxShadow: '1px 1px 3px black'}}>
                <Triangles size='50%' style={{position:'absolute', left:'25%',  bottom:'25%'}}/>
            </div>
        </>
    )
}


export default App