import { getAllGameIdAndChapterIds, getGameData } from '../../lib/showcase';

export default function Game({ gameData }) {
  // console.log(gameData);
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
  return {
    props: {
      gameData,
    },
  };
}
