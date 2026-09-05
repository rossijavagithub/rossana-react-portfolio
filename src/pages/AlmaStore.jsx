import { useMemo, useState } from 'react'
import { Heart, Search, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import ProjectIntro from '../components/ProjectIntro'
import { AlmaLogo } from '../components/Logos'

const products=[
  {id:1,name:'Jarrón Aurora',category:'Cerámica',price:48,color:'#f6b7a9',art:'vase'},
  {id:2,name:'Lámpara Nido',category:'Iluminación',price:76,color:'#f7d96c',art:'lamp'},
  {id:3,name:'Manta Abrazo',category:'Textil',price:59,color:'#98d9c8',art:'blanket'},
  {id:4,name:'Espejo Luna',category:'Decoración',price:89,color:'#c2b2ed',art:'mirror'},
  {id:5,name:'Bolso Tierra',category:'Accesorios',price:64,color:'#e99567',art:'bag'},
  {id:6,name:'Lámina Jardín',category:'Arte',price:35,color:'#a8d2ef',art:'print'}
]

export default function AlmaStore(){
  const [category,setCategory]=useState('Todos'),[query,setQuery]=useState(''),[cart,setCart]=useState([]),[favorites,setFavorites]=useState([]),[open,setOpen]=useState(false)
  const filtered=useMemo(()=>products.filter(p=>(category==='Todos'||p.category===category)&&p.name.toLowerCase().includes(query.toLowerCase())),[category,query])
  const toggleFavorite=id=>setFavorites(items=>items.includes(id)?items.filter(item=>item!==id):[...items,id])
  return <main className="project-page alma-page"><ProjectIntro eyebrow="PROYECTO 01 · E-COMMERCE" title="Alma Concept Store" text="Una tienda online cálida y editorial para objetos cotidianos creados con intención." tags={['React','useState','useMemo','Filtros','Carrito']}><AlmaLogo/></ProjectIntro>
    <section className="brand-site alma-site"><div className="brand-nav"><AlmaLogo/><nav><a href="#coleccion">Novedades</a><a href="#coleccion">Colección</a><a href="#historia">Nuestra historia</a></nav><button className="icon-button" onClick={()=>setOpen(true)}><ShoppingBag/><span>{cart.length}</span></button></div>
      <div className="alma-hero"><div><span>OBJETOS QUE HACEN HOGAR</span><h2>Menos cosas.<br/><em>Más alma.</em></h2><p>Una colección de piezas honestas, bonitas y hechas para acompañarte durante mucho tiempo.</p><a className="button button-dark" href="#coleccion">Descubrir colección</a></div><div className="alma-art"><div className="arch"><i></i><b>◒</b></div><span className="sticker">EDICIÓN<br/>LIMITADA</span></div></div>
      <section className="shop-section" id="coleccion"><div className="shop-heading"><div><span className="mini-title">COLECCIÓN 2026</span><h2>Favoritos de la casa</h2></div><div className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar"/></div></div><div className="filter-row"><SlidersHorizontal size={18}/>{['Todos','Cerámica','Iluminación','Textil','Decoración','Accesorios','Arte'].map(item=><button className={category===item?'active':''} onClick={()=>setCategory(item)} key={item}>{item}</button>)}</div><div className="product-grid">{filtered.map(product=><article className="product-card" key={product.id}><div className={`product-image product-${product.art}`} style={{'--product-color':product.color}}><span></span><button aria-label="Guardar en favoritos" onClick={()=>toggleFavorite(product.id)}><Heart fill={favorites.includes(product.id)?'currentColor':'none'}/></button></div><div className="product-info"><div><small>{product.category}</small><h3>{product.name}</h3></div><div><strong>{product.price} €</strong><button onClick={()=>setCart(items=>[...items,product])}>Añadir</button></div></div></article>)}</div></section>
      <section className="story-band" id="historia"><span>DISEÑADO DESPACIO</span><h2>Creemos en los objetos que cuentan quién eres.</h2><p>Cada pieza se selecciona por su historia, sus materiales y la emoción que lleva a casa.</p></section>
    </section>
    <aside className={`cart-drawer ${open?'open':''}`}><button className="drawer-close" onClick={()=>setOpen(false)}><X/></button><h2>Tu bolsa</h2>{cart.length===0?<p>Aún no has añadido productos.</p>:cart.map((item,index)=><div className="cart-item" key={`${item.id}-${index}`}><i style={{background:item.color}}></i><span>{item.name}<small>{item.price} €</small></span></div>)}<div className="cart-total"><span>Total</span><b>{cart.reduce((sum,item)=>sum+item.price,0)} €</b></div><button className="button button-dark full">Finalizar compra</button></aside><div className={`drawer-overlay ${open?'open':''}`} onClick={()=>setOpen(false)}></div>
  </main>
}
