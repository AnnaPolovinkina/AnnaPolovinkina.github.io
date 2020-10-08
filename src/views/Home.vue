<template>
    <div class="page-wrapper">
        <MainSlider></MainSlider>
        <!-- <router-link v-bind:to="{name: 'catalog2'}">
            Перейти в каталог
        </router-link>-->
        <div v-for="category in allCategories">
            <h3>Название категории: {{category.name}}</h3>
            <SaleProducts
                v-bind:resultAll="allResult"
                v-bind:category="category.name"
            />
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
            allCategories() { //Получение категорий товаров из JSON
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