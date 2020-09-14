<template>
    <div id="product-page">
        Драсьте
        <p>Название продукта: {{product.title}}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "ProductPage",
        computed: {
            ...mapGetters(['allProducts']),
            product() {
                var result = {},
                    vm = this;
                this.allProducts.map(function (elem) {
                    if (elem.id == vm.$route.query.product) {
                        result = elem;
                    }
                });
                return result;
            }
        }
    }
</script>

<style scoped>

</style>