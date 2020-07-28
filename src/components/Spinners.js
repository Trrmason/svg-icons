import React, {useState} from 'react'
import Circles from './spinners/Circles'
import Stairs from './spinners/Stairs'
import Wheel from './spinners/Wheel'
import Triangles from './spinners/Triangles'
import DropDown from './cards/DropDown'
import { GithubPicker } from 'react-color';
import Pulse from './spinners/Pulse'
import Clack from './spinners/Clack'


const Spinners = () => {

    const [circles, setCircles] = useState({size:35, colors:[]})
    const [stairs, setStairs] = useState({size:35, colors:[], width:20})
    const [wheel, setWheel] = useState({size:35, colors:[]})
    const [triangles, setTriangles] = useState({size:35, colors:[]})
    const [pulse, setPulse] = useState({size:35, color: ''})
    const [clack, setClack] = useState({size:35, color: ''})
    
    return (
        <div className='spinners-holder'>
        <h1 className='title'> Spinners </h1>
            <DropDown 
                    text='Circles' 
                    width='25%' 
                    height='20%'
                    expand='30%'
                    content={
                            (circles.size > 0) &&
                            <Circles
                                size={`${circles.size}%`}
                                colors= {circles.colors} 
                                style= {{position:'absolute'}} 
                            />
                            }
                    adjust = {
                        <>
                            <label className='size-label' for='circle-size'>Size</label>
                            <input
                                className='size-input'
                                id='circle-size' 
                                type='text'
                                min='1'
                                max='100' 
                                value={circles.size}
                                onChange={e => setCircles({...circles, size:e.target.value})}
                            />
                        </>                        
                    }
            />
            <DropDown 
                    text='Stairs' 
                    width='25%' 
                    height='20%'
                    expand='30%'
                    content={
                            <Stairs 
                                size={`${stairs.size}%`}
                                colors= {stairs.colors}
                                width= {stairs.width}  
                                style= {{position:'absolute'}} 
                            />
                            }
                    adjust = {
                        <>
                            <label className='size-label' for='stairs-size'>Size</label>
                            <input
                                className='size-input' 
                                id='stairs-size' 
                                type='text'
                                min='1'
                                max='100' 
                                value={stairs.size}
                                onChange={e => setStairs({...stairs, size:e.target.value})}
                            />
                            <label className='width-label' for='stairs-width'>Width</label>
                            <input
                                className='width-input' 
                                id='stairs-width' 
                                type='text'
                                min='1'
                                max='100' 
                                value={stairs.width}
                                onChange={e => setStairs({...stairs, width:e.target.value})}
                            />     
                        </>                    
                    }
            />

            <DropDown 
                    text='Wheel' 
                    width='25%' 
                    height='20%'
                    expand='30%'
                    content={
                            <Wheel 
                                size={`${wheel.size}%`}
                                colors= {wheel.colors} 
                                style= {{position:'absolute'}} 
                            />
                            }
                    adjust = {
                        <>
                            <label className='size-label' for='wheel-size'>Size</label>
                            <input
                                className='size-input'
                                id='wheel-size' 
                                type='text'
                                min='1'
                                max='100' 
                                value={wheel.size}
                                onChange={e => setWheel({...wheel, size:e.target.value})}
                            />         
                        </>               
                    }
            />
            <DropDown 
                    text='Triangles' 
                    width='25%' 
                    height='20%'
                    expand='30%'
                    content={
                            <Triangles
                                size={`${triangles.size}%`}
                                colors= {triangles.colors}  
                                style= {{position:'absolute'}} 
                            />
                            }
                    adjust = {
                        <>
                            <label className='size-label' for='triangles-size'>Size</label>
                            <input 
                                className='size-input'
                                id='triangles-size' 
                                type='text'
                                min='1'
                                max='100' 
                                value={triangles.size}
                                onChange={e => setTriangles({...triangles, size:e.target.value})}
                            />                        
                        </>
                    }
            />
           <DropDown 
                    text='Pulse' 
                    width='25%' 
                    height='20%'
                    expand='30%'
                    content={
                            <Pulse
                                size={`${pulse.size}%`}
                                color= {pulse.color}  
                                style= {{position:'absolute'}} 
                            />
                            }
                    adjust = {
                        <>
                            <label className='size-label' for='pulse-size'>Size</label>
                            <input 
                                className='size-input'
                                id='pulse-size' 
                                type='text'
                                min='1'
                                max='100' 
                                value={pulse.size}
                                onChange={e => setPulse({...pulse, size:e.target.value})}
                            />                        
                        </>
                    }
            />
            <DropDown 
                    text='Clack' 
                    width='25%' 
                    height='20%'
                    expand='30%'
                    content={
                            <Clack
                                size={`${clack.size}%`}
                                color= {clack.color}  
                                style= {{position:'absolute'}} 
                            />
                            }
                    adjust = {
                        <>
                            <label className='size-label' for='clack-size'>Size</label>
                            <input 
                                className='size-input'
                                id='clack-size' 
                                type='text'
                                min='1'
                                max='100' 
                                value={clack.size}
                                onChange={e => setClack({...clack, size:e.target.value})}
                            />                        
                        </>
                    }
            />
        </div>
    )
}

export default Spinners