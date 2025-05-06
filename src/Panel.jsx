import React, { useContext, useState } from 'react'
import PanelCard from './PanelCard'
import './panel.css'
import { jsonContext } from './App'

function Panel() {
    const {data,setdata} = useContext(jsonContext)

    const updateHandler = (updated,id) => {
        const tempData = data.data.map(
            (d) => (d.id == id? updated : d)
        )
        const newData = { ...data,uploaded: tempData[tempData.length-1].id, data: tempData };
        setdata(newData);
        fetch('/saveData.php', { // change this URL as per your setup
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
        .then(response => response.text())
        .then(result => {
            console.log('Server response:', result);
        })
        .catch(error => {
            console.error('Error sending data to PHP:', error);
        });
    }

    const deleteHandler = (id) => {
        const updated = data.data.filter(d=> d.id != id)
        setdata({...data,data:updated})
    }

    const addNew = () => {
        setdata({...data,data:[...data.data, {
            title: "",
              id: data.uploaded+1,
              review: "This is a placeholder review for a random anime.",
              poster: "https://placehold.co/600x900",
              genre: [],
              year: 2025,
              studio: "",
              episodes: {
                  1 : "#",
              }
        }]})
    }
    if(data){
  return (
    <>
    <button onClick={()=>addNew()}>Add New</button>
    <div className='bg-white flex flex-col-reverse'>
        
        {
            data.data.map(
                (d,i) => (<PanelCard deleteHandler={deleteHandler} finalHandler={updateHandler} id={d.id} key={d.id} title={d.title} review={d.review} poster={d.poster} genre={d.genre} studio={d.studio} year={d.year} episodes={d.episodes}/>)
            )
        }
    </div>
    </>
  )
}}

export default Panel