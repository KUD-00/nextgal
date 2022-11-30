import { getAllGameIds, getGameShowCaseData } from '../lib/showcase';

export default function ShowCase({ gameData }) {
  // console.log(gameData);
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
