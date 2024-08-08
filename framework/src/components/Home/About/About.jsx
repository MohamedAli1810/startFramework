import React from 'react'

export default function About() {
  return <>
    <div className='h-screen bg-green-600 flex flex-col justify-center items-center py-12'>
    <div className='text-white pb-5'>
        <h2 className='font-bold uppercase text-5xl'>about component</h2>
    </div>
    <div className='flex items-center gap-x-7 pb-5'>
        <div className='line'></div>
        <div><i className='fa fa-star text-white'></i></div>
        <div className='line'></div>
    </div>
    <div className='text-white flex justify-center sm:items-center sm:gap-y-5 sm:flex-col lg:flex-row '>
        <p className='w-1/2 px-12'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='w-1/2 px-12'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
  </>
}
