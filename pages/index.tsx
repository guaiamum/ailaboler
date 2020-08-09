import Head from 'next/head'
import '../styles/main.sass'
import Caroussel from '../components/Caroussel'
import { useEffect, useState } from 'preact/hooks'

const Home = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    fetch('/mock/tales.json')
      .then((r) => r.json())
      .then(({ columns } = {}) => {
        setColumns(columns);
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
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

        {columns.length ? <Caroussel columns={columns} /> : null}
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home
