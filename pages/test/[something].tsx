import { GetStaticPaths, GetStaticProps } from "next";
import stars from "../../backendData/some-backend-data.json";
import { useRouter } from "next/router";

export interface starInterface {
    id: string;
    name: string;
    description: string;
    link: string;
}

const starData = JSON.parse(JSON.stringify(stars, null, 2));

export const getStaticProps: GetStaticProps = async (context) => {
    const itemID = context.params?.something;
    const foundItem = starData.stars.find((item: starInterface) => itemID === item.id);
  
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
      specificStarData: foundItem
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pathsWithParams = starData.stars.map((star: starInterface) => ({ params: { something: star.id }}))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

function projectPage(props: { specificStarData: starInterface, 
    hasError: boolean }) {
      const router = useRouter();
    
      if (props.hasError) {
        return <h1>Error - please try another parameter</h1>
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }
    
      return (
        <div>
          <h1>{props.specificStarData.name}</h1>
          <p>{props.specificStarData.description}</p>
          <a href={props.specificStarData.link}>More Information here (link)</a>
        </div>
      )
    }
    
    export default projectPage;
