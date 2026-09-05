import { ArrowDown, ArrowRight, Code2, Palette, Sparkles } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { AlmaLogo, BrillaLogo, LumaLogo, NexoLogo, OrbitLogo } from '../components/Logos'

export default function Home(){
  return <main>
    <section className="home-hero"><div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div><div className="hero-copy"><span className="eyebrow light">DISEÑADORA GRÁFICA + FRONTEND DEVELOPER</span><h1>Diseño con intención.<br/><em>Desarrollo con detalle.</em></h1><p>Hola, soy Rossana. Creo experiencias digitales visuales, humanas y funcionales combinando diseño, marketing y código.</p><div className="hero-actions"><a className="button button-light" href="#proyectos">Ver proyectos <ArrowDown size={18}/></a><a className="text-link light" href="#sobre-mi">Conóceme <ArrowRight size={18}/></a></div></div><div className="hero-visual"><div className="visual-window"><div className="window-bar"><i></i><i></i><i></i><span>rossana.design</span></div><div className="window-content"><span>IDEA</span><b>→</b><span>DISEÑO</span><b>→</b><span>CÓDIGO</span></div><div className="floating-card card-a"><Palette/> UI/UX</div><div className="floating-card card-b"><Code2/> React</div><div className="floating-card card-c"><Sparkles/> Creative</div></div></div></section>

    <section className="marquee"><div>REACT ✦ HTML ✦ CSS ✦ JAVASCRIPT ✦ FIGMA ✦ UX/UI ✦ MARKETING ✦ REACT ✦ HTML ✦ CSS ✦ JAVASCRIPT ✦</div></section>

    <section className="portfolio-section" id="proyectos"><div className="section-heading"><div><span className="eyebrow">PROYECTOS SELECCIONADOS</span><h2>Marcas imaginadas.<br/>Experiencias reales.</h2></div><p>Cinco casos de estudio donde exploro distintas formas de unir diseño, interacción y objetivos de negocio.</p></div><div className="portfolio-grid">
      <ProjectCard number="01" title="Alma Concept Store" category="E-COMMERCE" description="Tienda de objetos con identidad, filtros, favoritos y carrito." to="/alma-store" color="#ff876f"><AlmaLogo/><div className="art-shape shape-vase">◒</div></ProjectCard>
      <ProjectCard number="02" title="Brilla Festival" category="CAMPAÑA" description="Landing vibrante de captación para un festival creativo." to="/brilla" color="#f7cf4a"><BrillaLogo/><div className="sun-art">✺</div></ProjectCard>
      <ProjectCard number="03" title="Nexo Insights" category="DATA & MARKETING" description="Dashboard para entender y optimizar campañas." to="/nexo-dashboard" color="#72d9c5"><NexoLogo/><div className="chart-art"><i></i><i></i><i></i><i></i></div></ProjectCard>
      <ProjectCard number="04" title="Orbit Experiment Lab" category="A/B TESTING" description="Laboratorio interactivo para comparar variantes." to="/experiment-lab" color="#b7a0ff"><OrbitLogo/><div className="orbit-art"><i></i><b>A/B</b></div></ProjectCard>
      <ProjectCard number="05" title="Luma Email Studio" category="EMAIL & QA" description="Editor y control de calidad para campañas responsive." to="/email-studio" color="#ffadcf"><LumaLogo/><div className="mail-art">✉</div></ProjectCard>
    </div></section>

    <section className="about-section" id="sobre-mi"><div className="about-title"><span className="eyebrow">SOBRE MÍ</span><h2>Una mirada de diseñadora.<br/>Una mente que construye.</h2></div><div className="about-copy"><p className="lead">Soy diseñadora gráfica y desarrolladora frontend. Mi trayectoria entre Perú, Japón y España me enseñó a observar, adaptarme y convertir ideas en mensajes que conectan.</p><p>Después de años trabajando en diseño, marketing digital y atención al cliente, incorporé React, JavaScript, HTML y CSS para poder llevar mis propuestas desde el concepto visual hasta una experiencia funcional. Me interesa especialmente crear interfaces cuidadas, accesibles y orientadas a resultados.</p><div className="skill-cloud"><span>React</span><span>JavaScript</span><span>HTML5</span><span>CSS3</span><span>Figma</span><span>UI/UX</span><span>Email marketing</span><span>QA</span></div></div></section>
    <section className="contact-banner"><span>¿CREAMOS ALGO JUNTAS?</span><h2>Una buena idea merece<br/>una gran experiencia.</h2><a className="button button-dark" href="mailto:rossana.maguina@gmail.com">Escríbeme <ArrowRight/></a></section>
    <footer className="footer"><b>Rossana Maguiña © 2026</b><span>Diseñado y desarrollado con React</span></footer>
  </main>
}
