<template>
    <div class="slider-sale">
        <div class="row">
            <swiper
                class="swiper"
                :options="swiperOptions"
            >
                <ProductCard2
                    v-for="card in sales"
                    v-bind:card="card"
                    v-bind:slideClass="'swiper-slide'"
                >
                </ProductCard2>
                <div
                    class="swiper-pagination"
                    slot="pagination"
                ></div>
                <div
                    class="swiper-button-next"
                    slot="button-prev"
                ></div>
                <div
                    class="swiper-button-prev"
                    slot="button-next"
                ></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import ProductCard2 from '@/components/ProductCard2'
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "SaleProducts",
        data() {
          return {
              swiperOptions: {
                  pagination: {
                      el: '.swiper-pagination',
                      type: 'bullets'
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                  },
                  breakpoints: {
                      320: {
                          slidesPerView: 1,
                      },
                      576: {
                          slidesPerView: 2,
                      },
                      992: {
                          slidesPerView: 3,
                      }
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
            swiper() { //Инициализация слайдера
                return this.$refs.mySwiper.$swiper
            },
            sales() { //Фильтрация товаров по категориям и наличию скидки
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
        }
    }
</script>