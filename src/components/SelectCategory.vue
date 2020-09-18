<template>
        <select
                v-model="filter"
                v-on:change="changeFilter"
        >
            <option
                    v-for="category in filteredOptions"
                    v-bind:name="category.name"
            >
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
                allCategory: []
            }
        },
        computed: {
            ...mapGetters(['allProducts']),
            filteredOptions() {
                var allResult = this.$store.getters.allProducts,
                    categoryResult = [],
                    jsonCategory;
                allResult.forEach(function (item) {
                    jsonCategory = item.category;
                    if (!categoryResult.includes(jsonCategory)) {
                        categoryResult.push(jsonCategory);
                    }
                });
                categoryResult = categoryResult.map(function (item) {
                    return {name: item, category: item};
                });
                categoryResult.unshift({name: '', category: 'Все категории'});
                this.allCategory = categoryResult;
                return categoryResult;
            }
        },
        watch: {
            '$route' (to, from) {
                var goCatalog = to.params.fromSliderToCatalog;
                if (goCatalog || typeof goCatalog !== "undefined") {
                    this.filter = goCatalog;
                    this.$emit('changeFilter', goCatalog);
                    this.$route.params.fromSliderToCatalog = '';
                } else {
                    var vm  = this;
                    vm.filter = 'Все категории';
                    vm.allCategory.forEach(function (elem) {
                        if (elem.category === vm.filter) {
                            vm.$emit('changeFilter', elem.name);
                        }
                    });
                }
            }
        },
        mounted() {
            var goCatalog = this.$route.params.fromSliderToCatalog;
            if (goCatalog || typeof goCatalog !== "undefined") {
                this.filter = goCatalog;
                this.$emit('changeFilter', goCatalog);
                this.$route.params.fromSliderToCatalog = '';
            } else {
                var vm  = this;
                vm.filter = this.$store.getters.getCategory;
                vm.allCategory.forEach(function (elem) {
                    if (elem.category === vm.filter) {
                        vm.$emit('changeFilter', elem.name);
                    }
                });
            }
        },
        methods: {
            changeFilter() {
                var vm  = this;
                vm.allCategory.forEach(function (elem) {
                    if (elem.category === vm.filter) {
                        vm.$emit('changeFilter', elem.name);
                    }
                });
                vm.$emit('resetPage');
                this.$store.dispatch('changeCategory', vm.filter);
            }
        },
    }
</script>