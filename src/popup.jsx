import React from 'react'

function Popup({ep,link}) {
  return (
    <div className='p-5'>
        <h3>Download Episode {ep}</h3>
        <a className='underline text-blue-500' href={link}>Download Here</a>
    </div>
  )
}

export default Popup