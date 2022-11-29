import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Textbox from '../components/textbox'

export default function Home() {
  const scenario = [
    "another day with nobody",
    "everyone is disapperad",
    "only sun, wind, water and computer stand with me."
  ]

  const index = 0


  return (
    <div className={styles.container}>
      <Head>
        <title>Galgame in Browser</title>
        <meta name="description" content="play galgame anywhere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Image className="pt-6 pb-6"
          src="/begin.jpg"
          height={500}
          width={500}
          alt="BEGIN"
        />

        <Textbox scenario={scenario} index={index} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
