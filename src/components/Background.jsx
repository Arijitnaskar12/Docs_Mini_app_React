import React from 'react'

const Background = () => {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
    <div className='w-full  absolute top-[5%] flex justify-center py-10 text-xl font6semibold text-zinc-600'>Documents</div>
      <h1 className='absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-zinc-900 font-semibold'>Docs.</h1>
    </div>
    </>
  )
}

export default Background