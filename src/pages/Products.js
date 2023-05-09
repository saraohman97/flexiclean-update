import React from 'react'
import product_one from '../assets/product1.jpg'
import product_two from '../assets/product2.jpg'
import kalmar from '../assets/kalmar.png'
import vasteras from '../assets/vasteras.jpg'
import img from '../assets/header-products.jpg'
import { Link } from 'react-router-dom'
import part1 from '../assets/part1.jpg'
import part2 from '../assets/part2.jpg'
import part3 from '../assets/part3.jpg'

const Products = ({ setOrderModalOpen }) => {
  return (
    <>
      <section className='section products-hero'>
        <div className="products-hero-heading">
          <h1 className='products-hero-title'>Produkter</h1>
          <p className='products-hero-subtitle'>Upptäck vårt utbud av kassetter</p>
        </div>
        <img src={img} className='products-hero-img' alt="Brunn i staden vid soluppgång" />
        <p className='products-hero-data'>FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten. Produkten bygger på djup kunskap om dagvatten och dagvattenbrunnar och en förståelse för de utmaningar kommuner och privata aktörer ställs inför varje dag. FlexiClean är laddad med egenskaper som avsevärt förbättrar och förenklar arbetet med inspektion och underhåll av brunnen. Och den kan anpassas för rening i alla tänkbara miljöer.</p>
        <div className="btn-wrapper"><Link to='/dokumentcenter'><button className='btn btn-gray'>Läs mer</button></Link></div>
      </section>

      <section className='section showcase1'>
        <div className="showcase1-img"><img src={product_one} alt="FlexiClean filterkassett för dagvattenrening" /></div>

        <div className='showcase1-data'>
          <h1 className='showcase1-title'>FlexiClean filterkassett för dagvattenrening</h1>
          <p><strong>FlexiClean är filterkassett för rening av dagvatten passar i brunnar med innerdiameter 350 - 1000 mm. filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas.</strong> <br /> <br />Kassetten flödar 160 l/min filtrerat vatten och är försedd med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år. Att tänka på. FlexiClean  kräver minst 800mm/1000 djup i brunnen och med slät innersida på brunnen. Teleskopbeteckning kan försvåra montaget. Tänk dessutom på att ”hålet” i beteckningen måste vara ca 300mm i diameter”.</p>
          <div className='btn-wrapper'>
            <button className='btn btn-blue' onClick={() => setOrderModalOpen(true)}>Beställ</button>
            <details>
              <summary className='btn btn-gray btn-filter'>Se storlekar</summary>
              <table>
                <tr>
                  <th><p>Artikelnummer</p></th>
                  <th><p>Passar till brunn</p></th>
                  <th><p>Filtertyp</p></th>
                </tr>
                <tr>
                  <td>100100 FC408SA</td>
                  <td>350-450 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100101 FC410SA</td>
                  <td>350-450 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100102 FC508SA</td>
                  <td>500 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100103 FC510SA</td>
                  <td>500 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100104 FC608SA</td>
                  <td>600 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100105 FC610SA</td>
                  <td>600 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100106 FC1008SA</td>
                  <td>1000 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100107 FC1010SA</td>
                  <td>1000 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100113 Filterdyna</td>
                  <td>600 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100114 Filterdyna</td>
                  <td>800 mm</td>
                  <td>800 mm</td>
                </tr>
              </table>
            </details>
          </div>
        </div>
      </section>

      <section className='section showcase2'>
        <div className="showcase2-img"><img src={product_two} alt="FlexiClean filterkassett för granulatrening" /></div>
        <div className="bg-gray" />

        <div className="showcase2-data">
          <h1 className='showcase2-title'>FlexiClean filterkassett för dagvatten och granulatfiltrering (Fotbollskassetten)</h1>
          <p> <strong>FlexiClean granulatfilter rening av dagvatten samt filtrering av granulat passar i brunnar med innerdiameter 350 - 1000 mm. filtret renar tungmetaller, näringsämnen, oljor, PAH och Pfas, samt filtrerar partiklar ned till 42 mikrometer. </strong> <br /> <br /> Kassetten flödar 45 l/min filtrerat vatten och filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.

            Att tänka på. FlexiClean Granulat samt kräver minst 800/1000 mm djup i brunnen och med slät innersida på brunnen. Teleskopbeteckning kan försvåra montaget. Tänk dessutom på att ”hålet” i beteckningen måste vara ca 330mm i diameter".</p>
          <div className='btn-wrapper'>
            <button className='btn btn-blue' onClick={() => setOrderModalOpen(true)}>Beställ</button>
            <details>
              <summary className='btn btn-gray btn-filter'>Se storlekar</summary>
              <table className='showcase2-table'>
                <tr>
                  <th><p>Artikelnummer</p></th>
                  <th><p>Passar till brunn</p></th>
                </tr>
                <tr>
                  <td>200100 FC 408 Granulat</td>
                  <td>350-450 mm</td>
                </tr>
                <tr>
                  <td>200102 FC 508 Granulat</td>
                  <td>500 mm</td>
                </tr>
                <tr>
                  <td>200103 FC 608 Granulat</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>200104 FC 1008 Granulat</td>
                  <td>1000 mm</td>
                </tr>
                <tr>
                  <td>100113 Filterdyna 600mm</td>
                  <td>600 mm</td>
                </tr>
              </table>
            </details>
          </div>
        </div>
      </section>

      <section className='section showcase3'>
        <div className='showcase3-data'>
          <h1 className='showcase3-title'>Västerås Stad</h1>
          <p>Tidigare har Västerås Stad redovisade sina resultat efter tester av FlexiClean graulatfilter. Tillsammans med ett fantastiskt arbete av driftpersonalen på Västerås Stad och FlexiClean granulatfilter kunde man rapportera NOLL utsläpp av granulat i dagvattnet.<br /> <br />”Kalmar-rapporten” Sveriges första vetenskapliga studie av spridningen av mikroplast från en konstgräsplan är publicerad: Den potentiella mikroplastspridningen var 54.9 kg, allt utom 100 gram kunde stoppas med skötselåtgärder och 10,7 gram gummigranulat spreds till dagvattennätet.</p>
          <div className='showcase3-info'>
            <a href='https://www.flexiclean.eu/Homepage/Download-File/f/1226420/h/bda295b64c67f79a461bf7332e640edd/RAPPORT+%2B+Mikroplastspridning+fr%C3%A5n+en+modernt+utformad+konstgr%C3%A4splan+med+skydds%C3%A5tg%C3%A4rder' className="btn-report">
              <img src={kalmar} alt="kalmar rapporten för bättre dagvattenrening av FlexiClean" />
              <p>Läs Kalmar-rapporten</p>
            </a>
            <a href='https://www.flexiclean.eu/Homepage/Download-File/f/1183421/h/1eebd9a8d8176c2b314ce13813cc886b/framtida_handtering_av_konstgr%C3%A4splaner_i_V%C3%A4ster%C3%A5s_stad' className="btn-report">
              <img src={vasteras} alt="västerås rapporten för bättre dagvattenrening av FlexiClean" />
              <p>Läs Västerås-rapporten</p>
            </a>
          </div>
        </div>
      </section>

      <section className='section showcase4'>
        <h1 className='showcase4-title'>Filterkassettens uppbyggnad</h1>

        <div className="showcase4-data">
          <div className="showcase4-item">
            <img src={part3} className='showcase4-img' alt="flexiclean filterpåse med furubark och träflis för filtrering av dagvatten" />
            <strong>Filterpåsen</strong>
            <p>Filterpåsen består av restprodukter ifrån träindustrin. Påsen innehåller 85% furubark och 15% träflis. Påsen bytes normalt sett en gång per år.</p>
          </div>
          <div className="showcase4-item">
            <img className='showcase4-img' src={part2} alt="flexiclean finfilter kassett för block av föremål" />
            <strong>Finkassetten</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo vel iure dolorem ad temporibus cumque itaque provident eos iste eum enim tempora vero atque debitis, voluptatibus, dolores fugiat porro?</p>
          </div>
          <div className="showcase4-item">
            <img className='showcase4-img' src={part1} alt="flexiclean filter kassett för block av föremål" />
            <strong>Kassette</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero! Distinctio deleniti eum aspernatur ad eveniet iure ipsa, reprehenderit sequi reiciendis earum repudiandae quam culpa voluptatibus consequuntur, natus atque quasi.</p>
          </div>
        </div>
        <div className="btn-wrapper"><Link to='/kontakta-oss'><button className='btn btn-blue'>Kontakta oss för mer information</button></Link></div>
      </section>
    </>
  )
}

export default Products