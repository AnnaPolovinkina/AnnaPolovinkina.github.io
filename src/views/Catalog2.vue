<template>
    <div>
        <h3>Каталог</h3>
        <SelectCategory v-on:changeFilter="filteredCategory"></SelectCategory>
        <br>
        <select v-model="filterSale">
            <option value="">Все товары</option>
            <option value="true">Со скидкой</option>
            <option value="false">Без скидки</option>
        </select>
        <select v-model="filterPrice">
            <option value="">По умолчанию</option>
            <option value="increment">По возрастанию</option>
            <option value="decrement">По убыванию</option>
        </select>
        <br>
        <div class="row">
            <ProductCard2 v-for="card in filteredCards" v-bind:card="card" v-on:addCardToCart="toCart"></ProductCard2>
        </div>
        <InfoPopup></InfoPopup>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import ProductCard2 from '@/components/ProductCard2'
    import SelectCategory from '@/components/SelectCategory'
    import InfoPopup from '@/components/InfoPopup'
    import Cart from  '@/components/Cart'

    export default {
        name: 'Catalog',
        data() {
            return {
                filterCategory: '',
                filterSale: '',
                filterPrice: '',
            }
        },
        components: {
            ProductCard2: ProductCard2,
            SelectCategory: SelectCategory,
            InfoPopup: InfoPopup,
            Cart: Cart
        },
        methods: {
            ...mapActions(['addToCart']),
            toCart(data) {
                this.addToCart(data);
            },
            filteredCategory(data) {
                this.filterCategory = data;
            }
        },
        computed: {
            ...mapGetters(['allProducts']),
            ...mapGetters(['cart']),
            filteredCards() {
                var filterCategory = this.filterCategory,
                    filterSale = this.filterSale,
                    filterPrice = this.filterPrice,
                    allResult = this.$store.getters.allProducts,
                    cardResult = [],
                    allFilter = [],
                    fillFilter;
                allFilter.push({category: filterCategory},{isSale: filterSale},{price: filterPrice});
                fillFilter = allFilter.filter(item => Boolean(String(Object.values(item))));
                switch (fillFilter.length) {
                    case 1:
                        var obj = fillFilter[0],
                            key = String(Object.keys(obj));
                        allResult.forEach(function (elem) {
                            if (String(elem[key]) == obj[key]) {
                                cardResult.push(elem);
                            }
                        });
                        break;
                    case 2:
                        var obj1 = fillFilter[0],
                            key1 = String(Object.keys(obj1)),
                            obj2 = fillFilter[1],
                            key2 = String(Object.keys(obj2));
                        allResult.forEach(function (elem) {
                            if (String(elem[key1]) == obj1[key1] && String(elem[key2]) == obj2[key2]) {
                                cardResult.push(elem);
                            }
                        });
                        break;
                    case 3:
                        var obj1 = fillFilter[0],
                            key1 = String(Object.keys(obj1)),
                            obj2 = fillFilter[1],
                            key2 = String(Object.keys(obj2)),
                            obj3 = fillFilter[2],
                            value3 = String(Object.values(obj3));
                        allResult.forEach(function (elem) {
                            if (String(elem[key1]) == obj1[key1] && String(elem[key2]) == obj2[key2]) {
                                cardResult.push(elem);
                            }
                        });
                        for (var i = 0; i < cardResult.length; i++) {
                            for (var j = i; j < cardResult.length; j++) {
                                var conditionLoop;
                                if (value3 == 'increment') {
                                    conditionLoop = cardResult[i].price > cardResult[j].price
                                } else {
                                    conditionLoop = cardResult[i].price < cardResult[j].price
                                }
                                if (conditionLoop) {
                                    var temp = cardResult[i];
                                    cardResult[i] = cardResult[j];
                                    cardResult[j] = temp;
                                }
                              }
                            }
                        break;
                    default:
                        cardResult = allResult;
                }
                return cardResult;
            }
        },
    }

</script>

<style scoped>
    .cart-btn {
        width: 100px;
        height: 100px;
        background: yellow;
    }

</style>