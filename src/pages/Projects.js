import React from 'react'
import img from '../assets/project/project.jpg'
import ovako from '../assets/project/ovako.svg'
import eskiltuna from '../assets/project/eskiltuna2.svg'
import project2 from '../assets/project/project2.jpg'
import project3 from '../assets/project/project3.jpg'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
      <section className='section projects-hero'>
        <div className="projects-hero-heading">
          <h1 className='projects-hero-title'>Minnesvärda projekt</h1>
          <p className='projects-hero-subtitle'>Upptäck vårt utbud av kassetter</p>
        </div>
        <img src={img} className='projects-hero-img' alt="" />
      </section>

      <section className='section projects-intro'>
        <h1 className='projects-intro-title'>Kunden i center</h1>
        <p>Prioriteringar har alltid varit att kunna lösa kundernas problem avseende process- eller dag-vattenfrågor oavsett om FlexiClean är lösningen eller om vi gemensamt med våra samarbetspartners kan lösa problemen. Vi känner att vi är ett litet företag men stora resurser för att lösa de problem just ni har.</p>
      </section>

      <section className='section projects'>
        <div className="single-project">
          <div className="project-img"><img src={ovako} alt="" /></div>
          <div className="project-data">
            <h1 className='project-title'>Ovako Steel Hofors</h1>
            <p className='project-subtitle'><strong>Samlingsbrunn för Ovako Steels dagvattensystem</strong></p>
            <p>Brunnen är framtagen tillsammans med Meag. Komplett brunn med stigarrör, beteckning, servicebrygga, förfilter och filterinstallation för 130 000:-.</p>
          </div>
        </div>
        <div className="single-project reverse">
          <div className="project-img"><img src={eskiltuna} alt="" /></div>
          <div className="project-data">
            <h1 className='project-title'>Bilhall i Eskilstuna</h1>
            <p className='project-subtitle'><strong>Problem med mystiskt oljeutsläpp</strong></p>
            <p>Tillsammans med AB Aros Rör & Svets och Enebo Entreprenad monterades denna vägg för 60 000:- och problemet var löst.</p>
          </div>
        </div>
      </section>

      <section className='section map'>
        <h1 className='map-title'>Titta på vår Google Maps karta över våra leveranse.</h1>
        <a href="https://www.google.com/maps/d/edit?mid=1NgcNrP7tE1DlDEef-NoOcD4AiQb0tChd&usp=sharing" rel="noreferrer" target="_blank"><button className='btn btn-gray'>Kolla karta</button></a>
      </section>

      <section className='section showcase5'>
        <div className="showcase5-item">
          <img src={project3} className='showcase5-img' alt="" />
          <h1 className='showcase5-title'>FlexiClean filterväggar för dagvattenrening</h1>
          <p>FlexiClean filterväggar för rening av dagvatten. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Och är godkänd som oljeavskiljare på parkeringsplatser. Flödet beror på hur många kassetter man använder.Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</p>
          <div className="btn-wrapper"><Link to='/kontakta-oss'><button className='btn btn-gray'>Ta kontakt</button></Link></div>
        </div>
        <div className="showcase5-item">
          <img src={project2} className='showcase5-img' alt="" />
          <h1 className='showcase5-title'>FlexiClean filterbrunnar för dagvattenrening</h1>
          <p>FlexiClean filterbrunnar för rening av dagvatten. Dessa är för permanent placering men kan även användas mobilt. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Filterbrunnen är fördelad på en sedimenteringsdel samt en filtreringsdel . Filterbrunnen flödar 320-640 l/min filtrerat vatten beroende på dimension Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</p>
          <div className="btn-wrapper">
            <Link to='/kontakta-oss'><button className='btn btn-gray'>Ta kontakt</button></Link>
            <button className='btn btn-blue'>Storlekar</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects