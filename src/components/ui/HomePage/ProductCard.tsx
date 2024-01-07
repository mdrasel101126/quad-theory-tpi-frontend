/* eslint-disable @next/next/no-img-element */



const PopularProductCard = ({product}:any) => {
    console.log(product);
    return (
        <div className="w-1/3 md:w-1/5">
            {
                product && <><img className="w-full h-52 rounded-lg" src={product?.ImageUrl} alt="product" />
                <p className="text-slate-500 text-center">{product?.Name}</p></>
            }
        </div>
    );
};

export default PopularProductCard;