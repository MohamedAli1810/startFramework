import React from 'react'

export default function Footer() {
  return <>
   <footer className='bg-slate-700 text-white lg:ps-40 md:ps-11 sm:ps-16 py-20'>
    <div className='flex  justify-around  gap-y-24 lg:w-11/12  m-auto'>
        <div className='text-center'>
            <h3 className='font-bold'>LOCATION</h3>
            <p className='pb-2'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className='text-center'>
           <h3 className='font-bold'>AROUND THE WEB</h3>
           <div>
           <ul className='flex justify-center items-center  pt-2'>
            <li className='space-x-2   '>
                <i className='fab fa-facebook border-2 rounded-full p-2 '></i>
                <i className="fab fa-twitter border-2 rounded-full p-2"></i>
                <i className="fab fa-linkedin-in border-2 rounded-full p-2"></i>
                <i className="fa fa-globe border-2 rounded-full p-2"></i>
            </li>
           </ul>
           </div>
        </div>
        <div className='text-center'>
            <h3 className='font-bold'>ABOUT FREELANCER</h3>
            <p className='lg:w-[380px] sm:w-[200px] '>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
   </footer>
   <div className='text-center bg-slate-800 text-white py-4'>
    <h3 className='lg:me-20'>Copyright © Your Website 2021</h3>
   </div>
  </>
}
