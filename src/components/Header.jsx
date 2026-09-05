import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RossanaLogo } from './Logos'

export default function Header(){
  const [open,setOpen]=useState(false)
  const close=()=>setOpen(false)
  return <header className="site-header">
    <Link className="logo-link" to="/" onClick={close}><RossanaLogo/><span>Rossana Maguiña</span></Link>
    <button className="menu-button" aria-label="Abrir menú" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
    <nav className={open?'nav-open':''}>
      <NavLink to="/" onClick={close}>Inicio</NavLink>
      <Link to="/#proyectos" onClick={close}>Proyectos</Link>
      <Link to="/#sobre-mi" onClick={close}>Sobre mí</Link>
      <a className="nav-cta" href="mailto:rossana.maguina@gmail.com">Hablemos</a>
    </nav>
  </header>
}
