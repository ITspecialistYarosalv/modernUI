import React from 'react';
import './App.css';
import { Article,Brand,CTA,Feature,Navbar } from './components';
import { Footer,Possibility,Features,What,Header,BLog } from './container';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <What/>
        <Features/>
        <Possibility/>
        <CTA/>
        <BLog/>
        <Footer/>
    </div>
  )
}

export default App;