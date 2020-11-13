import React , {useState, useEffect}from 'react'


const Mouse = ()=>{
    const [position,setPosition] = useState({
        x:0,
        y:0
    })
    useEffect(()=>{
        console.log('add useEffect', position.x)
        const a = (e:MouseEvent)=>{
            console.log('inner')
            setPosition({
                x:e.clientX,
                y:e.clientY
            })
        }
        document.addEventListener('click',a)
        return ()=>{
            console.log('removeEventListener', position.x)
            document.removeEventListener('click',a)
        }
    })
    console.log()
    return <div>
        X:{
        position.x
        }
        Y:{
        position.y
        }
    </div>
}
export default Mouse
