import Head from 'next/head'
import '../styles/main.sass'

const Home = () => (
  <div class="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 class="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p class="description">
        Get started by editing <code>pages/index.js</code>
      </p>

      <div class="grid">
        <a href="https://nextjs.org/docs" class="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" class="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          class="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          class="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>
  </div>
)

export default Home
