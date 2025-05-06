import React from 'react'
import { useContext,useState,useEffect,useRef } from 'react'
import { jsonContext } from './App'
import { useParams } from 'react-router-dom'
import Popup from './popup'
import Suggestion from './suggestion'

function Post() {
    const {data,setdata} = useContext(jsonContext)
    const {id} = useParams()
    const [single,setsingle] = useState()
    const [currentEP,setcurrentEp] = useState()
    const [currentLink,setcurrentLink] = useState()
    const popupElement = useRef()

    const popupHandler = (ep,link) => {
        setcurrentEp(ep)
        setcurrentLink(link)
        popupElement.current.style.display = "flex"
    }

    const popupClose = () => {
        popupElement.current.style.display = "none"
    }
    
    
    useEffect(() => {
        if (data && data.data) {
          const filtered = data.data.filter(d => d.id == id);
          setsingle(filtered[0]); // Just one item, not an array
        }
      }, [data, id]);
      
    
  if(single){
  return (
    <div className='post-container bg-black p-3'>
        <div className='detail-container w-full bg-[#1b1d1e] rounded-2xl overflow-hidden'>
            <img className='post-poster w-40 m-3' src={single.poster}/>
            <div className='post-title text-white text-2xl ml-5'>
            {single.title}
            </div>
            <div className='post-review text-[#696d6f] text-sm pl-5 pb-5'>
                <p>
                    {single.review}
                </p>
            </div>
        </div>
        <div className='eplist-container flex flex-row flex-wrap  mt-10 text-white p-5 w-full bg-[#1b1d1e] rounded-2xl overflow-hidden'>
            {
                Object.keys(single.episodes).map(
                    (ep,i)=>(
                        <div onClick={()=>popupHandler(ep,single.episodes[ep])} className='digit-box mr-3 border-3 pt-1 pb-1 pr-8 pl-8 mb-2 bg-[#696d6f] border-blue-600 rounded-lg'>
                            {ep}
                        </div>
                    )
                )
            }
            
        </div>
        <div ref={popupElement} style={{display:"none"}}  className='overlay fixed top-0 left-0 w-[100vw] h-[100vh] justify-center items-center z-999'>
            
            <div style={{boxShadow:"10px 10px skyblue"}} className='popup box- bg-white relative w-[200px]'>
            <button onClick={popupClose} className='popup-close float-right border-2 border-red-500'>close</button><br />
               <Popup ep={currentEP} link={currentLink} /> 
            </div>
        </div>
        <Suggestion />
    </div>
  )
}}

export default Post