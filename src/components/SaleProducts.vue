<template>
    <div class="row">
        <swiper ref="mySwiper" :options="swiperOptions">
                <ProductCard2
                        v-for="card in sales"
                        v-bind:card="card"
                        v-bind:slideClass="'swiper-slide'"
                >
                </ProductCard2>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import ProductCard2 from '@/components/ProductCard2'
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'

    export default {
        name: "SaleProducts",
        data() {
          return {
              swiperOptions: {
                  pagination: {
                      el: '.swiper-pagination'
                  }
              }
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
            ProductCard2: ProductCard2,
            Swiper: Swiper,
            SwiperSlide: SwiperSlide
        },
        directives: {
            swiper: directive
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
            sales() {
                var all = this.resultAll,
                    cardCategory = this.category,
                    cardResult = [];
                all.forEach(function (elem, ind) {
                    if (elem.category === cardCategory) {
                        cardResult.push(elem);
                    }
                });
                cardResult = cardResult.filter(item => item.isSale);
                return cardResult;
            }
        },
        mounted() {
            // this.swiper.slideTo(3, 1000, false);
        }
    }
</script>


<style scoped>

</style>