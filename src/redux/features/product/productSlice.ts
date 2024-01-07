import { IProductType } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  products: IProductType[];
}

const initialState: IProduct = {
  products: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state: IProduct, action: PayloadAction<IProductType>) => {
      state.products.push(action?.payload);
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
