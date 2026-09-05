import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import AlmaStore from './pages/AlmaStore'
import BrillaCampaign from './pages/BrillaCampaign'
import NexoDashboard from './pages/NexoDashboard'
import ExperimentLab from './pages/ExperimentLab'
import EmailStudio from './pages/EmailStudio'

function ScrollTop(){
  const {pathname,hash}=useLocation()
  useEffect(()=>{
    let timer
    if(hash){timer=setTimeout(()=>document.querySelector(hash)?.scrollIntoView(),0)}
    else{window.scrollTo(0,0)}
    return()=>clearTimeout(timer)
  },[pathname,hash])
  return null
}

export default function App(){
  return <><ScrollTop/><Header/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/alma-store" element={<AlmaStore/>}/>
    <Route path="/brilla" element={<BrillaCampaign/>}/>
    <Route path="/nexo-dashboard" element={<NexoDashboard/>}/>
    <Route path="/experiment-lab" element={<ExperimentLab/>}/>
    <Route path="/email-studio" element={<EmailStudio/>}/>
  </Routes></>
}
