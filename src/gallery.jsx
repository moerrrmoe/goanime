import React from 'react'
import Card from './card'
import { useContext } from 'react'
import { jsonContext } from './App'
import { useNavigate } from 'react-router-dom'

function Gallery() {
  const {data,setdata} = useContext(jsonContext)
  

  if(data){
    console.log(data.data)
  }
  if(!data){
    return "Loading"
  }
  return (
    <>
        <div className='gallery-container bg-black p-3 pb-0'>
            <div className='gallery-title text-2xl text-white mb-5'>
                Recently Updated
            </div>
            <div className='cards grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 '>
              {
                data.data.map(
                  (d,i)=>(
                    <Card key={d.id} title={d.title} id={d.id} ep={d.episodes} poster={d.poster} />
                  )
                )
              }
            </div>
        </div>
    </>
  )
}

export default Gallery