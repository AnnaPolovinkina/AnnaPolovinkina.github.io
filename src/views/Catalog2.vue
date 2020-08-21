<template>
    <div>
<!--        <select v-model="filter">
            <option value="bags">Сумки</option>
            <option value="glasses">Очки</option>
            <option value="gloves">Перчатки</option>
            <option value="purses">Кошельки</option>
        </select>-->
        <SelectCategory v-bind:filter="filter"></SelectCategory>
        <br>
        <!--{{ filteredCards }}-->
        <!--<b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>-->

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
                filter: 'red',
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
                var filter = this.filter,
                    allResult = this.$store.getters.allProducts,
                    cardResult = [];

                console.log(filter);
                allResult.forEach(function (item, i, arr) {
                    if (item.category == filter) {
                        cardResult.push(item);
                    }
                });
                return cardResult;
            }
        },
        mounted () {
            this.$on('filtered', (filter) => {
                this.filter = filter
            })
        },
    }

</script>

<style scoped>

</style>