import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

function Row({title, fetchURL, rowID}) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

   const sliderLeft = ()=> {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
   }

   const sliderRight = ()=> {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
   }

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft 
        onClick={sliderLeft}
        className='bg-white left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer hidden z-10 group-hover:block'  size={40}/>
        <div id={'slider' + rowID } className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
           {movies.map((item, id) => (
             <Movie key={id} item={item}/>
           ))} 
        </div>
        <MdChevronRight 
        onClick={sliderRight}
        className='bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer hidden z-10 group-hover:block' size={40}/>
    </div>
    </>
  )
}

export default Row