import { getAllGameIds, getGameShowCaseData } from '../lib/showcase';
import Head from 'next/head'
import Image from 'next/image'
import ChapterLink from '../components/ChapterLink'
import { useRouter } from "next/router";

export default function ShowCase({ gameData }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{gameData.title}</title>
        <meta name="description" content={gameData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex items-start pt-20 pl-20">
          <Image className=""
                 src={`/${gameData.showcasePicture}.jpg`}
                 height={300}
                 width={300}
                 alt="{gameData.showcasePicture}"
          />
          <div className="pl-10">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">{gameData.title}</h1>

            <div className="mt-10 border border-gray-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-gray-50 dark:bg-blue-opaque">
              <p className="text-xl font-bold">Description</p>
              <p className="py-5 text-lg focus:ring-blue-500 w-full dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32">{gameData.description}</p>

              <div className="">
                {gameData.scenario.map((chapter, i) => (
                  <ChapterLink
                    index={i}
                    href={`${router.pathname}/${i}`}
                    length="1:02"
                    title={chapter.title}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllGameIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const gameData = getGameShowCaseData(params.gameID);
  return {
    props: {
      gameData,
    },
  };
}
