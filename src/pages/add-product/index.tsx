import RootLayout from "@/components/Layouts/RootLayout";
import { addProduct } from "@/redux/features/product/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


interface IProductType {
    Id: string;
    Name: string;
    Price: number;
    ImageUrl: string;
    IsPopular: boolean;
    IsRecommended: boolean;
  }
const AddProductPage = () => {
  const dispatch=useAppDispatch()
  const { register, formState: { errors }, handleSubmit,reset } = useForm<IProductType>();
  const handleLogin = (data:IProductType) => {
    data.Id=(Math.floor((Math.random() * 10000) + 1)).toString();
    data.ImageUrl="https://i.ibb.co/3Y5RjTv/milk-egg-pudding.jpg";
    data.Price=Number(data.Price);
    if(!data.Price){
        toast.error("Please Enter Valid Price!!");
        return;
    }
    dispatch(addProduct(
        {
            Id:data.Id,
            Name:data.Name,
            Price:data.Price,
            IsPopular:data.IsPopular,
            IsRecommended:data.IsRecommended,
            ImageUrl:data.ImageUrl
        }
    ))
    toast.success("Successfully Product Added!");
    reset();
  };

 

  return (
    <div className="">
      <div className="w-11/12 md:w-3/5 lg:w-1/2 mx-auto my-8 bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4"
        >
          <div className=" w-full">
            < label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="Name">
              Name
            </label>
            <input
              type="Text"
              id="Name"
              placeholder="Enter Product Name"
              className="appearance-none border-0 border-b-2 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:font-bold "
              {...register("Name", { required: "Product is Required" })}
            />
            {errors.Name && (
              <p>
                <small className="text-red-600">{errors.Name.message}</small>
              </p>
            )}
          </div>
          <div className=" w-full">
            < label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="Price">
              Price
            </label>
            <input
              type="text"
              id="Price"
              placeholder="Enter Price"
              className="appearance-none border-0 border-b-2 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:font-bold "
              {...register("Price", { required: "Price is Required" })}
            />
            {errors.Name && (
              <p>
                <small className="text-red-600">{errors.Name.message}</small>
              </p>
            )}
          </div>
          <div>
          <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="IsPopular">
                    <input
                        {...register("IsPopular")}
                        type="checkbox"
                        name="IsPopular"
                        value="true"
                        id="IsPopular"
                    />
                    Popular
                </label>
          </div>
          <div>
          <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="IsRecommended">
                    <input
                        {...register("IsRecommended")}
                        type="checkbox"
                        name="IsRecommended"
                        value="true"
                        id="IsRecommended"
                    />
                    Recomended
                </label>
          </div>
          <div className=" w-full">
            < label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="ImageUrl">
              Image
            </label>
            <input
              type="file"
              id="ImageUrl"
              placeholder="Enter Product Image"
              className="appearance-none border-0 border-b-2 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:font-bold "
              {...register("ImageUrl")}
            />
            {errors.ImageUrl && (
              <p>
                <small className="text-red-600">{errors.ImageUrl.message}</small>
              </p>
            )}
          </div>
          <input
            className="w-full bg-orange-500 text-white font-bold py-2 rounded-md cursor-pointer"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;

AddProductPage.getLayout = function getLayout(page:ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
