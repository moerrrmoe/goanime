import { useState,useContext,createContext, useEffect } from 'react'
import React from 'react'
import Header from './header'
import Slider from './slider'
import Social from './social'
import Card from './card'
import Gallery from './gallery'
import Footer from './footer'
import Post from './post'
import Panel from './Panel'
import jsonData from './data.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { jsonContext } from './App'
import Suggestion from './suggestion'



function Home() {

  return (
    <>
    
    <div>
          <Slider />
          <Social />
          <Gallery />
          <Suggestion />
    </div>
    </>
  )
}

export default Home
