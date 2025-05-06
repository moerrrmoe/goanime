import React from 'react'
import { SiTelegram } from "react-icons/si";

function Social() {
  return (
    <div className='social-container bg-black flex flex-row w-full p-2 '>
        <div className='social-items items-center flex flex-row pl-4 pb-1 pt-1 bg-blue-600 w-30 max-w-60 text-blue-300 rounded-sm'>
            <SiTelegram size="30" />
            <div className='ml-3 text-white'>
                Join<br />
                <span className='text-[10px]'>
                    53K sub
                </span>
            </div>
        </div>
    </div>
  )
}

export default Social