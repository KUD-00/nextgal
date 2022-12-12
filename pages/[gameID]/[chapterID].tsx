import { getAllGameIdAndChapterIds, getGameData } from '../../lib/showcase';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Textbox from '../../components/textbox'

export default function Game({ gameData, chapterID }) {
  console.log(gameData.scenario[chapterID].script)
  return(
    <div className={styles.container}>
      <Head>
        <title>{gameData.title}</title>
        <meta name="description" content={gameData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Image className="pt-6 pb-6"
               src="/begin.jpg"
               height={500}
               width={500}
               alt="BEGIN"
        />

        <Textbox scenario={gameData.scenario[chapterID].script} index={0} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllGameIdAndChapterIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const gameData = getGameData(params.gameID);
  const chapterID = params.chapterID;
  return {
    props: {
      gameData,
      chapterID,
    },
  };
}
