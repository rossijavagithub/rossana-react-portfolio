import { useEffect, useState } from 'react'
import { ArrowRight, Camera, Check, Play, Sparkles } from 'lucide-react'
import ProjectIntro from '../components/ProjectIntro'
import { BrillaLogo } from '../components/Logos'

function useCountdown(){const [time,setTime]=useState({d:12,h:8,m:34,s:18});useEffect(()=>{const timer=setInterval(()=>setTime(t=>{let total=t.d*86400+t.h*3600+t.m*60+t.s-1;return{d:Math.floor(total/86400),h:Math.floor(total/3600)%24,m:Math.floor(total/60)%60,s:total%60}}),1000);return()=>clearInterval(timer)},[]);return time}

export default function BrillaCampaign(){
  const time=useCountdown(),[registered,setRegistered]=useState(false),[email,setEmail]=useState('')
  const submit=e=>{e.preventDefault();if(email)setRegistered(true)}
  return <main className="project-page brilla-page"><ProjectIntro eyebrow="PROYECTO 02 · CAMPAÑA DIGITAL" title="Brilla Festival" text="Identidad y landing de conversión para un encuentro ficticio de creatividad, música y nuevas ideas." tags={['React','useEffect','Formulario','Responsive','Marketing']}><BrillaLogo/></ProjectIntro>
    <section className="brand-site brilla-site"><div className="brilla-nav"><BrillaLogo/><nav><a href="#lineup">Line-up</a><a href="#experiencia">Experiencia</a><a href="#entradas">Entradas</a></nav><a className="ticket-button" href="#entradas">Consigue tu entrada <ArrowRight/></a></div>
      <section className="brilla-hero"><div className="brilla-star">✦</div><div className="brilla-copy"><span>MADRID · 20—21 SEPTIEMBRE</span><h2>VEN A<br/><em>BRILLAR</em></h2><p>Dos días para descubrir ideas, personas y sonidos que encienden algo dentro de ti.</p><a className="round-play" href="#lineup"><Play fill="currentColor"/> Ver programa</a></div><div className="brilla-poster"><div className="poster-face"><i></i><b></b><span></span></div><div className="poster-note">CREATIVIDAD<br/>SIN FILTROS</div></div></section>
      <section className="countdown"><span>COMENZAMOS EN</span>{Object.entries(time).map(([key,value])=><div key={key}><strong>{String(value).padStart(2,'0')}</strong><small>{{d:'DÍAS',h:'HORAS',m:'MIN',s:'SEG'}[key]}</small></div>)}</section>
      <section className="lineup" id="lineup"><span className="mini-title">LINE-UP</span><h2>Ideas que se escuchan.<br/>Música que se siente.</h2><div className="lineup-list">{['Marta Cerdà — Diseño que emociona','The New Color — Live Set','Lucía Be — Crear sin miedo','Studio Norte — Marcas con alma'].map((name,i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><button><ArrowRight/></button></article>)}</div></section>
      <section className="experience-grid" id="experiencia"><article><Sparkles/><h3>Charlas que inspiran</h3><p>Conversaciones honestas con personas que están cambiando la forma de crear.</p></article><article><Camera/><h3>Espacios para compartir</h3><p>Instalaciones, talleres y rincones llenos de color para vivir y contar.</p></article><article><Play/><h3>Música hasta tarde</h3><p>Una programación que mezcla nuevos talentos, electrónica y energía.</p></article></section>
      <section className="signup" id="entradas"><div><span>PRIMERA EDICIÓN</span><h2>Que no te lo<br/>cuenten.</h2></div>{registered?<div className="success-box"><Check/><h3>¡Ya estás dentro!</h3><p>Te hemos reservado un lugar en la lista.</p></div>:<form onSubmit={submit}><label htmlFor="festival-email">Tu email</label><div><input id="festival-email" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="hola@email.com" required/><button>Quiero mi entrada <ArrowRight/></button></div><small>Recibirás novedades y acceso anticipado. Sin ruido.</small></form>}</section>
    </section>
  </main>
}
