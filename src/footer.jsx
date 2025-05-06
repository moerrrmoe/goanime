import React from 'react'

function Footer() {
  return (
    <>
        <div className='footer-container text-center bg-[#1b1d1e] p-5'>
            <div className='footer-logo text-5xl text-white'>
                GOAnime
            </div>
            <div className='cr-footer text-xs text-[#696d6f] mb-3'>
            Copyright © GOAnime. All Rights Reserved
            </div>
            <div className='disclaimer text-xs text-[#696d6f]'>
            Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.
            </div>
        </div>
    </>
  )
}

export default Footer