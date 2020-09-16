<template>
    <div>
        <h3>Каталог</h3>
        <Pagination
                v-bind:pages="pages"
                v-on:changePage="changePageNumber"
                v-bind:pageNumber="pageNumber"
                v-on:incrementPage="incrementPage"
                v-on:decrementPage="decrementPage"
        ></Pagination>
        <SelectCategory
                v-on:changeFilter="filteredCategory"
                v-on:resetPage="resetPage"
        ></SelectCategory>
        <br>
        <select
                v-model="filterSale"
                v-on:change="resetPage"
        >
            <option value="">Все товары</option>
            <option value="true">Со скидкой</option>
            <option value="false">Без скидки</option>
        </select>
        <select
                v-model="filterPrice"
                v-on:change="savePrice"
        >
            <option value="">По умолчанию</option>
            <option value="increment">По возрастанию</option>
            <option value="decrement">По убыванию</option>
        </select>
        <br>
        <div class="row">
            <ProductCard2
                    v-for="card in filteredCards"
                    v-bind:card="card"
            ></ProductCard2>
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
    import Pagination from  '@/components/Pagination'

    export default {
        name: 'Catalog',
        data() {
            return {
                filterCategory: '',
                filterSale: '',
                filterPrice: '',
                cardResultSort: [],
                cardPerPage: 6,
                pageNumber: 1,
                countPages: ''
            }
        },
        components: {
            ProductCard2: ProductCard2,
            SelectCategory: SelectCategory,
            InfoPopup: InfoPopup,
            Cart: Cart,
            Pagination: Pagination,
        },
        mounted() {
          this.filterSale = this.$store.getters.getSale;
          console.log(this.$store.getters.getSale);
          // this.filterPrice = this.$store.getters.getPrice;
        },
        methods: {
            filteredCategory(data) {
                this.filterCategory = data;
            },
            sortCardPrice(valueSort, arrCards) {
                for (var i = 0; i < arrCards.length; i++) {
                    for (var j = i; j < arrCards.length; j++) {
                        var conditionLoop;
                        if (valueSort == 'increment') {
                            conditionLoop = +arrCards[i].price > +arrCards[j].price
                        } else {
                            conditionLoop = +arrCards[i].price < +arrCards[j].price
                        }
                        if (conditionLoop) {
                            var temp = arrCards[i];
                            arrCards[i] = arrCards[j];
                            arrCards[j] = temp;
                        }
                    }
                }
            },
            sortOneSelect(obj, key, arrCards, arrResultCards) {
                arrCards.forEach(function (elem) {
                    if (String(elem[key]) == obj[key]) {
                        arrResultCards.push(elem);
                    }
                });
            },
            sortTwoSelect(obj1, key1, obj2, key2, arrCards, arrResultCards) {
                arrCards.forEach(function (elem) {
                    if (String(elem[key1]) == obj1[key1] && String(elem[key2]) == obj2[key2]) {
                        arrResultCards.push(elem);
                    }
                });
            },
            changePageNumber(data) {
                this.pageNumber = data;
            },
            incrementPage() {
                if (this.pageNumber < this.countPages) {
                    this.pageNumber++;
                }
            },
            decrementPage() {
                if (this.pageNumber > 1) {
                    this.pageNumber--;
                }
            },
            resetPage() {
                this.pageNumber = 1;
                this.$store.dispatch('changeSale', this.filterSale)
            },
            savePrice() {
                // this.$store.dispatch('changeSale', this.filterPrice)
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
                // this.$store.dispatch('changeFilters', allFilter);
                fillFilter = allFilter.filter(item => Boolean(String(Object.values(item))));
                switch (fillFilter.length) {
                    case 1:
                        var obj = fillFilter[0],
                            key = String(Object.keys(obj));
                        if (key !== 'price') {
                            this.sortOneSelect(obj, key, allResult, cardResult);
                        } else {
                            cardResult = allResult;
                            this.sortCardPrice(obj[key], cardResult);
                        }
                        break;
                    case 2:
                        var obj1 = fillFilter[0],
                            key1 = String(Object.keys(obj1)),
                            obj2 = fillFilter[1],
                            key2 = String(Object.keys(obj2));

                        if (key2 !== 'price') {
                            this.sortTwoSelect(obj1, key1, obj2, key2, allResult, cardResult);
                        } else {
                            this.sortOneSelect(obj1, key1, allResult, cardResult);
                            this.sortCardPrice(obj2[key2], cardResult);
                        }
                        break;
                    case 3:
                        var obj1 = fillFilter[0],
                            key1 = String(Object.keys(obj1)),
                            obj2 = fillFilter[1],
                            key2 = String(Object.keys(obj2)),
                            obj3 = fillFilter[2],
                            value3 = String(Object.values(obj3));
                        this.sortTwoSelect(obj1, key1, obj2, key2, allResult, cardResult);
                        this.sortCardPrice(value3, cardResult);
                        break;
                    default:
                        cardResult = allResult;
                }
                this.cardResultSort = cardResult;
                var from = (this.pageNumber - 1) * this.cardPerPage;
                var to = from + this.cardPerPage;
                cardResult = cardResult.slice(from, to);
                return cardResult;
            },
            pages() {
                return this.countPages = Math.ceil(this.cardResultSort.length / this.cardPerPage);
            }
        }
    }

</script>

<style scoped>
    .cart-btn {
        width: 100px;
        height: 100px;
        background: yellow;
    }

</style>