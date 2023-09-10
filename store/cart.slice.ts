// cartSlice.ts
import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  imagePath: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.product.id === action.payload);
      if (index !== -1) {
        if (state.items[index].quantity < 10) {
          state.items[index].quantity++;
        }
      }
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.product.id === action.payload);
      if (index !== -1) {
        if (state.items[index].quantity === 1) {
          state.items.splice(index, 1);
        } else {
          state.items[index].quantity--;
        }
      }
    },
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);
      if (existingItem) {
        if (existingItem.quantity + quantity <= 10) {
          existingItem.quantity += quantity;
        } else {
          // Handle the case where the total quantity exceeds the limit (e.g., show a message).
        }
      } else {
        if (quantity <= 10) {
          state.items.push({ product, quantity });
        } else {
          // Handle the case where the quantity exceeds the limit (e.g., show a message).
        }
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.product.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectTotalItems = createSelector(
  (state: { cart: CartState }) => state.cart.items,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const selectTotalPrice = createSelector(
  (state: { cart: CartState }) => state.cart.items,
  (items) =>
    items.reduce((totalPrice, item) => {
      return totalPrice + item.product.price * item.quantity;
    }, 0)
);

export const { incrementItem, decrementItem, addToCart, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
