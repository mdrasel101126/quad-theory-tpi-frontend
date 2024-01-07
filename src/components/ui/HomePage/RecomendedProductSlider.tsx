
import { useState } from "react";
import ProductCard from "./ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";


const RecomendedProductSlider = ({slides}:any) => {
    const [productNumber,setProductNumber]=useState<number>(0);
    const [currentProduct,setCurrentProduct]=useState<number>(0);
    const recomendedProducts=slides?.filter((slide:any)=>slide.IsRecommended==true);
    //console.log(slides);
    //console.log(products);
    const {products:newProducts}=useAppSelector(state=>state.product);
    //console.log(newProducts);
    const newRecomendedProducts=newProducts?.filter(p=>p.IsRecommended);
    //console.log(newRecomendedProducts);
    const products=[...recomendedProducts,...newRecomendedProducts]

 
    return (
        <div className="mx-3 my-20">
           <div className='flex flex-row justify-between items-center my-2'>
            <h3>Recomended</h3>
            <div>
            <Link className="hidden md:block" href="/add-product">
                <button className="text-orange-500 font-semibold">AddMore</button>
            </Link>
            <button disabled={!products[currentProduct-3]} onClick={()=>setCurrentProduct(currentProduct=>currentProduct-3)} className={`${currentProduct==0?"text-slate-300":"text-black"}`}><IoIosArrowBack/></button>
            <button
            disabled={!products[currentProduct+3]}
             onClick={()=>setCurrentProduct(currentProduct=>currentProduct+3)} className={`${currentProduct+3<products?.length? "text-black":"text-slate-300"}`}><IoIosArrowForward/></button>
            </div>
        </div>
        <div className='hidden  md:flex md:flex-row md:items-center md:gap-x-3 '>
              {
                products[currentProduct] &&
                <ProductCard product={products[currentProduct]} />
                
              }
              {
                products[currentProduct] &&
                <ProductCard product={products[currentProduct+1]} />
              }
              {
                products[currentProduct] &&
                <ProductCard product={products[currentProduct+2]} />
              }
              {
                products[currentProduct] &&
                <ProductCard product={products[currentProduct+3]} />
              }
              {products[currentProduct] &&
                <ProductCard product={products[currentProduct+4]} />
              }
        </div>
        <div className='flex flex-row items-center gap-x-3 md:hidden'>
              {
                products[currentProduct] &&
                <ProductCard product={products[currentProduct]} />
                
              }
              {
                products[currentProduct] &&
                <ProductCard product={products[currentProduct+1]} />
              }
              {
                products[currentProduct] &&
                <ProductCard product={products[currentProduct+2]} />
              }
        </div>
        </div>
    );
};

export default RecomendedProductSlider;