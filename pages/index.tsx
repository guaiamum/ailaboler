import Head from 'next/head'
import '../styles/main.sass'
import Caroussel from '../components/Caroussel'

const Home = () => (
  <div className="container">
    <Head>
      <title>Aila Boler</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to Aila Boler!
      </h1>

      <Caroussel />
    </main>

    <footer>
      {/* to be continued */}
    </footer>
  </div>
)

export default Home
