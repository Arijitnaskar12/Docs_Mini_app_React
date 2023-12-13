import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
const Card = ({description,fileSize,close,tag,reference}) => {
  return (
    <motion.div  drag  dragConstraints={reference}dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}  whileDrag={{scale:1.1}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[20px]  px-5 py-10 text-white overflow-hidden'>
        <FaFileAlt/>
        <p className='text-sm text-semibold leading-tight mt-5'>{description}</p>
        <div className='footer absolute bottom-0  w-full  left-0'>
            <div className='flex justify-between mb-3 py-3 px-8 items-center'>
                <h1>{fileSize}</h1>
                <span className='w-5 h-5 rounded-full flex justify-center items-center bg-zinc-600'>
                {close?<IoClose/>:<GoDownload size="0.7rem" color='#fff' />}
                </span>
            </div>
            {
                tag.isOpen&&(<div className={`tag  ${tag.tagColor=='blue'?"bg-blue-600":"bg-green-600"} text-center w-full py-4`}>{tag.tagTitle}</div>)
            }
            
        </div>
    </motion.div>
  )
}

export default Card