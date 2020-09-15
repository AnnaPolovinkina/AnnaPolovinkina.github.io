<template>
    <div class="page-wrapper">
        <MainSlider></MainSlider>
        <a href="/catalog">
            Перейти в каталог
        </a>
        <a href="/catalog2">
            Перейти в каталог 2
        </a>

        <!--v-bind:category="category.name"-->

        <div v-for="category in allCategories">
            <h1>Название категории: {{category.name}}</h1>
            <SaleProducts v-bind:resultAll="allResult" v-bind:category="category.name"/>
        </div>

    </div>
</template>

<script>
    import MainSlider from '@/components/MainSlider'
    import SaleProducts from  '@/components/SaleProducts'
/*    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'*/

    export default {
        name: "Home",
        components: {
            MainSlider: MainSlider,
            SaleProducts: SaleProducts
        },
        data() {
            return {
                allResult: [],
                allCardCategories: []
            }
        },
        methods: {
            // ...mapActions(['fillCategoriesProducts'])
        },
        computed: {
            // ...mapGetters(['allCategoriesProducts']),
            allCategories() {
                this.allResult = this.$store.getters.allProducts;
                var arrJson = this.allResult,
                    categoryResult = [];
                arrJson.forEach(function (item) {
                    if (!categoryResult.includes(item.category)) {
                        categoryResult.push(item.category);
                    }
                });
                categoryResult = categoryResult.map(function (item) {
                    return {name: item, category: item};
                });
                return categoryResult;
            }
        }
    }
</script>

<style scoped>
    .page-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>