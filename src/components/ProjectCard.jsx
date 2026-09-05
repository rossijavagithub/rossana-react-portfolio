import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({number,title,category,description,to,color,children}){
  return <Link className="portfolio-card" to={to} style={{'--card-color':color}}>
    <div className="card-top"><span>{number}</span><span>{category}</span><ArrowUpRight/></div>
    <div className="card-art">{children}</div>
    <div className="card-copy"><h3>{title}</h3><p>{description}</p></div>
  </Link>
}
