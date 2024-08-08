import React from 'react'
import photoHome from '/Users/mohamedali/Desktop/forntend/route/startFramework/framework/src/components/image/imgae2.svg'

export default function Home() {
  return <>
  <div className='h-screen bg-green-600 flex flex-col justify-center items-center py-12'>
    <div>
        <img src={photoHome} width={150} className='py-12' alt="" />
    </div>
    <div className='text-white pb-5'>
        <h2 className='font-bold uppercase text-3xl'>start Framework</h2>
    </div>
    <div className='flex items-center gap-x-7 pb-5'>
        <div className='line'></div>
        <div><i className='fa fa-star text-white'></i></div>
        <div className='line'></div>
    </div>
    <div className='text-white'>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
  </>
}
