import { NextApiRequest, NextApiResponse, NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import handler from '../api/hello';
import { useRouter } from 'next/router';
interface DataPage {
  name: string;
}
const Page = ({ name }: DataPage) => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>Page{pid}</div>
          <h2>{name}</h2>
        </div>
      </main>
    </>
  );
};
export default Page;
export async function getServerSideProps() {
  return { props: { name: 'john' } };
}
// const posts: DataPage[] = [
//   {
//     id: 1,
//     name: 'Nextjs is awesome'
//   },
//   {
//     id: 2,
//     name: 'Using TypeScript with Nextjs'
//   },
//   {
//     id: 3,
//     name: 'GraphQL Vs REST'
//   },
//   {
//     id: 4,
//     name: 'Bridging in React Native'
//   }
// ];

// export async function getServerSideProps() {
//   return { props: posts[0] };
// }
