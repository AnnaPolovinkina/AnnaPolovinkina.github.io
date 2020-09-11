<template>
    <div class="row">
        <ProductCard2
                v-for="card in sales"
                v-bind:card="card"
        ></ProductCard2>
    </div>
</template>

<script>
    import ProductCard2 from '@/components/ProductCard2'

    export default {
        name: "SaleProducts",
        data() {
          return {
          }
        },
        props: {
          category: {
              type: String
          },
            resultAll: {
            type: Array
          }
        },
        components: {
            ProductCard2: ProductCard2
        },
        computed: {
            sales() {
                var all = this.resultAll,
                    cardCategory = this.category,
                    cardResult = [];
                // console.log(all);
                // console.log(cardCategory);

                all.forEach(function (elem, ind) {
                    if (elem.category === cardCategory) {
                        cardResult.push(elem);
                    }
                });

                cardResult = cardResult.filter(item => item.isSale);
                return cardResult;
            }
        }
    }
</script>


<style scoped>

</style>