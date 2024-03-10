import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action) {
            const updatedCartList = [...state.cartList, action.payload];
            const total = state.total + parseInt(action.payload.price);
            return { ...state, total, cartList: updatedCartList };
        },
        remove(state, action) {
            const { id, price } = action.payload;
            const updatedCartList = state.cartList.filter(item => item.id !== id);
            const total = state.total - parseInt(price);
            return { ...state, total, cartList: updatedCartList };
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const updatedCartList = state.cartList.map(item =>
                item.id === id ? { ...item, quantity } : item
            );
            return { ...state, cartList: updatedCartList };
        }
    }
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

 