import RootLayout from '@/components/Layouts/RootLayout';
import { ReactNode } from 'react';


export default function Home(
) {
  

  return (
    <div className=''>
      <h1>This is Home</h1>
    </div>
  )
}

Home.getLayout = function getLayout(page:ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};


/* export const getStaticProps = async () => {
  const res = await fetch("https://quiz-website-backend-delta.vercel.app/api/v1/categories");
  const data = await res.json();

  return {
    props: {
      categorieData: data,
    },
    revalidate: 300,
  };
};  */
