import { createSlice } from '@reduxjs/toolkit'

export interface I_Product {
  id: number, 
  name: string, 
  quantity: number, 
  maxQuantity: number, 
  price: number, 
  img: string, 
}

export enum E_SortFilter {
  Relevance,
  Discount,
  TopSales
}

interface I_initialState {
  products: Array<I_Product>,
  activeButton: E_SortFilter,
}

const initialState: I_initialState = {
  products: [],
  activeButton: E_SortFilter.Relevance,
}

export const layoutSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart(state, { payload }: any ){ if (state.products.find((product) => product.id === payload.id) === undefined) state.products.push(payload); },
    removeFromCart(state, { payload }: any ){ state.products = state.products.filter((item) => item.id !== payload); },
    updateQuantityCart(state, { payload }: any ){ let product = state.products.find((product) => product.id === payload.id); if (product) { product.quantity = payload.quantity; } },
    setActiveButton(state, { payload }: any ){ state.activeButton = payload },
  },
})

export const { 
  addToCart,
  removeFromCart,
  updateQuantityCart,
  setActiveButton,
} = layoutSlice.actions;

export default layoutSlice.reducer