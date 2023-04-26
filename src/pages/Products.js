import React from 'react'
import product_one from '../assets/product1.jpg'
import product_two from '../assets/product2.jpg'
import kalmar from '../assets/kalmar.png'
import vasteras from '../assets/vasteras.jpg'
import img from '../assets/bg.jpg'

const Products = () => {
  return (
    <>
      <section className='section products-hero'>
        <div className="products-hero-heading">
          <h1 className='products-hero-title'>Produkter</h1>
          <p className='products-hero-subtitle'>Upptäck vårt utbud av kassetter</p>
        </div>
        <img src={img} className='products-hero-img' alt="" />
        <p className='products-hero-data'>FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten. Produkten bygger på djup kunskap om dagvatten och dagvattenbrunnar och en förståelse för de utmaningar kommuner och privata aktörer ställs inför varje dag. FlexiClean är laddad med egenskaper som avsevärt förbättrar och förenklar arbetet med inspektion och underhåll av brunnen. Och den kan anpassas för rening i alla tänkbara miljöer.</p>
        <button className='btn btn-gray btn-wrapper'>Läs mer</button>
      </section>

      <section className='section showcase1'>
        <div className="showcase1-img"><img src={product_one} alt="filter brunn" /></div>

        <div className='showcase1-data'>
          <h1 className='showcase1-title'>FlexiClean filterkassett för dagvattenrening</h1>
          <p><strong>FlexiClean är filterkassett för rening av dagvatten passar i brunnar med innerdiameter 350 - 1000 mm. filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas.</strong> <br />Kassetten flödar 160 l/min filtrerat vatten och är försedd med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.<br /><br />Att tänka på. FlexiClean  kräver minst 800mm/1000 djup i brunnen och med slät innersida på brunnen. Teleskopbeteckning kan försvåra montaget. Tänk dessutom på att ”hålet” i beteckningen måste vara ca 300mm i diameter”.</p>
          <div className='btn-wrapper'>
            <button className='btn btn-gray'>Se storlekar</button>
            <button className='btn btn-blue'>Beställ</button>
          </div>
        </div>
      </section>

      <section className='section showcase2'>
        <div className="showcase2-img"><img src={product_two} alt="filter brunn" /></div>
        <div className="bg-gray" />

        <div className="showcase2-data">
          <h1 className='showcase2-title'>FlexiClean filterkassett för dagvattenrening</h1>
          <p><strong>FlexiClean är filterkassett för rening av dagvatten passar i brunnar med innerdiameter 350 - 1000 mm. filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas.</strong> <br />Kassetten flödar 160 l/min filtrerat vatten och är försedd med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.<br /><br />Att tänka på. FlexiClean  kräver minst 800mm/1000 djup i brunnen och med slät innersida på brunnen. Teleskopbeteckning kan försvåra montaget. Tänk dessutom på att ”hålet” i beteckningen måste vara ca 300mm i diameter”.</p>
          <div className='btn-wrapper'>
            <button className='btn btn-gray'>Se storlekar</button>
            <button className='btn btn-blue'>Beställ</button>
          </div>
        </div>
      </section>

      <section className='section showcase3'>
        <div className='showcase3-data'>
          <h1 className='showcase3-title'>Västerås Stad</h1>
          <p>Tidigare har Västerås Stad redovisade sina resultat efter tester av FlexiClean graulatfilter. Tillsammans med ett fantastiskt arbete av driftpersonalen på Västerås Stad och FlexiClean granulatfilter kunde man rapportera NOLL utsläpp av granulat i dagvattnet.<br /> <br />”Kalmar-rapporten” Sveriges första vetenskapliga studie av spridningen av mikroplast från en konstgräsplan är publicerad: Den potentiella mikroplastspridningen var 54.9 kg, allt utom 100 gram kunde stoppas med skötselåtgärder och 10,7 gram gummigranulat spreds till dagvattennätet.</p>
          <div className='showcase3-info'>
            <div className="btn-report">
              <img src={kalmar} alt="" />
              <p>Läs Kalmar-rapporten</p>
            </div>
            <div className="btn-report">
              <img src={vasteras} alt="" />
              <p>Läs Västerås-rapporten</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products