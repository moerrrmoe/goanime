import { React,  useContext } from 'react'
import { useEffect,useState } from 'react'
import { jsonContext } from './App'
import Card from './card'
import './App.css'

function Suggestion() {
    const {data,setdata} = useContext(jsonContext)
    const [picked,setpicked] = useState()

    useEffect(() => {
      if(data){
        const currentPosts = data.data
        let temppicked = []
      function pickSuggestion (current){
        let i = 0
        while(temppicked.length < 5){
            let pickedIndex = Math.floor(Math.random() * current.length);
            
            if(temppicked.includes(current[pickedIndex])){
                console.log('already chose')
            }else{
                temppicked[i] = current[pickedIndex]
                i++
            }
        }
        setpicked(temppicked)
      }

      if(currentPosts.length > 5){
        pickSuggestion(currentPosts)
      }else{
        setpicked(currentPosts)
      }
      
    }
    }, [data])
    
    
  if(picked && picked.length > 0){
  return (
    <div className='w-full '>
      <div className='rounded-2xl bg-[#1b1d1e] m-1 mt-10 mb-5 pl-2 pb-0'>
        <h2 className='text-white text-2xl mb-5'>Suggestions</h2>
      <div className="no-scrollbar flex flex-row overflow-x-scroll ">
        {
          picked.map(
            (d,i)=>(
              <Card key={d.id} title={d.title} id={d.id} ep={d.episodes} poster={d.poster} />
            )
          )
        }
      </div>
      </div>
    </div>
  )}
}

export default Suggestion