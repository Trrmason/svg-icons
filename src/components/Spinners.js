import React, {useState} from 'react'
import Circles from './spinners/Circles'
import Stairs from './spinners/Stairs'
import Wheel from './spinners/Wheel'
import Triangles from './spinners/Triangles'
import DropDown from './cards/DropDown'
import Pulse from './spinners/Pulse'
import Clack from './spinners/Clack'
import Holder from './Holder'
import Bounce from './spinners/Bounce'
import { TwitterPicker } from 'react-color'



const Spinners = () => {

    const [circles, setCircles] = useState({size:35, colorOne:'#FCC1C0', colorTwo:'#85CDCA', colorThree:'#C38D9D'})
    const [stairs, setStairs] = useState({size:35, colorOne:'#FCC1C0', colorTwo:'#85CDCA', colorThree:'#C38D9D', colorFour:'teal', width:20})
    const [wheel, setWheel] = useState({size:35, colorOne:'#FCC1C0', colorTwo:'#85CDCA', colorThree:'#C38D9D', colorFour:'teal'})
    const [triangles, setTriangles] = useState({size:35, colorOne:'#FCC1C0', colorTwo:'#85CDCA', colorThree:'#C38D9D', colorFour:'teal'})
    const [pulse, setPulse] = useState({size:35, colorOne: '#FCC1C0', colorTwo:'#FCC1C0'})
    const [clack, setClack] = useState({size:35, color: '#85CDCA'})
    const [bounce, setBounce] = useState({size:35, colorOne:'#FCC1C0', colorTwo:'#85CDCA', colorThree:'#C38D9D', colorFour:'teal'})
 
    return (
        <div className='spinners-holder'>
        <h1 className='title'> Spinners </h1>
            <DropDown
                    className='drop-down'
                    text='Circles'
                    content={
                            (circles.size > 0) &&
                            <Circles
                                size={`${circles.size}%`}
                                colors= {[circles.colorOne, circles.colorTwo, circles.colorThree]} 
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
                            <div className='color-holder'>
                                <label className='color-label'> Colors </label>
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setCircles({...circles, colorOne:color.hex})}/>}
                                    style={{backgroundColor: circles.colorOne, boxShadow: `0px 0px 3px ${circles.colorOne}`, left:'20%'}}
                                />
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setCircles({...circles, colorTwo:color.hex})} />}
                                    style={{backgroundColor: circles.colorTwo, boxShadow: `0px 0px 3px ${circles.colorTwo}`, left:'45%'}}
                                />
                                <Holder 
                                    content={ <TwitterPicker triangle='hide' width='300px'  onChange={(color) => setCircles({...circles, colorThree:color.hex})} />}
                                    style= {{backgroundColor: circles.colorThree, boxShadow: `0px 0px 3px ${circles.colorThree}`, left:'70%'}}
                                />
                            </div>
                        </>                        
                    }
            />
            <DropDown 
                    text='Pulse' 
                    content={
                            <Pulse
                                size={`${pulse.size}%`}
                                colors= {[pulse.colorOne, pulse.colorTwo]}  
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
                            <div className='color-holder'>
                                <label className='color-label'> Colors </label>
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setPulse({...pulse, colorOne:color.hex})} />}
                                    style={{backgroundColor: pulse.colorOne, boxShadow: `0px 0px 3px ${pulse.colorOne}`, left:'30%'}}
                                />
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setPulse({...pulse, colorTwo:color.hex})} />}
                                    style={{backgroundColor: pulse.colorTwo, boxShadow: `0px 0px 3px ${pulse.colorTwo}`, left:'60%'}}
                                />
                            </div>                     
                        </>
                    }
            />
            <DropDown 
                    text='Stairs' 
                    content={
                            <Stairs 
                                size={`${stairs.size}%`}
                                colors= {[stairs.colorOne, stairs.colorTwo, stairs.colorThree, stairs.colorFour]} 
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
                            <div className='color-holder'>
                                <label className='color-label'> Colors </label>
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px' onChange={(color) => setStairs({...stairs, colorOne:color.hex})}/>}
                                    style={{backgroundColor: stairs.colorOne, boxShadow: `0px 0px 3px ${stairs.colorOne}`, left:'10%'}}
                                />
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setStairs({...stairs, colorTwo:color.hex})} />}
                                    style={{backgroundColor: stairs.colorTwo, boxShadow: `0px 0px 3px ${stairs.colorTwo}`, left:'35%'}}
                                />
                                <Holder 
                                    content= {<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setStairs({...stairs, colorThree:color.hex})} />}
                                    style= {{backgroundColor: stairs.colorThree, boxShadow: `0px 0px 3px ${stairs.colorThree}`, left:'60%'}}
                                />
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setStairs({...stairs, colorFour:color.hex})} />}
                                    style= {{backgroundColor: stairs.colorFour, boxShadow: `0px 0px 3px ${stairs.colorFour}`, left:'85%'}}
                                />
                            </div>     
                        </>                    
                    }
            />

            <DropDown 
                    text='Wheel' 
                    content={
                            <Wheel 
                                size={`${wheel.size}%`}
                                colors= {[wheel.colorOne, wheel.colorTwo, wheel.colorThree, wheel.colorFour]} 
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
                            <div className='color-holder'>
                                <label className='color-label'> Colors </label>
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setWheel({...wheel, colorOne:color.hex})}/>}
                                    style={{backgroundColor: wheel.colorOne, boxShadow: `0px 0px 3px ${wheel.colorOne}`, left:'10%'}}
                                />
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setWheel({...wheel, colorTwo:color.hex})} />}
                                    style={{backgroundColor: wheel.colorTwo, boxShadow: `0px 0px 3px ${wheel.colorTwo}`, left:'35%'}}
                                />
                                <Holder 
                                    content= {<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setWheel({...wheel, colorThree:color.hex})} />}
                                    style= {{backgroundColor: wheel.colorThree, boxShadow: `0px 0px 3px ${wheel.colorThree}`, left:'60%'}}
                                />
                                <Holder 
                                    content= {<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setWheel({...wheel, colorFour:color.hex})} />}
                                    style= {{backgroundColor: wheel.colorFour, boxShadow: `0px 0px 3px ${wheel.colorFour}`, left:'85%'}}
                                /> 
                            </div>  
                        </>               
                    }
            />
            <DropDown 
                    text='Triangles' 
                    content={
                            <Triangles
                                size={`${triangles.size}%`}
                                colors=  {[triangles.colorOne, triangles.colorTwo, triangles.colorThree, triangles.colorFour]} 
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
                            <div className='color-holder'>
                                <label className='color-label'> Colors </label>
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setTriangles({...triangles, colorOne:color.hex})}/>}
                                    style={{backgroundColor: triangles.colorOne, boxShadow: `0px 0px 3px ${triangles.colorOne}`, left:'10%'}}
                                />
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setTriangles({...triangles, colorTwo:color.hex})} />}
                                    style={{backgroundColor: triangles.colorTwo, boxShadow: `0px 0px 3px ${triangles.colorTwo}`, left:'35%'}}
                                />
                                <Holder 
                                    content= {<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setTriangles({...triangles, colorThree:color.hex})} />}
                                    style= {{backgroundColor: triangles.colorThree, boxShadow: `0px 0px 3px ${triangles.colorThree}`, left:'60%'}}
                                />
                                <Holder 
                                    content= {<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setTriangles({...triangles, colorFour:color.hex})} />}
                                    style= {{backgroundColor: triangles.colorFour, boxShadow: `0px 0px 3px ${triangles.colorFour}`, left:'85%'}}
                                /> 
                            </div>                          
                        </>
                    }
            />
            <DropDown 
                    text='Clack' 
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
                            <div className='color-holder'>
                                <label className='color-label'> Colors </label>
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setClack({...clack, color:color.hex})} />}
                                    style={{backgroundColor: clack.color, boxShadow: `0px 0px 3px ${clack.color}`, left:'45%'}}
                                />
                            </div>                                         
                        </>
                    }
            />
             <DropDown 
                    text='Bounce' 
                    content={
                            <Bounce
                                size={`${bounce.size}%`}
                                colors= {[bounce.colorOne, bounce.colorTwo, bounce.colorThree, bounce.colorFour]} 
                                style= {{position:'absolute'}} 
                            />
                            }
                    adjust = {
                        <>
                            <label className='size-label' for='bounce-size'>Size</label>
                            <input 
                                className='size-input'
                                id='bounce-size' 
                                type='text'
                                min='1'
                                max='100' 
                                value={bounce.size}
                                onChange={e => setBounce({...bounce, size:e.target.value})}
                            />
                            <div className='color-holder'>
                                <label className='color-label'> Colors </label>
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setBounce({...bounce, colorOne:color.hex})}/>}
                                    style={{backgroundColor: bounce.colorOne, boxShadow: `0px 0px 3px ${bounce.colorOne}`, left:'10%'}}
                                />
                                <Holder 
                                    content={<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setBounce({...bounce, colorTwo:color.hex})} />}
                                    style={{backgroundColor: bounce.colorTwo, boxShadow: `0px 0px 3px ${bounce.colorTwo}`, left:'35%'}}
                                />
                                <Holder 
                                    content= {<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setBounce({...bounce, colorThree:color.hex})} />}
                                    style= {{backgroundColor: bounce.colorThree, boxShadow: `0px 0px 3px ${bounce.colorThree}`, left:'60%'}}
                                />
                                <Holder 
                                    content= {<TwitterPicker triangle='hide' width='300px'  onChange={(color) => setBounce({...bounce, colorFour:color.hex})} />}
                                    style= {{backgroundColor: bounce.colorFour, boxShadow: `0px 0px 3px ${bounce.colorFour}`, left:'85%'}}
                                /> 
                            </div>                                         
                        </>
                    }
            />
        </div>
    )
}

export default Spinners