<template>
        <select v-model="filter" v-on:change="changeFilter">
            <option v-for="category in filteredOptions" v-bind:name="category.category">
                {{ category.category }}
            </option>
        </select>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "SelectCategory",
        data() {
            return {
                filter: '',
            }
        },
        computed: {
            ...mapGetters(['allProducts']),
            filteredOptions() {
                var allResult = this.$store.getters.allProducts,
                    categoryResult = [],
                    jsonCategory;
                allResult.forEach(function (item, i, arr) {
                    jsonCategory = item.category;
                    if (!categoryResult.includes(jsonCategory)) {
                        categoryResult.push(jsonCategory);
                    }
                });
                categoryResult = categoryResult.map(function (item, index,array) {
                    return {category: item};
                });
                categoryResult.unshift({category: 'Все категории'});
                return categoryResult;
            }
        },
        mounted() {
            this.filter = 'Все категории';
            this.$emit('changeFilter', this.filter);
        },
        methods: {
            changeFilter() {
                this.$emit('changeFilter', this.filter);
            }
        },
    }
</script>

<style scoped>
    select {
        width: 300px;
    }

</style>