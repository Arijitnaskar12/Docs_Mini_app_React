import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const data=[{
        description:"Officia duis nisi occaecat ea veniam.lorem ipsum i love my country",
        fileSize:"0.9mb",
        close:true,
        tag:{
            isOpen:true,
            tagTitle:"Download Now",
            tagColor:"blue"
        }
    },
    {
        description:"Officia duis nisi occaecat ea veniam.lorem ipsum i love my country",
        fileSize:"0.9mb",
        close:true,
        tag:{
            isOpen:true,
            tagTitle:"Download Now",
            tagColor:"green"
        }
    },{
        description:"Officia duis nisi occaecat ea veniam.lorem ipsum i love my country",
        fileSize:"0.9mb",
        close:true,
        tag:{
            isOpen:false,
            tagTitle:"Download Now",
            tagColor:"blue"
        }
    }]
    const ref=useRef(null);
  return (
    <div ref={ref} className='w-full h-full fixed top-0 left-0 z-[3] flex gap-5  p-5 flex-wrap'>
       {
        data.map((item,index)=>(
            <Card {...item} reference={ref}/>
        ))
       }


       
    </div>
  )
}

export default Foreground