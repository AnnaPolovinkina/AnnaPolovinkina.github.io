<template>
    <div class="catalog">
        <h1>Каталог</h1>
        <div class="row">
            <div class="col-md-2">
                <h3>Фильтр</h3>
                <div class="catalog_filter">
                    <SelectCategory
                        v-on:changeFilter="filteredCategory"
                        v-on:resetPage="resetPage"

                    ></SelectCategory>
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
                </div>
                <button
                        class="btn btn_dark-green"
                        v-on:click="resetFilters"
                >Сбросить фильтр</button>
            </div>

            <div class="col-md-10">
                <div class="row">
                    <ProductCard2
                        v-for="card in filteredCards"
                        v-bind:card="card"
                    ></ProductCard2>
                </div>
            </div>
        </div>
        <Pagination
            v-bind:pages="pages"
            v-on:changePage="changePageNumber"
            v-bind:pageNumber="pageNumber"
            v-on:incrementPage="incrementPage"
            v-on:decrementPage="decrementPage"
        ></Pagination>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ProductCard2 from '@/components/ProductCard2'
    import SelectCategory from '@/components/SelectCategory'
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
            Cart: Cart,
            Pagination: Pagination,
        },
        mounted() {
          this.filterSale = this.$store.getters.getSale;
          this.filterPrice = this.$store.getters.getPrice;
          // this.pageNumber = 1;
          this.pageNumber = this.$store.getters.getPage;
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
                this.$store.dispatch('changePage', this.pageNumber)
            },
            decrementPage() {
                if (this.pageNumber > 1) {
                    this.pageNumber--;
                }
                this.$store.dispatch('changePage', this.pageNumber)
            },
            resetPage() {
                this.pageNumber = 1;
                this.$store.dispatch('changePage', this.pageNumber)
                this.$store.dispatch('changeSale', this.filterSale)
            },
            savePrice() {
                this.$store.dispatch('changePrice', this.filterPrice)
            },
            resetFilters() {
                this.filteredCategory('');
                this.filterSale = '';
                this.filterPrice = '';
                this.$children[0].filter = 'Все категории';
                this.$children[0].changeFilter();
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