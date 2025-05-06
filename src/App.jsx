import React, { useState, useEffect, createContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './header';
import Slider from './slider';
import Social from './social';
import Card from './card';
import Gallery from './gallery';
import Footer from './footer';
import Post from './post';
import Panel from './Panel';
import Home from './Home';
import Suggestion from './suggestion';

import jsonData from './data.json';

export const jsonContext = createContext();

function App() {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch('/data.json')  // Adjust URL as needed
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setdata(json);
                console.log('Fetched JSON:', json);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
  }, []);

  if(data){
  return (
    <>
    <jsonContext.Provider value={{ data, setdata }}>
      <HashRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animes' element={<Gallery />} />
          <Route path='/animes/:id' element={<Post />} />
          <Route path='/admin-panel' element={<Panel />} />
        </Routes>
        <Footer />
      </HashRouter>
    </jsonContext.Provider>
    </>
  );
}}

export default App;
