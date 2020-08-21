<template>
        <select v-model="filter">
            <option v-for="category in filteredOptions" v-bind:name="category.category">
                {{ category.category }}
            </option>
        </select>
        <!--<p>{{ filteredOptions }}</p>-->
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "SelectCategory",
        props: {
            filter: {
                type: String
            }
        },
        computed: {
            ...mapGetters(['allProducts']),
            filteredOptions() {
/*                var allResult = this.$store.getters.allProducts;
                var categoryResult = [];
                allResult.forEach(function (item, i, arr) {
                    if (!categoryResult.includes(item.category)) {
                        categoryResult.push(item.category);
                    }
                });
                return categoryResult;*/

                var allResult = this.$store.getters.allProducts,
                    categoryResult = [];
                allResult.forEach(function (item, i, arr) {
                    var jsonCategory = item.category;
/*                    var id = item.id;
                    categoryResult[item.id] = item.category;*/
                    categoryResult.push({
                        category: jsonCategory
                    });
                });
                return categoryResult; //Массив с категориями для селекта


            }
        },
        mounted () {
            this.$emit('filtered', this.filter);
        }
    }
</script>

<style scoped>
    select {
        width: 300px;
    }
</style>