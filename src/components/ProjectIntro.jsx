import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectIntro({eyebrow,title,text,tags,children}){
  return <section className="project-intro"><Link to="/" className="back-link"><ArrowLeft size={18}/> Portfolio</Link><div className="project-intro-grid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p><div className="tag-row">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="project-logo-stage">{children}</div></div></section>
}
