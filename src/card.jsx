import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ep,title,poster,id}) {
  const tempKeys = Object.keys(ep)
  const navigate = useNavigate()

  console.log(tempKeys)
  return (
    <div className='mb-5 mr-3' onClick={()=>navigate(`/animes/${id}`)}>
    <div className='card-container bg-white h-[200px] relative w-30 rounded-xl overflow-hidden'>
        <img src={poster} className='poster h-[100%] w-[100%]' />
        <div className='ep-count absolute right-0 bottom-0 bg-sky-600 p-1 rounded-tl-xl text-white'>
            Ep {tempKeys.reverse()[0]}
        </div>
        <div className='hd-tag absolute bottom-0 left-0 bg-sky-600 p-1 rounded-tr-xl text-white'>
            HD
        </div>
    </div>
    <div className='flex-none card-title text-gray-400 text-center w-30'>
            {title}
    </div>
    </div>
  )
}

export default Card