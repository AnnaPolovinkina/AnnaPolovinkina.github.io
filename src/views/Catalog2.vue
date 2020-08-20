<template>
    <div>
        <select v-model="filter">
            <option value="bags">Сумки</option>
            <option value="glasses">Очки</option>
            <option value="gloves">Перчатки</option>
            <option value="purses">Кошельки</option>
        </select>
        <div class="row">
            <ProductCard v-for="card in allProducts" v-bind:card="card"></ProductCard>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ProductCard from '@/components/ProductCard'

    export default {
        name: 'Catalog',
        data() {
            return {
                filter: 'bags'
            }
        },
        components: {
            ProductCard: ProductCard
        },
        computed: mapGetters(['allProducts']),
    }

</script>

<style scoped>

</style>