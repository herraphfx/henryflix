import React from 'react'

import SaveShows from '../components/SaveShows'


function Account() {
  return (
    <>
    
       <div className='w-full text-white'>
       <img className='w-full h-[400px] object-cover' 
       src='https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/c9f4a403-94a8-4aa8-9fdf-a9839172ad3b/MU-en-20220627-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        
        <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
    </div>
    <SaveShows/>
    </>
 
  )
}

export default Account