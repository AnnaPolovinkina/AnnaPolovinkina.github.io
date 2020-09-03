export default {
    actions: {
        addToCart({commit}, product) {
            commit('setCart', product);
        },
        deleteFromCart({commit}, index) {
            commit('deleteItemCart', index);
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
        }
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