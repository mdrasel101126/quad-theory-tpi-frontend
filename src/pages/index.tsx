import RootLayout from '@/components/Layouts/RootLayout';
import HomePageBanner from '@/components/ui/HomePage/HomePageBanner';
import PopularProductSlider from '@/components/ui/HomePage/PopularProductSlider';
import RecomendedProductSlider from '@/components/ui/HomePage/RecomendedProductSlider';


import { ReactNode } from 'react';



export default function Home({products}:any) {
  
//console.log(products);
const slides=products?.Items;
//console.log(slides);
  return (
    <div className=''>
      <HomePageBanner/>
      <PopularProductSlider slides={slides}/>
      <RecomendedProductSlider slides={slides}/>
    </div>
  )
}

Home.getLayout = function getLayout(page:ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  const res = await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 300,
  };
};  
