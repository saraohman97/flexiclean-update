import img from '../assets/28712055-9XX6s.jpg'
import { useQuery } from 'react-query'
import axios from 'axios';
import Article from '../components/Article'

const Home = () => {
  const { isLoading, data, isError, error } = useQuery('posts', () => {
    return axios.get('http://localhost:8000/posts')
  })

  return (
    <>
      <header className='hero'>
        <div className="hero-data">
          <h1>Välkommen till <br /> FlexiClean</h1>
          <p>Idag rinner tusentals liter olja och tungmetaller rakt ut ur städerna i sällskap med regn- och smutsvatten från vägar och parkeringsplatser.  FlexiClean har tagit fram en filterhållaren som renar dagvattnet. </p>
        </div>
      </header>

      <section className='section home'>
        <main className="home-main">
          <h1>Västmanlands miljö- och <br /> klimatpris 2019</h1>
          <div className='home-main-img'><img src={img} alt="Peder Eneroth och Micheal Eneroth vinner västmanlands miljö- och klimatpris 2019" /></div>
          <p><strong>Juryns motivering:</strong> <br />Västmanlands miljö- och klimatpris 2019 går till FlexiClean AB för sitt arbete med att förbättra vattenmiljöer genom att ta tag i en av vår tids stora miljöproblem, kemikalier som sprids i dagvattnet. FlexiClean har utvecklat filter som fångar upp tungmetaller, oljeföroreningar och även PFAS. PFAS är cancerframkallande ämnen som bland annat finns i våra textilier och ibland beskrivs som vår tids värsta miljögift.<br /> <br />FlexiClean har även tagit sig fram och hittat en lösning kring mikroplaster som sprids från konstgräsplaner. Genom att på det här sättet förbättra våra vattenmiljöer har Flexiclean på ett förtjänstfullt sätt bidragit till att Västmanland har tagit ett viktigt steg vidare till Miljö- och klimatrådets vision, ett län som är miljö- och klimatförebild 2030. Och klimatförebild 2030.<br /> <br /><strong>Våra nomineringar genom åren:</strong> <br />2006: Finalist. Sustainble Stockholm Award. <br />2007: Vinnare. Västerås Stads Miljöpris. <br />2015: Finalist. Deep Green Challenge, SKANSKA. <br />2016: Finalist. Västerås Stads Miljöpris <br />2019. Finalist innovationstävling SKAPA. <br />2019. Vinnare. Västmanlands Klimat- och Miljöpris.</p>
        </main>

        <aside className="home-sidebar">
          <h3 className='home-sidebar-title'>Nyheter</h3>

          {data?.data.map((post) => {
            return <Article key={post.id} post={post} />
          })}
          {isLoading && (
            <h2 className='mt-2'>Loading....</h2>
          )}
          {isError && (
            <h2 className='mt-2'>{error.message}</h2>
          )}
        </aside>
      </section>
    </>
  )
}

export default Home