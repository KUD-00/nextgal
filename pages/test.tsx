import { getAllGameIds, getGameShowCaseData } from '../lib/showcase';
import Head from 'next/head'
import Textbox from '../components/textbox'
import Image from 'next/image'
import ChapterLink from '../components/ChapterLink'
import { useRouter } from "next/router";

export default function test({}) {
    const router = useRouter()
    const gameData = require("../games/futari.json")
    console.log(gameData.scenario)
    return (
        <>
          <p>This is a sentense</p>
          <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
            {gameData.scenario.map((chapter, i) => (
                <>
                  <p>{chapter.title}</p>
                  <ChapterLink
                    index={i}
                    href={`${router.pathname}/${i}`}
                    length="1:02"
                    title={chapter.title}
                  />
                </>
            ))}
          </div>
        </>
    )
}
