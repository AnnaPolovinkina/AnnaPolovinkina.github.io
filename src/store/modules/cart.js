export default {
    actions: {
        addToCart({commit}, product) {
            commit('setCart', product);
        },
        deleteFromCart({commit}, index) {
            commit('deleteItemCart', index);
        },
        incrementCartItem({commit}, index) {
            commit('incrementItem', index);
        },
        decrementCartItem({commit}, index) {
            commit('decrementItem', index);
        }
    },
    mutations: {
        setCart(state, product) {
            if (state.cart.length) {
                var isProductExists = false;
                state.cart.map(function (item) {
                    if (item.id === product.id) {
                        isProductExists = true;
                        item.count++;
                    }
                });
                if (!isProductExists) {
                    state.cart.push(product);
                }
            }
            else {
                state.cart.push(product);
            }

        },
        deleteItemCart(state, index) {
            state.cart.splice(index, 1)
        },
        incrementItem(state, index) {
            state.cart[index].count++
        },
        decrementItem(state, index) {
            if (state.cart[index] > 1) {
                state.cart[index].count--  //Не работает
            }
        },
    },
    state: {
        cart: []
    },
    getters: {
        cart(state) {
            return state.cart;
        }
    },
}