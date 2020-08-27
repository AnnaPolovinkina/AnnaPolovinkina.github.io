<template>
    <div>
        <SelectCategory v-on:changeFilter="filterCategory = $event"></SelectCategory>

        <br>
        <select v-model="filterPrice">
            <option value="default">По умолчанию</option>
            <option value="increment">По возрастанию</option>
            <option value="decrement">По убыванию</option>
        </select>
        <select v-model="filterSale">
            <option value="all">Все товары</option>
            <option value="true">Со скидкой</option>
            <option value="false">Без скидки</option>
        </select>
        <br>


        <div class="row">
            <ProductCard2 v-for="card in filteredCards" v-bind:card="card"></ProductCard2>
        </div>
        <InfoPopup></InfoPopup>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ProductCard2 from '@/components/ProductCard2'
    import SelectCategory from '@/components/SelectCategory'
    import InfoPopup from '@/components/InfoPopup'

    export default {
        name: 'Catalog',
        data() {
            return {
                filterCategory: '',
                filterPrice: '',
                filterSale: '',
            }
        },
        components: {
            ProductCard2: ProductCard2,
            SelectCategory: SelectCategory,
            InfoPopup: InfoPopup,
        },
        computed: {
            ...mapGetters(['allProducts']),
            filteredCards() {
                var filter = this.filterCategory,
                    allResult = this.$store.getters.allProducts,
                    cardResult = [];

                allResult.forEach(function (item, i, arr) {
                    if (item.category == filter) {
                        cardResult.push(item);
                    }
                });
                return cardResult;
            }
        },
    }

</script>

<style scoped>

</style>