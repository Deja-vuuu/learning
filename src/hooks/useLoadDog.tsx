import {useState, useEffect, useRef} from 'react'
import axios from 'axios'

interface IData {
    message: string;
    status: string;
}
const  useLoadDog = (url:string, deps:any[] =[]): [  {
    message: string;
    status: string;
},
    boolean]=>{
    const [data,setData] = useState <IData>({message:'', status:''})
    const [loading,setLoading] = useState(true)
    const didMountRef = useRef(true)
    useEffect(()=>{
        setLoading(true)
        axios.get(url)
            .then( (response) =>{
                setLoading(false  )
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },deps)
    useEffect(()=>{
        if (didMountRef.current){
        }else {
            didMountRef.current = true
        }
    })
    return [data,loading]
}
export default useLoadDog


