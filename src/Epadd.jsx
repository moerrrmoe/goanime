import React from 'react'
import { useState } from 'react'

function Epadd({add}) {
    const [chapter, setchapter] = useState()
    const [link, setlink] = useState()

    const chapterHandler = (ch)=>{
        setchapter(ch)
    }
    const linkHandler = (link)=>{
        setlink(link)
    }
  return (
    <div>
        <label>Chapter:</label>
        <input className='border-2 border-red-400 mb-1 mt-1' type="number" onChange={(e)=>chapterHandler(e.target.value)} /><br />
        <label>Link:</label>
        <input className='border-2 border-red-400 mb-1 mt-1' type="text" onChange={(e)=>linkHandler(e.target.value)} /><br/>
        <button onClick={()=>add(false,chapter,link)}>Submit</button>
    </div>
  )
}

export default Epadd