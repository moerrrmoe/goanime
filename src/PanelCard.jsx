import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Epadd from './Epadd'

function PanelCard({title,review,poster,genre,year,studio,episodes,finalHandler,id,deleteHandler}) {

    const [tempTitle, settempTitle] = useState(title)
    const [tempReview, settempReview] = useState(review)
    const [tempEp, settempEp] = useState(episodes)
    const [tempGenre, settempGenre] = useState(genre)
    const [tempPoster, settempPoster] = useState(poster)
    const [tempYear, settempYear] = useState(year)
    const [tempStudio, settempStudio] = useState(studio)
    const [singleObj, setsingleObj] = useState()
    const [addEp, setaddEp] = useState(false)
    const [doneEp, setdoneEp] = useState(true)
    const detailInput = useRef()
    const displayBtn = useRef()
    const epElement = useRef()
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!file) return;
  
      const formData = new FormData();
      formData.append('myfile', file);
  
      const response = await fetch('https://midnightblue-raccoon-754324.hostingersite.com/upload%20file.php', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.text();
      settempPoster(result)
    };

    const titleHandler = (title) => {
        settempTitle(title)
        console.log(title)
    }
    const reviewHandler = (review) => {
        settempReview(review)
        console.log(review)
    }
    const submitHandler = () => {
        setsingleObj((prevObj)=>({title: tempTitle, review: tempReview,id:id,poster:tempPoster,genre:tempGenre,year:tempYear,studio:tempStudio,episodes:tempEp}))
        displayBtn.current.style.display = "block"
        detailInput.current.style.display = "none"
    }
    const epHandler = (ep, value) => {
        // Create a copy of tempEp and update the specific episode value
        settempEp((prevEp) => ({
          ...prevEp,
          [ep]: value // Update the episode with the new value
        }))
      }
    const displayHandler = () => {
        detailInput.current.style.display = "block"
        displayBtn.current.style.display = "none"
    }
    const genreHandler = (genres) => {
      settempGenre(genres.split(','))
    }
    const posterHandler = (poster) => {
      settempPoster(poster)
    }
    const yearHandler = (year) => {
      settempYear(year)
    }
    const studioHandler = (studio) => {
      settempStudio(studio)
    }
      const addHandler = (wantAdd,ch,link) => {
        if(!wantAdd && ch==null && link==null){
            setaddEp(true)
        }else if(!wantAdd && ch!=null && link!=null){
            settempEp ((prevEp)=>({...prevEp,[ch]:link}))
            setaddEp(false)
        }else if(wantAdd){
            setaddEp(false)
        }
      }

      const epShow = () => {
        setdoneEp(false)
        epElement.current.style.display = "block"
      }

      const epHide = () => {
        setdoneEp(true)
        epElement.current.style.display = "none"
      }
    useEffect(() => {
      if(singleObj){
        finalHandler(singleObj,id)
      }
    }, [singleObj])
    
    
  return (
    <div  className='panel-card text-black p-4 border-2 border-black m-1'>
        <label>Title:</label><br />
        <input className='border-2 border-red-400' placeholder='Enter anime title....'  type="text" value={tempTitle} onChange={(e)=>titleHandler(e.target.value)} /><br />
        <button onClick={()=>deleteHandler(id)}>Delete</button>
        <button ref={displayBtn} onClick={displayHandler}>Edit</button>
        <div ref={detailInput} className='detail-input' style={{display:"none"}}>
        <label>Review:</label><br />
        <input placeholder='Enter review of the anime.....' className='panel-input w-full h-20 border-2 border-red-400' type="text" value={tempReview} onChange={(e)=>reviewHandler(e.target.value)}/><br />
        <label>Poster:</label><br />
        <input value={tempPoster} onChange={(e)=>posterHandler(e.target.value)} className='border-2 border-red-400' placeholder='input poster image link' type="text" /><br />
        <form onSubmit={handleSubmit}>
          <input name='uploadFile' className='mt-1 mb-1 mr-1 bg-gray-300 border-2 shadow-2xl max-w-[100px]' type="file" onChange={handleFileChange} />
          <input className='file-input rounded-2xl pl-1 pr-1 border-black border-2 bg-yellow-300 text-black-50' type="submit" name='submit' value='upload'/>
        </form>
        <label>Genre:</label><br />
        <input className='border-2 border-red-400' type="text" value={tempGenre} onChange={(e)=>genreHandler(e.target.value)} placeholder='input genres like action,drama,harem' /><br />
        <label>Year</label><br />
        <input value={tempYear} onChange={(e)=>yearHandler(e.target.value)} className='border-2 border-red-400' type="number" placeholder='input when this anime is produced'  /><br />
        <label>Studio</label><br />
        <input value={tempStudio} onChange={(e)=>studioHandler(e.target.value)} className='border-2 border-red-400' type="text" placeholder='input which studio produced this' /><br />
        {doneEp ? <button onClick={()=>epShow()}>Edit Ep</button> : <button onClick={()=>epHide()}>Done</button>}
        <div className='border-2 border- black' ref={epElement} style={{display: "none"}}>
        {
            addEp ? <Epadd add={addHandler} />: <button onClick={()=>addHandler(addEp,null,null)}>Add Ep</button>
        }
        {
            Object.keys(tempEp).reverse().map(
                (ep,i) => (
                    <div>{ep}:<input className='border-2 border-red-400 mb-2' type='text' value={tempEp[ep]} onChange={(e)=>epHandler(ep,e.target.value)}></input></div>
                )
            )
        }
        </div>
        <br />
        <button onClick={()=>submitHandler()}>Submit</button><br />
        </div>
        
    </div>
  )
}

export default PanelCard