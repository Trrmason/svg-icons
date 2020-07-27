import React, {useState} from 'react'
import Circles from './spinners/Circles'
import Stairs from './spinners/Stairs'
import Wheel from './spinners/Wheel'
import Triangles from './spinners/Triangles'
import DropDown from './cards/DropDown'
import { GithubPicker } from 'react-color';


const Spinners = () => {

    const [circles, setCircles] = useState({size:35, colors:[]})
    const [stairs, setStairs] = useState({size:35, colors:[], width:'20px'})
    const [wheel, setWheel] = useState({size:35, colors:[]})
    const [triangles, setTriangles] = useState({size:35, colors:[]})
    
    return (
        <div className='spinners-holder'>
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
            {/* <DropDown 
                    text='Triangles' 
                    width='25%' 
                    height='50%'
                    content={
                            <Triangles
                                size='30%' 
                                style= {{position:'absolute', left:'34%', bottom: '30%'}} 
                            />
                            }
            />
            <DropDown 
                    text='Triangles' 
                    width='25%' 
                    height='50%'
                    content={
                            <Triangles
                                size='30%' 
                                style= {{position:'absolute', left:'34%', bottom: '30%'}} 
                            />
                            }
            /> */}
        </div>
    )
}

export default Spinners